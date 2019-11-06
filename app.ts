// Importaciones
import express = require('express');
import bodyParser = require('body-parser');
import session = require('cookie-session');
import { Persona } from './Persona';
var data:any = {}


// Declaración de variables
const app:express.Application = express();

app.use( session( { secret:'nodejs' } ) )
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
	res.render('index.ejs', { error: false, data: data })
});

app.post('/procesar', function(req, res) {
	crearObjeto1(req.body)
	crearObjeto2(req.body)
	crearObjeto3(req.body)
	console.log(data)
	res.render('index.ejs', { error: false, data: data })
});

var crearObjeto1 = function(body:any) {
	let objeto1 = new Persona(body.nombre, body.edad, body.sexo, body.peso, body.altura)

	data.objeto1 = {
		titulo: "Objeto 1", 
		pesoIdeal : objeto1.calcularIMC(), 
		esMayorDeEdad: objeto1.esMayorDeEdad(), 
		informacion: objeto1.toString()
	}
}

var crearObjeto2 = function(body:any) {
	let objeto2 = new Persona(body.nombre, body.edad, body.sexo)

	data.objeto2 = {
		pesoIdeal : objeto2.calcularIMC(), 
		esMayorDeEdad: objeto2.esMayorDeEdad(), 
		informacion: objeto2.toString()
	}
}

var crearObjeto3 = function(body:any) {
	let objeto3 = new Persona()

	// unaPersona.setEdad(edad)
	// unaPersona.setPeso(peso)
	// unaPersona.setAltura(altura)
	// unaPersona.setSexo(sexo)

	data.objeto3 = {
		pesoIdeal : objeto3.calcularIMC(), 
		esMayorDeEdad: objeto3.esMayorDeEdad(), 
		informacion: objeto3.toString()
	}
}
 
app.listen(8080, () => {
    console.log("Me estoy ejecutando desde app");
});

// module.exports = app;