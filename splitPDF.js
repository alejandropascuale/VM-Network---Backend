/*jshint esversion: 6 */

var https = require("https");
var path = require("path");
var fs = require("fs");

// `request` module is required for file upload.
// Use "npm install request" command to install.
var request = require("request");

// The authentication key (API Key).
// Get your own by registering at https://app.pdf.co
const API_KEY = 'alegpascuale@gmail.com_92f7ee24b2b123c00e7e639fc645d9e5780d';


// Source PDF file to split
const SourceFile = "./BERLI JORGE - Recibos de Sueldos 2021-07.pdf";
// Split Search String
const SplitText = "SCIUTO , Mónica Beatriz";

// Prepare URL for `Split PDF By Text` API endpoint
var query = `https://api.pdf.co/v1/pdf/split2`;
let reqOptions = {
    uri: query,
    headers: { "x-api-key": API_KEY },
    formData: {
        searchString: SplitText,
        file: fs.createReadStream(SourceFile)
    }
};

// Send request
request.post(reqOptions, function (error, response, body) {
    if (error) {
        return console.error("Error: ", error);
    }

    // Parse JSON response
    let data = JSON.parse(body);
    if (data.error == false) {
        // Download generated PDF files
        var part = 1;
        data.urls.forEach((url) => {
            var localFileName = `./part${part}.pdf`;
            var file = fs.createWriteStream(localFileName);
            https.get(url, (response2) => {
                response2.pipe(file)
                    .on("close", () => {
                        console.log(`Generated PDF file saved as "${localFileName}" file.`);
                    });
            });
            part++;
        }, this);
    }
    else {
        // Service reported error
        console.log("Error: " + data.message);
    }
});

            