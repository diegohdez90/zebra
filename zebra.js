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

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended : false
}));


app.get('',function (req,res) {
	res.send('Launched')
})
app.post('/setCadena',function (req,res) {
	console.log(req);
	var cadena = req.body.zpl;
	console.log(cadena);
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
//console.log(fs)
//'http://148.244.226.38/sibei_gabin/system/zebra.txt'

//fs.open('C:\\Users\\diego\\Documents\\zebra.txt','r',function (err,fd) {
//	console.log(err);
//	console.log(fd);
//});

