var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

//fill your code

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

app.get('/',(req,res)=>{
  res.sendFile(__dirname+'/index.html');
})

app.get('/event/:id',(req,res)=>{
  let id= Number(req.params.id);
  const eid = id;
  if(id>=1 && id<=4 ){
  res.send(
   `
    <body>
    <h1>Event Details</h1>
    <div>
    <div> Event Id: ${id}</div>
    <p> Event Name: ${events[eid].eventName}</p>
    </div>
    </body>
    `)
  }
  else{
    res.status(404).send(` <p>Oops! Page Not found `)
  }
});
app.listen(app.get('port'));


/*
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
    res.status(404).send(`<p>Oops! Page Not Found`);
  }
});


app.listen(app.get('port'));
*/

/*
var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(__dirname))
app.set('port', process.env.PORT || 3000);

app.get("/index",(req,res)=>{
  res.sendFile(__dirname+'/index.html')
})
//fill your code

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

app.get('/events/:id([0-4])',(req,res)=>{
  const userId=Number(req.params.id);
  const user=events.find((user)=>user.eventId==userId);
  if(user){
  res.send(`
  <html>
  <body>
  <p>Event Id:${events.eventId}</p>
  <p>Event Name:${events.eventName}</p>
  </body>
  </html>
  `)}
  else{
    res.status(404).send(`
    <html>
    <body>
    <p>Oops! Pge Not Found</p>
    </body>
    </html>
    `)
  }
});
app.use((req,res)=>{
  res.status(400).send(`
  <html>
  <body>
  <p>Oops! Page Not found</p>
  </body>
  </html>
  `)
})
app.listen(app.get('port'));

*/