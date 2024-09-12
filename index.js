import express from 'express';
const app = express();
const port = 8080 //designating the port to connect to 


app.get('/', async (req,res) => {
    res.send("hello!")
})

//connecting to port 
app.listen(port, () => {
    console.log(`server is listening on port: ${port}`);
});