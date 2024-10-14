/*npm i mongoose@5.3.16
Like the MongoDB native driver, Mongoose provides a connect function you can use to
connect to your MongoDB database.*/

const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
useNewUrlParser: true,
useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
    type: String
    },
    age: {
    type: Number
    }
    })

    const me = new User({
        name: 'Andrew',
        age: 27
        })
        The new model instance can be saved to the database using the save method.
        me.save().then(() => {
        console.log(me)
        }).catch((error) => {
        console.log('Error!', error)
        })

        const mongoose = require('mongoose')
        const validator = require('validator')
        const User = mongoose.model('User', {
        name: {
        type: String,
        required: true,
        trim: true
        },
        email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
        if (!validator.isEmail(value)) {
        throw new Error('Email is invalid')
        }
        }
        }
        })

//app.use
app.use(express.json())
app.post('/users', (req, res) => {
const user = new User(req.body)
user.save().then(() => {
res.send(user)
}).catch((e) => {
res.status(400).send(e)
})
})

app.get('/users/:id', (req, res) => {
    const _id = req.params.id // Access the id provided
    User.findById(_id).then((user) => {
    if (!user) {
    return res.status(404).send()
    }
    res.send(user)
    }).catch((e) => {
    res.status(500).send()
    })
    })

    app.patch('/users/:id', async (req, res) => {
        // Route handler code here
        })
    
        const updates = Object.keys(req.body)
        const allowedUpdates = ['name', 'email', 'password', 'age']
        const isValidOperation = updates.every((update) =>
        allowedUpdates.includes(update))
        if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
        }

        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, { new:
            true, runValidators: true })
            if (!user) {
            return res.status(404).send()
            }
            res.send(user)
            } catch (e) {
            res.status(400).send(e)

            app.delete('/users/:id', async (req, res) => {
                // Route handler
                })
                //The handler itself can delete the resource using findByIdAndDelete.
                try {
                const user = await User.findByIdAndDelete(req.params.id)
                if (!user) {
                return res.status(404).send()
                }
                res.send(user)
                } catch (e) {
                res.status(500).send()
                }

                const router = new express.Router()
                router.post('/someEndpoint', (req, res) => {
                // Do something
                })
                module.exports = router