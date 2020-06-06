const fs = require('fs');
const path = require('path');

const combineTextFiles = (directoryName, bookName) => {
    // Paths
    const rootPath = path.join(__dirname, directoryName);
    const distPath = path.join(__dirname, bookName + '.txt');
    // File System options
    const options = { encoding: 'utf8' };
    // Initial text file
    fs.writeFileSync(distPath, '', options);
    // Combine text file
    fs.readdirSync(rootPath).forEach(filename => {
        let filePath = path.join(rootPath, filename);
        fs.writeFileSync(distPath, fs.readFileSync(distPath, options) + '\n' + fs.readFileSync(filePath, options));
    });
};

combineTextFiles('PAGE001004GUIDE', 'FortuneInFormulas')