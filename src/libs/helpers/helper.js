import { fetchUtils } from "../utils/fetchUtils.js";

let items;
await fetchUtils.postData('/src/api/api.php')
    .then(fetchResponse => {
        const responseStatus = fetchResponse.status;

        if (responseStatus >= 200 && responseStatus < 300) {
            items = JSON.parse(fetchResponse.data);
        } else {
            console.error(fetchResponse);
        }
    });

const filterLibrary = {
    title: 'Biblioteche',
    checkboxList: [
        {
            name: 'library',
            title: 'Biblioteka imeni Lenina',
            titleText: 'Biblioteka imeni Lenina',
        },
        {
            name: 'library',
            title: 'Viva la letteratura',
            titleText: 'Viva la letteratura',
        },
        {
            name: 'library',
            title: 'National Library',
            titleText: 'National Library',
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

export { filterLibrary, filterItems, items };