import Header from "../libs/components/header/script.js";
import Item from "../libs/components/item/script.js";
import DropDown from "../libs/components/dropdown/script.js";
import { filterLibrary as filterLibraryProps, filterItems as filterItemsProps, items} from "../libs/helpers/helper.js"

const sections = {
    header: document.querySelector('section#header'),
    heading: document.querySelector('section#heading'),
    filterLibrarys: document.querySelector('div.button-group > div.librarys'),
    filterItems: document.querySelector('div.button-group > div.items'),
    itemList: document.querySelector('.item-list'),
    googleMaps: document.querySelector("#google-maps>.container"),
    searchBar: document.querySelector('#search-bar'),
    notFind: document.querySelector('#not-find'),
}

let filterOptions = '';
let searchOptions = '';

const header = new Header(sections.header)
const filterLibrary = new DropDown(sections.filterLibrarys, filterLibraryProps);
// const filterItem = new DropDown(sections.filterItems, filterItemsProps);

header.init();
filterLibrary.init();
// filterItem.init();

const listItems = [];
items.forEach(item => {
    const itemComponent = new Item(sections.itemList, item);
    itemComponent.init();

    listItems.push(itemComponent);
});

sections.searchBar.addEventListener('input', (e) => {
    const { value } = e.target;
    searchOptions = value;

    refreshItems();
});

sections.filterLibrarys.addEventListener('handlerChangeDropdown', (e) => {
    updateFilter(filterLibrary);
});

// sections.filterItems.addEventListener('handlerChangeDropdown', (e) => {
//     updateFilter(filterItem)
// });

const updateFilter = (section) => {
    filterOptions = section.getCheckedBoxes();

    refreshItems();
};

const refreshItems = () => {
    if (searchOptions === '' && filterOptions === '') {
        listItems.forEach(component => {
            component.toggle(false);
        });
    };

    listItems.forEach(component => {
        component.toggle(true);
    });

    let counter = 0;
    listItems.forEach(component => {
        const values = Object.values(component.props).toString();

        if (values.toLowerCase().includes(searchOptions.toLowerCase())) {
            if (filterOptions === '' || values.toLowerCase().includes(filterOptions.toLowerCase())) {
                component.toggle(false);
                counter += 1;
            }
        }
    });

    sections.notFind.classList.toggle('hidden', counter !== 0);
};

const latitudine = 45.650075;
const longitudine = 13.767766;

const mapOptions = {
    center: new google.maps.LatLng(latitudine, longitudine),
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
};

const googleMaps = new google.maps.Map(sections.googleMaps, mapOptions);
new google.maps.Marker({
    position: new google.maps.LatLng(latitudine, longitudine),
    map: googleMaps,
});

// onMount(() => {
//     const latitudine = 45.650075;
//     const longitudine = 13.767766;
//     const mapOptions = {
//         center: new google.maps.LatLng(latitudine, longitudine),
//         zoom: 16,
//         mapTypeId: google.maps.MapTypeId.ROADMAP,
//     };
//     const map = new google.maps.Map(gMap, mapOptions);
    

    // fetchPost(`${urlBase}/select_caseifici.php`, {}).then(
    //     async (fetchResponce) => {
    //         const { status, data } = fetchResponce;

    //         if (status >= 400) return;

    //         const image =
    //             "https://www.appalo.it/quinta/images/formaggio.png";

    //         data.forEach(({ lagn, logn, code_caseificio }) => {
    //             const pLatLng = new google.maps.LatLng(lagn, logn);

    //             const marker = new google.maps.Marker({
    //                 position: pLatLng,
    //                 map: map,
    //                 icon: image,
    //                 url: `/caseificio/${code_caseificio}`,
    //             });

    //             google.maps.event.addListener(marker, "click", () => {
    //                 window.location.href = marker.url;
    //             });
    //         });
    //     }
    // );
// });