const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
const app = express();
const cookieParser = require('cookie-parser')

app.use(express.json({ limit: '40mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const PORT = 8000;
const main = require('./Router/main.Route')
mongoose.connect(
    `mongodb+srv://eseimhariagbe:admin@bloggingapi.fkdmsin.mongodb.net/todo?retryWrites=true&w=majority`, {
    useNewUrlParser: true
}
);

app.use('/',main)
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
});