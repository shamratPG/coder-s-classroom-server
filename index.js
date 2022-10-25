const express = require('express')
var cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

app.use(cors())

const courseItems = require('./data/courses.json');
const blogs = require('./data/blogs.json');

app.get('/', (req, res) => {
    res.send('Hello World');
});


app.get('/courses', (req, res) => {
    res.send(courseItems);
});

app.get('/blogs', (req, res) => {
    res.send(blogs);
})

app.listen(port, () => {
    console.log('Server is running')
})