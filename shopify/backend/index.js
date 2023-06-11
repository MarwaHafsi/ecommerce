const express=require("express")
const app=express()

const mongoose=require("mongoose")

const cors=require('cors')
const storeRoute = require("./routes/storeRoute")
const offreRoute = require("./routes/offreRoute")
const categoryRoute = require('./routes/categoryRoute')
const productRoute = require("./routes/productRoute")
const domaineRoute = require("./routes/domaineRoute")
const authRoute = require("./routes/auth")
const clientRoute = require("./routes/clientRoute")

//pour l'autorisation de backend de donner les données
app.use(cors())
//pour comprendre les données qui sont venu de la requete
app.use(express.json());
app.use('/category' , categoryRoute);
app.use('/client' , clientRoute);
app.use('/store' , storeRoute);
app.use('/domaine' , domaineRoute);
app.use('/offre', offreRoute);
app.use('/product',productRoute)
app.use('/auth',authRoute)
 
app.use('/uploads', express.static(process.cwd() + '/uploads'))
mongoose.connect('mongodb://localhost/ecommerceStore').then(
    () => {
        
        console.log('Database connected');

})
app.listen(1000,(req,res)=>{console.log("serveur demarrer")})

