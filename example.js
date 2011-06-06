var forrst = require('./lib/forrst');

forrst.stats(function(res){
  res.on('data', function(d) {
    process.stdout.write(d);
  });
  res.on('end', function(d) {
    console.log('\n\n[request completed]');
  });
}).on('error', function(e) {
  console.error(e);
});