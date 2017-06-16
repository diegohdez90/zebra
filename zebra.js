//var fetch = require('node-fetch');
const { execFile } = require('child_process');
var express = require('express')
var app = express();
var bodyParser = require('body-parser')

try{
	var fs = require('fs')	
}
catch(e){
	console.log(e);
}
app.use(function (req,res,next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended : false
}));


app.get('',function (req,res) {
	res.send('Launched')
})
app.post('/setCadena',function (req,res) {
	var cadena = req.body.params.zpl;
	//Cambiar `diego` por el nombre de su computadora
	fs.writeFile('C:\\Users\\diego\\Documents\\zebra.zpl', cadena , (err) => {
		if(err){
			res.send(JSON.stringify({ msg : err }));
		}
		res.send(JSON.stringify({ msg : 'Archivo Guardado exitosamente' }));
	})

})

app.get('/imprimirZpl',function(req,res){
	fs.open('C:\\Users\\diego\\Documents\\zebra.zpl','r',function (err,fd) {
		if (err) throw err;
		console.log(fd);
	});

	console.log('Impriendo');
	res.send(JSON.stringify( { msg : 'Imprimiendo' } ))
})
/*const child = execFile('print', ['C:\\Users\\diego\\Documents\\zebra.zpl','/D:LPT2'], (error, stdout, stderr) => {
	if (error) {
		throw error;
	}
	console.log(stdout);
});*/

app.listen(3000,function() {
	console.log('Listen Port 3000')
});


//fs.open('C:\\Users\\diego\\Documents\\zebra.txt','r',function (err,fd) {
//	console.log(err);
//	console.log(fd);
//});

