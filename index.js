const express = require('express')
var cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;
// const port = 5000;

app.use(cors())

const courseItems = require('./data/courses.json');
const blogs = require('./data/blogs.json');

app.get('/', (req, res) => {
    res.send('Hello World');
});


app.get('/courses', (req, res) => {
    res.send(courseItems);
});

app.get('/courses/:courseId', (req, res) => {
    const id = req.params.courseId;
    console.log(id);
    const selectedCourse = courseItems.find(course => course.id == id)
    res.send(selectedCourse);
});

app.get('/blogs', (req, res) => {
    res.send(blogs);
})

app.get('/blogs/:blogId', (req, res) => {
    const id = req.params.blogId;
    console.log(id);
    const selectedBlog = blogs.find(blog => blog.id == id)
    res.send(selectedBlog);
});

app.listen(port, () => {
    console.log('Server is running')
})