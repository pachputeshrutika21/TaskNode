const mongoose=require('mongoose');
const qliktagInterns=mongoose.model('qliktagInterns');
exports.createUser=async(req,res)=>{
    //res.json(req.body);
    const user=new qliktagInterns(req.body); 
    console.log("Hiiii");
    await user.save();
    res.redirect(`/`);
}
