const User = require('../models/User');
const jwt = require('jsonwebtoken')

exports.registre = (req,res) =>{

    // verification si email existe
    User.findOne({ email : req.body.email }).exec( (error , user )=> {

        if ( user ) return res.status(400).json({ message : 'email deja existe'})

        const { nom , prenom , email , password , telephone , adresse  }  = req.body ;

        const _user = new User({
            nom,
            prenom,
            email,
            password,
            telephone,
            adresse, 
            role : 'User'

        })


        _user.save((error , data) => {
            if (error) return res.status(400).json({ message : 'un erreur se produit'})
            if (data){
                return res.status(200).json({ message : 'utilisateur ajoutee'})
            }
        })



    } )

}

exports.login = (req,res) =>{


User.findOne({ email : req.body.email }).exec((error,user) => {
    if (error) return res.status(400).json({ error })
    if (user){

                if (user.authenticate(req.body.password) ){
                    const token = jwt.sign({ _id : user._id , nom : user.nom , prenom : user.prenom } , 'ABCDET' , { expiresIn : '5h' } )
                    const { _id , nom , prenom , telephone , adresse , role } = user;

                    res.status(200).json({
                        token,
                        user : { _id , nom , prenom , telephone , adresse , role }
                    })

                }else{
                    return res.status(400).json({ message : 'Mot passe errone' })
                }

    }else{
        return res.status(400).json({ message : 'un erreur se produit'})
    }


})


}



exports.createAdmin = (req,res) =>{

    // verification si email existe

    const email = "marwa@gmail.com";
    const password ="12345678";
  

    User.findOne({ email : email }).exec( (error , user )=> {

        if ( user ) return res.status(400).json({ message : 'Admin deja existe'})
        const _user = new User({
            nom : 'marwa',
            prenom : 'ghanmi' ,
            email :  email,
            password : password ,
            telephone : '22001235',
            adresse : 'Tunis', 
            role : 'Admin'

        })


        _user.save((error , data) => {
            if (error) return res.status(400).json({ message : 'un erreur se produit'})
            if (data){
                return res.status(200).json({ message : 'Admin ajoutee'})
            }
        })



    } )

}