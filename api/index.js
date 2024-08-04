const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));


app.get('/test', (req,res)=>{
    res.json('test okay successful');
});

app.listen(4000);
// , () => {
//     console.log('Server is running on port 4000');
// });