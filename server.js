const express = require("express");
const app = express();

// method for respoding to the request from server side
app.get("/", function(request, response) // "/" :- home location (root node )
{
  console.log(request);
  response.send("<h1>Hello World!</h1>");     // sending the server 
});

app.listen(3000,function()
{
    console.log("Server sarted at port 3000");
});
