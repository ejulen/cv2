const puppeteer = require('puppeteer');
const http = require('http');
const handler = require('serve-handler');
const path = require('path');
const fs = require('fs-extra');

const buildPath = path.join(__dirname, '../build');

const server = http.createServer((...args) => handler(...args, {
    public: buildPath,
}));
server.listen(0, async () => {
    const browser = await puppeteer.launch({
        args: ['--disable-dev-shm-usage'],
    });

    const page = await browser.newPage();

    const baseUrl = `http://localhost:${server.address().port}`;

    const urls = [['/', 'cv.pdf'], ['/sv/', '/sv/cv.pdf']];

    for (let [url, filename] of urls) {
        await page.goto(`${baseUrl}${url}`, {waitUntil: 'networkidle0'});
        const pdf = await page.pdf({format: 'A4', printBackground: true});
        filename = path.join(buildPath, filename);
        await fs.outputFile(filename, pdf);
        console.log(`Built ${filename}...`);
    }

    await browser.close();

    server.close();
});