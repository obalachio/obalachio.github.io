const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var cors = require('cors')

app.use(cors());
app.use(express.static(path.resolve(__dirname, './myweb/build')));

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './myweb/build', 'index.html'));
  });

app.post("/contact", (req, res) =>{
    let name = req.body.name;
    let email = req.body.email;
    let mobileNumber = req.body.mobileNumber;
    let message = req.body.message;

    console.log(name);
    console.log(email);
    console.log(mobileNumber);
    console.log(message);

    // todo: how and where send the message to
    res.json({
        "status": 200
    });
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});