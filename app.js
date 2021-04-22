const express = require("express");
const app = express();

app.set("view engine", "pug");

// http://localhost:3000/ ---> "Hello from Express!"

let port = 3000

// app.get("/", (request, response) => {

//     response.send("Hello from Express!")

// }).listen(port, () => {
//     console.log(`Listening on port ${port}....`)
// });

app.all("*", (request, response) => {
    console.log(`Request Method: ${request.method}`)
    console.log(`Request Path: ${request.path}`)

    response.render("layout", { title: "WElCOME", heading: "HOME" });
}).listen(port, () => {
    console.log(`Listening on port ${port}....`)
});