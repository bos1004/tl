const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers',(req, res) => {
    res.send([
        
            {
              'id' : 1,
              'image' : 'https://placeimg.com/64/64/any',
              'name' : '홍길동',
              'birthday' : '760225',
              'gender' : '남자',
              'job' : '직장인',
            },
            {
              'id' : 2,
              'image' : 'https://placeimg.com/64/64/2',
              'name' : '이재명',
              'birthday' : '630331',
              'gender' : '남자',
              'job' : '국회의원',
            },
            {
              'id' : 3,
              'image' : 'https://placeimg.com/64/64/3',
              'name' : '윤석열',
              'birthday' : '660205',
              'gender' : '남자',
              'job' : '대통령',
            }          
    ]);
});


app.listen(port,() => console.log(`Listening on port ${port}`));