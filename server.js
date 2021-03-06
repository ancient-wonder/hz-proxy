require('newrelic');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

const clientBundles = './public/services';
const serverBundles = './templates/services';
const serviceConfig = require('./service-config.json');
const services = require('./loader.js')(clientBundles, serverBundles, serviceConfig);

const React = require('react');
const ReactDom = require('react-dom/server');
const Layout = require('./templates/layout');
const App = require('./templates/app');
const Styles = require('./templates/styles')
const Scripts = require('./templates/scripts');

// see: https://medium.com/styled-components/the-simple-guide-to-server-side-rendering-react-with-styled-components-d31c6b2b8fbf
const renderComponents = (components, props = {}) => {
  return Object.keys(components).map(item => {
    let component = React.createElement(components[item], props);
    return ReactDom.renderToString(component);
  });
}

app.get('/listings/:id', (req, res) => {
  let id = req.params.id;
  let components = renderComponents(services, {itemid: id});
  res.end(Layout(
    'Seabnb',
    Styles,
    App(...components),
    Scripts(Object.keys(services), id)
  ));
});

app.listen(port, () => console.log(`server running at: http://localhost:${port}`));
