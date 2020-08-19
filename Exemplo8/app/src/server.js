const express = require('express');
const app = new express();

app.get('/', function (req, resp) {
    return resp.send("Hello Capitain!");
})

app.listen(8080, function (err) {
    if (err == undefined) {
        console.log("Listening on port 8080");
    }
})