import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config.js';

const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));
app.use(webpackHotMiddleware(compiler));

app.listen(3000, () => console.log('Listening on port 3000'));
