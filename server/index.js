var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    request     = require('request');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


app.get("/", (req, res) => {
    res.render('landing');
});

app.listen(3001, () => {
    console.log("Starting the server");
});