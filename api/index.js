const express = require('express');
const app = express();

// app.get('/', (req,res)=>{
//     res.json('Hello');
// });

app.get('/test', (req,res)=>{
    req.json('test ok');
});
app.listen(4000, () => {
    console.log('Server is running on port 4000');
});