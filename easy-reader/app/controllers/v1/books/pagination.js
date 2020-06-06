const fs = require('fs');
const path = require('path');

const libraryPath = path.join(__dirname, '..', '..', '..', '..', '..', 'lib');

module.exports = (req, res) => {
    const { page = 1, lines_per_page = 10000 } = req.query;
    const { file_name } = req.params;

    if (page <= 0) return res.status(404).json({ error: `Page not found` });
    if (lines_per_page <= 0 || lines_per_page > 20000) return res.status(400).json({ error: `Lines per page must be between 1 and 20000` });

    const srcPath = path.join(libraryPath, file_name);
    const plainText = fs.readFileSync(srcPath, { encoding: 'utf8' });
    const array = plainText.split(`\n`);

    const total_lines = array.length;
    const total_pages = Math.ceil(total_lines / lines_per_page);
    const current_page = page;
    const prev_page = current_page - 1;
    const next_page = current_page + 1;

    const url = req.url;
    const prev_page_url = `${url}?lines_per_page=${lines_per_page}&page=${prev_page}`;
    const next_page_url = `${url}?lines_per_page=${lines_per_page}&page=${next_page}`;

    const data = array.slice(prev_page * lines_per_page, page * lines_per_page).join('<br>');

    res.status(200).json({
        data,
        total_pages,
        total_lines,
        current_page,
        prev_page,
        next_page,
        prev_page_url,
        next_page_url,
    });
};