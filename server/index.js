//imports at the top 
const express = require('express')
const cors = require('cors')
const server = express()
const db = require('./util/database')
const {User, Product, Cart}= require("./util/models")
const seed = require ('./util/seed')

//middleware

server.use(express.json())
server.use(cors())

//associations
User.hasMany(Cart)
Cart.belongsTo(User)

Product.hasMany(Cart)
Cart.belongsTo(Product)


//endpoints 
server.post('/api/addUser', async(req, res)=>{
    const {username, password} = req.body
    try{
    await User.create({username, password})
    res.status(200).send("user created!")
    } catch {
        res.status(401).send("could not create user")
    }
})

server.get ('/api/user/:id', async (req, res)=>{
    const {id}= req.params
    try{ 
    let info = await User.findOne({where:{id:id}})
    res.status(400).send(info)
    }catch {
        res.status(400).send("couldn't complete request")
    }
})

db
.sync()
// .sync({force:true})
// .then(()=>seed ())
//listen 

server.listen(4000,()=>console.log("server runs on 4000"))
