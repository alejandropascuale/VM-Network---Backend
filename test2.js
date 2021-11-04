const fs = require('mz/fs');
const {splitPDF} = require('pdf-toolz/SplitCombine');

async function splitPDFIntoPages() {
    const pdf = await fs.readFile('./VM - Recibos de Sueldos 2021-10.pdf');
    const pages = await splitPDF(pdf);
    // Export the page images
    await fs.writeFile("page-1.pdf", pages[0]);
    await fs.writeFile("page-2.pdf", pages[1]);
    await fs.writeFile("page-3.pdf", pages[2]);
}

splitPDFIntoPages()