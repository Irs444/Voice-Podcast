
const {Router} = require("express");
const Model = require("../models/publishModel")

const router = Router();

router.post("/add",(req, res)=> {

    console.log(req.body);
    new Model(req.body).save()

    .then((result)=>{
    res.json(result);

    }).catch((err)=>{
       console.error(err)
       res.status(500).json(err);
    });

});

router.post("/authenticate",(req, res)=> {
    Model.findOne(req.body)

    .then((result)=>{
        if(result)
        res.json(result);
    else res.status(401).json({message : "Invalide Credential"});


    }).catch((err)=>{
        console.error(err)
        res.status(500).json(err);

    })

});

router.get("/getall",(req, res)=> {
    
    Model.find({})

    .then((result)=> {
        res.json(result);
    }).catch((err)=> {
        console.error(err)
        res.status(500).json(err);
    });

});

router.get("/getbyemail/:email",(req, res) => {

    Model.findOne({email : req.params.email})

    .then((result)=>{
        res.json(result);
    }).catch((err)=> {
        console.error(err)
        res.status(500).json(err);
    });
});

router.get("/getbyid/:id",(req,res)=>{

    Model.findById(req.params.id)

    .then((result)=>{
        res.json(result);

    }).catch((err)=>{
        console.err(err)
        res.status(500).json(err);
    });
});

router.put("/update/:id",(req, res)=>{

    Model.findByIdAndUpdate(req.params.id, req.body, {new : true})

    .then((result)=> {
        res.json(result);
    }).catch((err)=>{
        console.error(err)
        res.status(500).json(err);
    });
});

router.delete("/delete/:id",(req,res)=>{

    Model.findByIdAndDelete(req.params.id)

    .then((result)=>{
        res.json(result);

    }).catch((err)=>{
       console.error(err)
       res.status(500).json(err);
    });
});

router.get("/getbylocation/:location",(req,res)=>{

    Model.find({location: req.params.location})

    .then((result)=>{
        res.json(result);

    }).catch((err)=>{
        console.log(err);
        res.status(500).json(err);
    });
});

router.get("/getbycategory/:category",(req,res)=>{

    Model.find({category: req.params.category})

    .then((result)=>{
        res.json(result);

    }).catch((err)=>{
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;