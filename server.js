const express = require('express')

const app = express();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/' , (req , res) => {
    res.json({msg : 'Hello World'})
})

// // Define Routes
app.use('/api/opportunities' , require('./routes/opportunities'))
app.use('/api/users' , require('./routes/users'))

const PORT = process.env.PORT || 5000;

app.listen(PORT , () => console.log(`Server started at port ${PORT}`))