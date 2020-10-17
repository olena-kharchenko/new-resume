const express = require('express');
const exhbs = require('express-handlebars');

const PORT = process.env.PORT || 1234;

const app = express();

app.use(express.static('public'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exhbs({
    extname: 'hbs',
  }),
);

app.get('/', (req, res) => {
  res.render('en', {
    pageTitle: 'Yelena Kharchenko',
    classCurrentEn: 'current',
  });
});

app.get('/ru', (req, res) => {
  res.render('ru', {
    pageTitle: 'Елена Харченко',
    classCurrentRu: 'current',
  });
});

app.get('/ua', (req, res) => {
  res.render('ua', {
    pageTitle: 'Олена Харченко',
    classCurrentUa: 'current',
  });
});

app.listen(PORT, () => {
  console.log(`Application server is running on port ${PORT}`);
});

//
