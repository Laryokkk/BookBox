// empty

const libraries = [];

libraries.push({
    name: 'Grande biblioteca',
    address: 'Via del Ronco, 7, 34133',
    items: {
        books: [
            {
                isbn: '231242312',
                title: 'The Hobbit',
                authors: ['J.R.R. Tolkien'],
                published: '2001/02/21',
                publishingHouse: 'Home of books',
            },
            {
                isbn: '231242312',
                title: 'The Hobbit',
                authors: ['J.R.R. Tolkien'],
                published: '2001/02/21',
                publishingHouse: 'Home of books',
            },
            {
                isbn: '231242312',
                title: 'The Hobbit',
                authors: ['J.R.R. Tolkien'],
                published: '2001/02/21',
                publishingHouse: 'Home of books',
            },
        ]
    }
});

const filterLibrary = {
    title: 'Biblioteche',
    checkboxList: [
        {
            name: 'library',
            title: 'san-giacomo',
            titleText: 'San Giacomo',
        },
        {
            name: 'library',
            title: 'san-giacomo',
            titleText: 'San Giacomo',
        },
        {
            name: 'library',
            title: 'san-giacomo',
            titleText: 'San Giacomo',
        },
    ]
};

const filterItems = {
    title: 'Filtri',
    checkboxList: [
        {
            name: 'item',
            title: 'books',
            titleText: 'Libri',
        },
        {
            name: 'item',
            title: 'maps',
            titleText: 'Carte',
        },
        {
            name: 'item',
            title: 'encyclopedia',
            titleText: 'Encyclopedie',
        },
    ],
};

export { filterLibrary, filterItems };