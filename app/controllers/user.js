const { user } = require('../models');
module.exports={

    list(req,res){
        return user
        .findAll()
            .then((users)=> res.status(200).json(users))
            .catch((error)=>{ res.status(400).send(error)});
    },
    getById(req, res){
        return user
            .findById(req.params.id)
            .then((user)=>{
                if(!user){
                    return res.status(404).send({
                        message: 'User Not Found',
                    });
                }
                return res.status(200).json(user);
            })
            .catch((error)=> res.status(400).send(error));
    },

    add(req,res){
        return user
            .create(req.body)
            .then((user)=> res.status(201).json(user))
            .catch((error)=> res.status(400).send(error));

    },
    update(req,res){
        return user
            .findById(req.params.id)
                .then(user=>{
                    if(!user){
                        return res.status(404).send({
                            message:'User Not Found',
                        });
                    }
                    return user.update(req.body)
                    .then(()=> res,status(200).json(user))
                    .catch((error)=> res.status(400).send(error));
                })
                .catch((error)=> res.status(400).send(error));
    },

    delete(req,res){
        return user
            .findById(req.params.id)
                .then(user=>{
                    if(!user){
                        return res.status(400).send({
                            message : 'User Not Found',
                        });
                    }
                    return user
                        .destroy()
                        .then(()=> res.status(204).json(user))
                        .catch((error)=> res.status(400).send(error));
                })
                .catch((error)=> res.status(400).send(error));
            },
};