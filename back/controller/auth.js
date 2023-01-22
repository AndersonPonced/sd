const bcrypt = require('bcrypt')
const db = require('../connect')




module.exports ={

 login: function(req, res){

res.send('jdijidj')


},

 register: function(req, res){

//check user if exists

const q = "SELECT FROM data WHERE username = ?"

db.query(q,[req.body.username], (err,data)=>{

  if(err) return res.status(500).json(err)
  if(data.length) return res.status(409).json('usuario exoste')







//hash the password

const salt = bcrypt.genSaltSync(10);
const hashePassword = bcrypt.hashSync(req.body.password, salt);
  
const a = "INSERT INTO data (`username`,`password`) VALUE (?) "


const values = [
    req.body.username,
    hashePassword,
]

db.query(a,[values], (err, data)=>{
  
  if(err) return res.status(500).json(err);
  return res.status(200).json('usuario creado')

})
})

},

logout:  function(req, res){
  res.send('jdijidj')



    
}
}