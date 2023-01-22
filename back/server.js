const express = require("express");
const server = express();


const{routes} = require('./rutas/User.js')

const {routesAuth} = require('./rutas/auth.js')



//middleawares
 

server.use('/api/user', routes)
server.use('/api/auth', routesAuth)




server.set('port', process.env.PORT || 9000);


server.listen(server.get('port'), ()=>{

console.log('corriendo en el puerto ', server.get('port') )

})



server.get('/', (req, res)=>{

    res.send('Estamos en la api')
    
    
    })


    
