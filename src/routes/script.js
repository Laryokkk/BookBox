import Header from "../libs/components/header/script.js";
import Item from "../libs/components/item/script.js";
import DropDown from "../libs/components/dropdown/script.js";
import { filterLibrary as filterLibraryProps, filterItems as filterItemsProps} from "../libs/helpers/helper.js"

const sections = {
    header: document.querySelector('section#header'),
    heading: document.querySelector('section#heading'),
    filterLibrarys: document.querySelector('div.button-group > div.librarys'),
    filterItems: document.querySelector('div.button-group > div.items'),
    itemList: document.querySelector('.item-list'),
    googleMaps: document.querySelector("#google-maps>.container"),
}

const header = new Header(sections.header)
header.init();

const filterLibrary = new DropDown(sections.filterLibrarys, filterLibraryProps);
filterLibrary.init();

const filterItem = new DropDown(sections.filterItems, filterItemsProps);
filterItem.init();

const props = { imgPath: 'https://m.media-amazon.com/images/I/710+HcoP38L._AC_UF1000,1000_QL80_.jpg', title: 'The Hobbit', author: 'J.R.R. Tolkien', published: '2001/02/21', publisher: 'Home of books', isbn: '687356654', available: '21/06/2022' };
const itemTest = new Item(sections.itemList, props);
itemTest.init();

const itemTest1 = new Item(sections.itemList, props);
itemTest1.init();

const itemTest2 = new Item(sections.itemList, props);
itemTest2.init();

// let map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("google-maps"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }

// window.initMap = initMap;

const latitudine = 45.650075;
const longitudine = 13.767766;

const mapOptions = {
    center: new google.maps.LatLng(latitudine, longitudine),
    zoom: 16,
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