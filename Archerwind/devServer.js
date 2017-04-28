'use strict';

var
    path = require('path'),
    express = require('express'),
    ngrok = require('ngrok'),
    webpack = require('webpack'),
    config = require('./webpack.config.dev.js'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    port = 3000,
    app = express(),
    compiler = webpack(config),
    ngrokConfig = {
      proto: 'http',
      addr: port ,
    },
    webpackDevConfig = webpackDevMiddleware( compiler, {
      // noInfo: true,
      quiet: true,
      publicPath: config.output.publicPath,
      stats: {
        colors: true
     }
    });

// if unset .env
// port = 3000
// if( !~~dotenv.DEV_SERVER_PORT.length )  ;

// webpackDevConfig.waitUntilValid(function(){
//   console.log('Package is in a valid state');
// });

app.use( webpackDevConfig );

app.use(require('webpack-hot-middleware')(compiler));
app.use('/public', express.static('public'));
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

process.on('uncaughtException', function( evt ) {
  if(evt.code === 'EADDRINUSE') {
    process.stdout.write('\u001B[2J\u001B[0;0f');
    console.log('\x1b[33m', '[WARNING] Port ' + evt.port + ' is already in use!', '\x1b[0m' );
  }else{
    process.stdout.write('\u001B[2J\u001B[0;0f');
    console.log( '\x1b[32m', 'UncaughtException Message: ' , evt ,'\x1b[0m' );
  }
});


app.listen( port , function(err) {
  process.stdout.write('\u001B[2J\u001B[0;0f');
  console.log('\x1b[32m','[Success]','\x1b[0m','Dev Server: Listening  ==>','\x1b[36m',port,'\x1b[0m','Port');
  // ngrok.connect( ngrokConfig,  function ( $err , url ) {
  //   if ( !$err ) {
  //     var slackPostMessage = require('./helper/slackPusher');
  //     (dotenv.SLACK_DEMO_URL_PUSHER === 'true' && dotenv.SLACK_API_TOKEN) && slackPostMessage({token: dotenv.SLACK_API_TOKEN , url , channelID: 'U0EQTV0G3'});
  //     console.log('\x1b[32m','[Success]','\x1b[0m','Ngrok Server: Demo URL Available  ==>','\x1b[36m', url ,'\x1b[0m');}
  //   if (  $err ) {
  //     console.log( 'error_code:' , $err.error_code )
  //     console.log( $err.details.err );
  //     ngrok.kill();
  //   }
  // });
});
