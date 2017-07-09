var commands = require('./commands');


process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
  var cmd = data.toString().trim();
  var date = new Date();
  
  var userCommand = data.toString().trim();
  commands[cmd]();

//  process.stdout.write('You type: ' + cmd);
//  process.stdout.write('\nprompt > ');
//  process.exit();
});