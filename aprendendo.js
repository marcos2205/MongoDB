const mongoose = require("mongoose")

//configurando o mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/aprendendo", {
    useMongoClient: true
}).then(() => {
    console.log("mongodb conectado")
}).catch((err) => {
    console.log("houve um erro ao se conctar ao mongoDB: " + err)
})
//Model - Usuarios
//definindo o model
const UsuarioSchema = mongoose.Schema({
    nome: { type: String, require: true },
    sobrenome: { type: String, require: true },
    email: { type: String, require: true },
    idade: { type: Number, require: true },
    pais: { type: String }
})
//collection
mongoose.model('usuarios',UsuarioSchema)

const Marcos = mongoose.model('usuarios')
new Marcos({
    nome: "Marcos",
    sobrenome: "Barbosa",
    email: "marcos2205@gmail.com",
    idade: 28,
    pais: "Brasil"
}).save().then(()=>{
    console.log("usuario criado com sucesso")
}).catch((err)=>{
    console.log("erro: "+err)
})