const mongoose=require('mongoose');
const todo=require('../model/todo');
const express = require('express');
const router=express.Router();
router.use(express.json())

router.get('/view',async (req,res)=>{
    const data=req.body;
    const todos=await todo.find(data);
    res.json(todos);
});
router.post('/add',async (req,res)=>{
    const {description,status}=req.body;
    const todo1=new todo({description,status});
    await todo1.save();
    res.json({message:"post successful"})
});


router.delete('/delete/:id',async(req,res)=>{
    try{
        const id=req.params.id;
        await todo.findByIdAndDelete(id,req.body);
        res.status(200).send('Delete Successful');
    }
    catch(err){
        res.status(404).send('Delete Unsuccessful')
    }
    });

    router.put('/edit/:id',async(req,res)=>{
        try{
            const id=req.params.id;
            await todo.findByIdAndUpdate(id,req.body);
            res.status(200).send('edit sucessful');
        }
        catch(err){
            res.status(404).send('edit unsuccessful')
        }
    });


module.exports = router;  
