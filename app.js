const express = require('express');
const bodyParser = require('body-parser');
const Twitter = require('twitter');
const config = require('./config/config.js');
const twitter = new Twitter(config);
const app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.post('/api1', (req, res) => {
  let params = {
    q: '#' + req.body.query,
    count: 10,
    result_type: 'recent',
    lang: 'en'
  }
  twitter.get('search/tweets', params, (err, data, response) => {
    if(err) throw err;
    // console.log(data);
    data.statuses.forEach(function(info) {
      let id = info.id_str;
      let text = info.text;
      let metadata = info.metadata;
      console.log(text+"\n"+metadata+"\n\n")

    });
  });
});

app.listen(3000, () => console.log('Server Running.'));
