var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(__dirname))
app.set('port', process.env.PORT || 3000)

const getData=(id)=>{
    let data=null;
    for(e of eventDetails.events){
        if(e.eventId==id){
            data=e;
            break;
        }
    }
    return data;
}
const eventDetails = {
   "events" : [
    {'eventId': 111, 'eventName':'A-Z Planning', 'eventDate':'2019-12-15', 'eventLocation':'Chennai'},
    {'eventId': 112, 'eventName':'Creative Corner', 'eventDate':'2019-07-05', 'eventLocation':'Erode'},
    {'eventId': 113, 'eventName':'DreamTeam', 'eventDate':'2019-06-07', 'eventLocation':'Salem'},
    {'eventId': 114, 'eventName':'Unique Planners', 'eventDate':'2019-11-10', 'eventLocation':'Bangalore'},
    {'eventId': 115, 'eventName':'Last Moment Savers', 'eventDate':'2019-07-05', 'eventLocation':'Erode'}
    ]
}

//fill your code
app.get('/obtainEvent/:id(\\d+)', (req,res)=>{ //app.get('/obtainEvent/:id([0-9]+)', (req,res)=>{

    const id=Number(req.params.id);
    let data=getData(id);
    if(data){
        data=JSON.stringify(data);
        res.send(`
        <body>${data}</body>
        `)
    }else{
        res.send('Invalid event');
    }
})
app.listen(app.get('port'))







