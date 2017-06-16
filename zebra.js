const { exec } = require('child_process');
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
	extended : true
}));


app.get('',function (req,res) {
	res.send('Launched')
})
app.post('/setCadena',function (req,res) {
	var cadena = req.body.params.zpl;
	//Cambiar `diego` por el nombre de usuario
	fs.writeFile('C:\\Users\\diego\\Documents\\zebra.zpl', cadena , (err) => {
		if(err){
			res.send(JSON.stringify({ msg : err }));
		}
		res.send(JSON.stringify({ msg : 'Archivo Guardado exitosamente' }));
	})

})

app.get('/imprimirZpl',function(req,res){
	//Cambiar `diego` por el nombre de usuario
	exec('C:\\Users\\diego\\Documents\\zpl.bat', (error, stdout, stderr) => {
		if (error) {
			throw error;
		}
		console.log(stdout);
		res.send(JSON.stringify( { msg : 'Imprimiendo' } ))

	})
})


app.listen(3000,function() {
	console.log('Listen Port 3000')
});



