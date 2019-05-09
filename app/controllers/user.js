const { user } = require('../models');
const {login_infor} = require('../models');
const { u_adre } = require('../models');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
module.exports={

    list(req,res){
        return user
        .findAll()
            .then((users)=> res.status(200).json(users))
            .catch((error)=>{ res.status(400).send(error)});
    },
    getById(req, res){
        return user
            .findByPk(req.params.id)
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
            .create({
                name: req.body.name,
                email:req.body.email,
                surname:req.body.surname,
                cpf:req.body.cpf,
            })
            .then((users)=> {
                user.findByPk(users.id)
                    .then(users=>{
                        const hash = bcrypt.hashSync(req.body.password, salt);
                        login_infor.create({
                            id_user:users.id,
                            login: req.body.email,
                            password: hash,
                        })
                    })
                res.status(201).json(users)
                })
            .catch((error)=> res.status(400).send(error));

    }, 
    addAdress(req, res){
        return u_adre
            .create(req.body)
                .then(u_adres=> {
                    user.findByPk(req.body.id)
                        .then(users=>{
                            users.update({
                                id_adress : u_adres.body.id,
                            })
                        })
                    res.status(200).json(u_adres)})
                .catch((error)=>{res.status(400).send(error)});
    },
 
    update(req,res){
        return user
            .findByPk(req.params.id)
                .then(user=>{
                    if(!user){
                        return res.status(404).send({
                            message:'User Not Found',
                        });
                    }
                    return user.update(req.body)
                    .then(()=> res.status(200).json(user))
                    .catch((error)=> res.status(400).send(error));
                })
                .catch((error)=> res.status(400).send(error));
    },

    delete(req,res){
        return user
            .findByPk(req.params.id)
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