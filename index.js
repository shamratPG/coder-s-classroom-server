const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


const courseItems = require('./data/courses.json')

app.get('/', (req, res) => {
    res.send('Hello World');
});


app.get('/courses', (req, res) => {
    res.send(courseItems);
});

app.listen(port, () => {
    console.log('Server is running')
})