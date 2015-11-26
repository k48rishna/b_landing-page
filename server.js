
var express = require("express");
var bodyparser = require("body-parser");
var app = express();
app.use(express.static(__dirname + '/'));
//app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.json());

app.get('/',function(req,res){
	//res.sendFile(__dirname + '/index.html');
});

app.post('/',function(req,res){

	/*var user = req.body.cf.;
	var msg = req.body.password;*/
	console.log(req.body);
});

app.listen(3000,function(){
	console.log("server started at 3000");
});