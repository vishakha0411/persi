1.
var express = require('express')
var app = express()
app.set('port', process.env.PORT || 3000)

app.get('/',  (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.listen(app.get('port'))


html
<html>
    <body>
        <h1>The Evenire </h1>
        <p>For a successful event </p>
    <body>
</html>

2.
var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(__dirname))
app.set('port', process.env.PORT || 3000);

const getData = (id) => {
    let data = null;
    for(e of eventDetails.events){
        if(e.eventId == id){
            data = e;
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

app.get('/obtainEvent/:id(\\d+)', (req, res) => {
    const {id} =  req.params;
    let data =  getData(id);
    if(data){
        data = JSON.stringify(data);
        res.send(<body> ${data}</body>);
    }else{
         res.send(Invalid event);
    }
    
})

app.listen(app.get('port'))









3.
var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);


var events = {
  '1': {
    eventName: 'Marriage Event',
    eventId: '1',
  },
  '2': {
    eventName: 'Corporate Event',
    eventId: '2',
  },
  '3': {
    eventName: 'Social Event',
    eventId: '3',
  },
  '4': {
    eventName: 'Birthday Party',
    eventId: '4',
  }
};
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})
app.get('/event/:id', (req, res)=> {
  let {id} = req.params;
  const strid = id;
  id = Number(id);
  if(id >= 1 && id <= 4){
    const template = 
    `<body>
      <h1>
        Event Details
      </h1>
      <div>
        <div>Event Id : ${id} </div>
        <p>Event Name :   ${events[strid].eventName} </p> 
    </div>
    </body>
    `;
    res.send(template);
  } else{
    res.status(404).send(<p>Oops! Page Not Found);
  }
})


app.listen(app.get('port'));


html 
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <body>
      <div>
          Events
        </div>
        <div>
            <a href="/event/1"> Marriage Event</a>
             <a href="/event/2"> Corporate Event</a>
              <a href="/event/3"> Social Event</a>
               <a href="/event/4"> Birthday Party</a>
        </div>
  </body>
</html>