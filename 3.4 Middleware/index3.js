import express from "express";

const app = express();
const port = 3000;

function logger(req,res,next){
    console.log("Request Method: ", req.method);
    console.log("Request URL: ", req.url);
    next();//it is essential to call next() to pass control to the next middleware function in the stack. If you don't call next(), the request will be left hanging and the client will not receive a response.
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
