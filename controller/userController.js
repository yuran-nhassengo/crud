const User = require("../model/userModel")

const createUser = async (req,res) =>{
        try{
            const userData = new User(req.body);
            const {email} = userData;

            const userExist = await User.findOne({email})
            if(userExist){
                return res.status(400).json({message:"User already exists."});
            }

           const  saveUser = await userData.save();
           res.status(200).json(saveUser);
        }catch(err){
            res.status(500).json({err: "Internal Server error."});
        }
};

const fetch = async (req,res) => {
    try{
       return  res.json("Hello World");
    }catch (error) {
        res.status(500).json({error: "Internal Server error."});
    }
};

module.exports = {fetch,createUser};