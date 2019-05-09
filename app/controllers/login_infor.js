const { login_infors } = require('../models');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);



module.exports={

    list(req,res){
        return login_infors
        .findAll()
            .then((users)=> res.status(200).json(users))
            .catch((error)=>{ res.status(400).send(error)});
    },
    update(req,res){
        return login_infors
            .findOne({
                where:{id_user: req.params.id_user}
            })
            .then(login_infors =>{
                if(!login_infors){
                    return res.status(404).send({
                        message:'login Not Found',
                    });
                }
                 const hash = bcrypt.hashSync(req.body.password, salt);

                return login_infors.update({
                    password: hash
                })
                    .then((login_infors)=> res.status(200).json(login_infors))
                    .catch((error)=> res.status(400).send(error));
            })
            .catch((error)=> res.status(400).send(error));
    }
}