const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json(
    {
        limit : "50mb"
    }
));
app.use(express.urlencoded({
    limit:"50mb", extended: false
}));
app.use(cors(
    {
        origin:true
    }
));

const imageRouter = require('./src/routes/image');

app.use('/api/image',imageRouter);
app.use('/static', express.static('./public/images'));

app.listen(3030, ()=>{
    console.log('server is runnig on http://localhost:3030');
});

