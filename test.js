const https = require('https');
const path = require('path');
const fs = require('fs');

/* const fetch = require('fetch-node'); */
const apiKey = 'alegpascuale@gmail.com_92f7ee24b2b123c00e7e639fc645d9e5780d';

const fileSource = ['https://www.researchgate.net/profile/Md-Masudur-Rahman-2/publication/317401664/figure/fig2/AS:504826271408129@1497371370743/Source-Code-Example-Customerjava-Partial.png'];
const destinationFile = './public/images/result.pdf'

const queryPath = `/v1/pdf/convert/from/image?name=${path.basename(destinationFile)}&url=${fileSource.join(',')}`;

const options = {
    host: 'api.pdf.co',
    path: encodeURI(queryPath),
    headers: {
        'x-api-key': apiKey
    }
};

https.get(options, (response) => {
    response.on('data', (d) => {
        let data = JSON.parse(d);

        console.log(data);

        if(data.error == false) {
            let file = fs.createWriteStream(destinationFile);
            https.get(data.url, (response2) => {
                response2.pipe(file)
                .on('close', () => {
                    console.log(`Generated PDF saved as "${destinationFile}" file.`);
                });
            });
        }
        else {
            console.log(data.message);
        } 
    });
}).on('error', (e) => {
    console.log(e);
});

