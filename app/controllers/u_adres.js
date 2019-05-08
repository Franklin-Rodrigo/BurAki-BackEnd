const { u_adre } = require('../models');

module.exports={

    list(req,res){
        return u_adre
        .findAll()
            .then((users)=> res.status(200).json(users))
            .catch((error)=>{ res.status(400).send(error)});
    },

    addAdress(req, res){
        return u_adre
            .create(req.body)
                .then(u_adres=> res.status(200).json(u_adres))
                .catch((error)=>{res.status(400).send(error)});
    },
    
    getByAdress(req,res){
        return u_adre
            .findOne({
                where:{id_user: req.params.id_user}
            })
                .then((adress)=> res.status(200).json(adress))
                .catch((error)=>{res.status(400).send(error)});
    },
    updateAdress(req,res){
        return u_adre
            .findOne({
                where:{id_user: req.params.id_user}
            })
            .then(u_adress =>{
                if(!u_adress){
                    return res.status(404).send({
                        message:'Adress Not Found',
                    });
                }
                return u_adress.update(req.body)
                    .then((u_adress)=> res.status(200).json(u_adress))
                    .catch((error)=> res.status(400).send(error));
            })
            .catch((error)=> res.status(400).send(error));
    }

};