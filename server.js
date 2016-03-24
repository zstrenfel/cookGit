import express from 'express'
import path from 'path'
import logger from 'morgan'
import bodyParser from 'body-parser'


const app = express();

import routes from './app/routes'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {match, RouterContext} from "react-router"

app.set('port', process.env.PORT || 8000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


// maybe if i set routes here they will be routed to the api first

//Uses Routes to apply the correct view to url
app.get('*', (req, res) => {
  const location = req.url;
  match({routes, location}, (error, redirectLocation, renderProps) => {
    if (error) {
      console.log(error);
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      const Component = renderToString(<RouterContext {...renderProps} />);
      res.status(200).send(Component);
    } else {
      res.status(404).send('Not Found');
    }
  })
})

export default app