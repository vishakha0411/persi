var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(__dirname))
app.set('port', process.env.PORT || 3000)

const eventDetails = {
   "events" : [
    {'eventId': 111, 'eventName':'A-Z Planning', 'eventDate':'2019-12-15', 'eventLocation':'Chennai'},
    {'eventId': 112, 'eventName':'Creative Corner', 'eventDate':'2019-07-05', 'eventLocation':'Erode'},
    {'eventId': 113, 'eventName':'DreamTeam', 'eventDate':'2019-06-07', 'eventLocation':'Salem'},
    {'eventId': 114, 'eventName':'Unique Planners', 'eventDate':'2019-11-10', 'eventLocation':'Bangalore'},
    {'eventId': 115, 'eventName':'Last Moment Savers', 'eventDate':'2019-07-05', 'eventLocation':'Erode'}
    ]
}


const responseHTML = (id) => {
    const arr = eventDetails.events;
    let target;
    for(ele of arr){
        if(ele.eventId == id){
            target = ele;
            break;
        }
    }

    const resStr = `<h1>Event Details </h1>
    <p>Event Id - ${target.eventId}</p>
    <p>Event Name - ${target.eventName}</p>
    <p>Event Date - ${target.eventDate} </p>
    <p>Event Location - ${target.eventLocation}</p>
    `
    return resStr;
}

app.get('/events/:id(\\d+)', (req, res) => {
    const {id} =  req.params;
    return res.send(responseHTML(id));
})

app.get("*", (req, res)=> {
    res.send("This is an invalid URL")
})

app.listen(app.get('port'))





