const mongoose = require('mongoose'); /* Modelador de Objetos de Mongo DB */

const url = 'mongodb://localhost:27017/mongodb_test'       /* Url de mi Base de datos */


/* Conectando con la BD, usando los parametros de la pg oficial www.npmjs.com/package/mongoose */
mongoose.connect(url, {

    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true

})
.then( ()=> console.log ('Conectado a Base de datos'))
.catch( (e)=> console.log ('Error de conexion es: '+e))

/* Schema de nuestra BD */

const personasSchema = mongoose.Schema({

    nombre: String,
    edad: Number,
    pais: String

})

/* Modelo de la BD y nuestro schema */
const PersonasModel = mongoose.model('Personas', personasSchema)

            /* Creando metodos de Requisiciones */

/* GET */

const mostrar = async ()=>{
    const personas = await PersonasModel.find()
    console.log(personas)
}

/* Post */

const crear = async ()=>{
    const persona = new PersonasModel ({
        nombre: "Gian",
        edad: 34,
        pais: "Venezuela"
    })

    const resultado = await persona.save()
}

/* PUT */

const actualizar = async (id)=>{
    const persona = await PersonasModel.updateOne({_id:id},
        {
            $set:{
                nombre: 'Erick',
                pais: 'España'
            }
        })
}

/* Delete */

const eliminar = async (id)=>{
    const persona = await PersonasModel.deleteOne({_id:id})
}