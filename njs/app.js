var express=require('express');
var app=express();
app.set('port', process.env.PORT||3000);
app.get('/index', (req,res)=>{
    res.status(200).sendFile(__dirname+"/index.html");
});
app.use((req,res)=>{
    res.status(400).send("Invlud URL");
})
app.listen(app.get('port'),()=>{
    console.log(`http://localhost:${app.get('port')}`);
})
