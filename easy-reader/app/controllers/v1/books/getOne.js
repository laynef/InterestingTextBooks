const fs = require('fs');
const path = require('path');

const libraryPath = path.join(__dirname, '..', '..', '..', '..', '..', 'lib');

module.exports = (req, res) => {
    const { file_name } = req.params;
    const srcPath = path.join(libraryPath, file_name);
    const plainText = fs.readFileSync(srcPath, { encoding: 'utf8' });
    const htmlText = plainText.replace(/\n/g, '<br>');
    res.status(200).send(htmlText);
};
