var fs = require('fs');
//process.stdout.write('prompt > ');
//console.log(fs.readdir());

module.exports = {
  pwd: function(){
    process.stdout.write(process.env.PWD);
  },
  
  ls: function(){
    console.log('hello');
    fs.readdir('.', function(err, files){
      if(err) throw err;
      files.forEach(function(file){
        process.stdout.write(file.toString() + '\n');
      })
      process.stdout.write('promt > ');
    });
  }
}