const fs = require('fs');
const path = require('path');

/*fs.mkdir(path.join(__dirname,'/TrainingDetails'),{},function(err){
    if(err)throw err;
    console.log('')
});*/


/*fs.writeFile(path.join(__dirname,'/TrainingDetails','details.txt')
,'Student name : sarayu '
,(err)=>{
    if(err)throw err;
    console.log('file written to....');
});*/

/*fs.appendFile(path.join(__dirname,'/TrainingDetails','details.txt')
,' os stream'
,(err)=>{
    if(err)throw err;
    console.log('file append to....');
});*/


fs.readFile(path.join(__dirname,'/TrainingDetails','details.txt'),'utf8',(err,data)=>{
    if(err)throw err;
    console.log(data);
});