const express=require('express');
const app=express();
const users=require("./user.json");
var fs=require('fs');
app.set('port',process.env.PORT ||3000)

app.get("/users", (req,res)=>{
    return res.json(users);
});

app.get("/users/:id",(req,res)=>{
    const id=Number(req.params.id);
    const user=users.find((user)=>user.id===id);
    return res.json(user);
});

app.post('/users',(req,res)=>{
    return res.json({status:"pending"});
});

app.patch('/users/:id',(req,res)=>{
    return res.json({status:"pending"});
});

app.delete('/users',(req,res)=>{
    return res.json({status:"pending"});
});
/*app.get('/users',(req,res)=>{
    const html=`
    <ul>
    ${users.map((user)=>
        `<li>${user.firstName} ${user.lastName}</li>`).join("")
    }
    ${users.map((user)=>
        `<li>${user.lastName}</li>`).join("")
    }
    </ul>`;
    res.send(html);
});
*/
//get update delete all use id and have same so can combine in route
app.route('/user/:id').get((req,res)=>{
    const id=Number(req.params.id);
    const user=users.find((user)=>user.id===id);
    return res.json(user);
})
.patch((req,res)=>{ 
    //edit user with id
    return res.json({status:"pending"});
})
.delete((req,res)=>{
    //delete user with id
    return res.json({status:"pending"});
});

app.listen(app.get('port'));