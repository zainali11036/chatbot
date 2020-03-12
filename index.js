'use strict'
const express=require('express')
const bodyParser=require('body-Parser')
const request=require('request')
const app=express()
app.set('port',(process.env.PORT || 5000))
// Allows us to process the data
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
// Routes
app.get('/',function(req,res){
	req.send("hi i am chat bot")
})
// Facebook
app.get('/webhook',function(req,res){
	if(req.query['hub.verify_token']=='honey singh'){
		res.send(req.query['hub.challenge'])
	}
	else
		res.send("Wrong Token")
})
app.listen(app.get('port'),function(){
	 console.log("Running:port")
})