/*
[
    {
        route: '/route-path',
        controller: FUNCTION,
        middleware: [{ 'Name of middleware': MIDDLEWARE_FUNCTION }], // Order matters
        description: STRING (About this url endpoint),
        // Optionals
        ignore: true // does not show on docs
    },
]
*/

const { v1 } = require('../../controllers');

module.exports = [
    {
        route: '/full-text/:filename',
        controller: v1.books.getOne,
        middleware: [],
        description: '',
    },
    {
        route: '/books/:filename',
        controller: v1.books.pagination,
        middleware: [],
        description: '',
    },
    {
        route: '/list-books',
        controller: v1.books.list,
        middleware: [],
        description: '',
    },
];
