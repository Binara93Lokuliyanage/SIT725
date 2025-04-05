var express = require("express")
const mongoose = require('mongoose');
var app = express()
app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const cardList = [
    {
        title: "Kitten 2",
        image: "images/kitten1.jpg",
        link: "About Kitten 2",
        description: "Demo desciption about kitten 2"
    },
    {
        title: "Kitten 3",
        image: "images/kitten2.jpg",
        link: "About Kitten 3",
        descirption: "Demo desciption about kitten 3"
    }
]
app.get('/api/projects', async (req, res) => {
    const projects = await Project.find({});
    res.json({ statusCode: 200, data: projects, message: "Success" });
});


mongoose.connect('mongodb://localhost:27017/myprojectDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB!');
});

const ProjectSchema = new mongoose.Schema({
    title: String,
    image: String,
    link: String,
    description: String,
});
const Project = mongoose.model('Project', ProjectSchema);


var port = process.env.port || 3000;
app.listen(port, () => {
    console.log("App listening to: " + port)
})