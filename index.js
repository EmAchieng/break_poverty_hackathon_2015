var http = require('http');
var dispatch = require('dispatch');
var querystring = require('querystring');
//express 
var express = require('express');
var cors = require('express-cors')

//invoking express
var myApp = express(); 

//express middleware
var bodyParser = require('body-parser');

 
myApp.use(cors({
    allowedOrigins: [
        '127.0.0.1:8081'

    ]
}));

myApp.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Mkombozi');
//define our schema
var studentSchema = mongoose.Schema({
	name: String,
	adm_no: Number,
	age: Number,
	parent_name: String

});

// compile our model
var Student = mongoose.model('Student', studentSchema);
myApp.use(bodyParser.urlencoded({extended: true}));
myApp.use(bodyParser.json());                                     // parse application/json
myApp.use(bodyParser.json({ type: 'application/vnd.api+json' }));

myApp.post('/students', function(req, res){

	formData = req.body;
	var student = new Student(
					{
						name: formData.name,
						adm_no: formData.adm_no,
						age: formData.age,
						parent_name: formData.parent_name


					}
				);

	var student = new Student(formData);
	student.save(function(err, student){
    	console.log("Success");
	});
});




 myApp.get('/students', function(req, res) {

        // use mongoose to get all todos in the database
        Student.find(function(err, students) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(students); // return all todos in JSON format
        });
    });




myApp.listen(8081, function(){
console.log('Server running on 127.0.0.1:8081');
});
