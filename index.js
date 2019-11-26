const app = require('express')();

app.get('/random', function(req, res, next) {
  res.send('Random stuff here');
});

app.listen(3000, function() {
  console.log('Server is listening');
});
