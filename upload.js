var formidable = require('formidable');
var path = require('path');


module.exports = function upload(req, res) {
    var form = new formidable.IncomingForm();

    form.parse(req);

    form.on('fileBegin', function (name, file){
        
        file.path = __dirname + '/data/' + 'Photo-' + Date.now()+ file.name;
    });
   
    form.on('file', function (name, file){
        console.log('Uploaded ' + 'Photo-' + Date.now()+ file.name);
    });

    return res.json(200, {
	result: 'Upload Success'
    });
};