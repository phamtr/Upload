var formidable = require('formidable');
var path = require('path');


module.exports = function upload(req, res) {
    var form = new formidable.IncomingForm();

    form.maxFieldsSize = 10*1024*1024;


    form.parse(req);

    form.on('fileBegin', function (name, file){
        
        file.path = __dirname + '/data/' + file.name;
    });
   
    form.on('file', function (name, file){
        console.log('Uploaded ' + file.name);
    });
  
    return res.json(200, {
	result: 'Upload Success'
    });
   
};