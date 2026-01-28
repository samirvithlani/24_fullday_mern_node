const userSchema = require("../models/UserModel");

// app.get("/users",async(req,res)=>{

//     //query
//     //db.users.find() ==> userSchema.find()
//     const users = await userSchema.find() // find funcntion will return promise

//     res.json({
//         message:"user api called...",
//         data:users
//     })
// })

//functions..

const getUsers = async (req, res) => {
  const users = await userSchema.find();
  res.json({
    message: "user fetched successfully!!",
    data: users,
  });
};

const addUser = async (req, res) => {
  //req -->subobjects -->req.body,req.params,req.query,req.headers
  //object -->body
  //url -->params,query
  //auth -->headers
  console.log("rq.body....", req.body);
  //userSchema.insertOne
  try{
  const savedUser = await userSchema.create(req.body);
  res.json({
    message: "user addedd",
    data: savedUser,
  });
}catch(err){
  res.json({
    err:err
  })
}
};
const deleteUser = async (req, res) => {
  //delete from table where id = ?
  //db.users.delete({_id:?})
  //userSchema.delete()

  const id = req.params.id;
  //userSchema.deleteOne({_id:id})
  const deletedUser = await userSchema.findByIdAndDelete(id);

  if (deletedUser) {
    res.json({
      message: "user deleted successfully !!",
      data: deletedUser,
    });
  } else {
    res.json({
      message: "user not found",
    });
  }
  console.log("id", id);
};

// const updateUser = async(req,res)=>{

//     const id = req.params.id;//where
//     //const data  = req.body; //what
//     //console.log("id",id)
//     //console.log("data",data)

//     //const updatedUser = await userSchema.findByIdAndUpdate(id,req.body)
//     const updatedUser = await userSchema.findByIdAndUpdate(id,req.body,{new:true})
//     if(updatedUser){
//         res.json({
//             message:"user updated..",
//             data:updatedUser
//         })
//     }
//     else{
//         res.json({
//             message:"user not found..",

//         })
//     }

// }

const updateUser = async (req, res) => {
  const id = req.params.id; //where
  //const data  = req.body; //what
  //console.log("id",id)
  //console.log("data",data)

  //const updatedUser = await userSchema.findByIdAndUpdate(id,req.body)
  try {
    const updatedUser = await userSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (updatedUser) {
      res.json({
        message: "user updated..",
        data: updatedUser,
      });
    } else {
      res.json({
        message: "user not found..",
      });
    }
    
  } catch (err) {
    res.json({
      message: "error while update user..",
      err: err,
    });
  }
};
//check if hobby is alreday available dont add it...
const addHobby = async(req,res)=>{
  const hobby = req.body.hobby;
  const id = req.params.id;

  try{
      const updatedUser = await userSchema.findByIdAndUpdate(id,{$push:{hobbiess:hobby}},{new:true})
      if(updatedUser){
        res.json({
          message:"hobby added..",
          data:updatedUser
        })
      }
      else{
        res.json({
          message:"user not found..",
        })
      }
  }catch(err){
    res.json({
      message:"error while add hobby..",
      err:err
    })
  }

}
//pulll --> if hobby is available then remove it
module.exports = {
  getUsers,
  addUser,
  deleteUser,
  updateUser,
  addHobby,
};
