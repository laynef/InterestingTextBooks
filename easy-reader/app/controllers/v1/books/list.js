const fs = require('fs');
const path = require('path');
const { startCase } = require('lodash');

const libraryPath = path.join(__dirname, '..', '..', '..', '..', '..', 'lib');

module.exports = (req, res) => {
    const data = fs.readdirSync(libraryPath).map(filename => {
        const [prefix] = filename.split('.txt');
        const title = startCase(prefix);
        const url = `/lib/${filename}`;
        
        return { title, filename, url };
    });

    const count = data.length;

    res.status(200).json({
        data,
        count,
    });
};
