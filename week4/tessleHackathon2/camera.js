var av = require('tessel-av');
var os = require('os');
var http = require('http');
var port = 8000;
var camera = new av.Camera();



const takePicture = function() {
    http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'image/jpg' });

    camera.capture().pipe(response);

    }).listen(port, () => console.log(`http://${os.hostname()}.local:${port}`));

};

// const options = {
//     port: 8000,
//     method: 'POST',
// }

// const req = http.request(options, function(res) {
//     res.writeHead(200, {'Content-Type': 'image/jpg'});
//     camera.capture().pipe(res);
// })

module.exports = takePicture;

