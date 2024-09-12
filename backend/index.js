const app = require('./app');

const port = 3000; 

app.get('/',(req,res)=>{
    res.send("Hello World Amira 123!!!");
})
app.listen(port, ()=>{
    console.log(`Server Listening on Port http://localhost:${port}`);
});