const cv = require('./cv');
const pug = require('pug');
const fs = require('fs-extra');
const path = require('path');
const feather = require('feather-icons');
const dateFns = require('date-fns');

const buildPath = path.join(__dirname, '../build');
const assetsPath = path.join(__dirname, 'assets');
const cvTemplatePath = path.join(__dirname, 'index.pug');

async function renderFile(templatePath, locale, outputPath) {
    data = {
        cv: cv[locale],
        icon(iconName, ...args) {
            return feather.icons[iconName].toSvg(...args);
        },
        formatDate(...args) {
            const dateFnsLocale = require(`date-fns/locale/${locale}`);
            return dateFns.format(...args, {
                locale: dateFnsLocale,
            });
        }
    };
    const output = pug.renderFile(templatePath, data);
    outputPath = path.join(buildPath, outputPath);
    await fs.outputFile(outputPath, output);
    console.log(`Built ${outputPath}...`);
}

fs.copy(assetsPath, buildPath, {errorOnExist: false});
renderFile(cvTemplatePath, 'en', 'index.html');
renderFile(cvTemplatePath, 'sv', 'sv/index.html');