
const fs = require('fs');
const fileToSplit = './VM - Recibos de Sueldos 2021-10.pdf';

fs.readFile(fileToSplit, 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})
