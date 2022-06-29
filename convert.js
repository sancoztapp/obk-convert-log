var fs = require('fs');

const args = process.argv.slice(2);

args.forEach((fileName) => readFile(fileName));

function readFile(fileName) {
    fs.readFile(`./${fileName}`, 'utf-8', function (err, data) {
        if (err) throw err;
        whiteLogFile(fileName, data);
    });
}

function whiteLogFile(fileName, data) {
    const convert = String(data)
        .replace(/=\\\\\\"/g, "='")
        .replace(/\\\\\\", /g, "', ")
        .replace(/\\\\\\"\\",/g, "'\",")
        .replace(/\\\\\\"/g, '"')
        .replace(/\\n/g, '')
        .replace(/\\\"/g, '"')
        .replace(/\\/g, '')
        .replace(/"{/g, '{')
        .replace(/}"/g, '}');

    const convertPretty = JSON.stringify(JSON.parse(convert), null, 4);

    fs.writeFile(`./${fileName.replace(/.json/g, '')}-log-${Date.now()}.json`, convertPretty, { enconding: 'utf-8', flag: 'a' }, function (err) {
        if (err) throw err;
        console.log(`File ${fileName} convertido para json formatável.`);
    });
}