/**
* @Author: Roxy Chen
* @Date:   2016-08-21T17:14:56+08:00
* @Last modified by:   Roxy Chen
* @Last modified time: 2016-08-22T19:53:38+08:00
* @License: Copyright (c) by Giftpack Inc. All Rights Reserved.
*
*
* Quick start function
  slackPostMessage({token: 'xoxp-3161029018-14843986547-71392662452-3b531e2a33' , url , channelID: 'U0EQTV0G3'});
*/


var request = require('request');


module.exports = function slackPostMessage (obj) {
  if( !obj.token ) { throw new Error('Need have Slack token.') }
  var options = {
    'method': 'GET',
    'url': 'https://slack.com/api/chat.postMessage',
    'qs':{
      'token': obj.token,
      'as_user': false,
      'channel': obj.channelID,
      'text': 'Demo url: ' + obj.url + ' is on available Now !',
      'pretty': '1'
    }
  };
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) { console.log('\x1b[32m','[Success]','\x1b[0m','Demo url:','\x1b[36m', obj.url ,'\x1b[0m' ,'is push on Giftpack Slack now.'); }
  });
}
