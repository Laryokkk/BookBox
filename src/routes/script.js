import Header from "../libs/components/header/script.js";
import Item from "../libs/components/item/script.js";

const sections = {
    header: document.querySelector('section#header'),
    heading: document.querySelector('section#heading'),
    itemList: document.querySelector('.item-list'),
}

const header = new Header(sections.header)
header.init();


const props = { imgPath: 'https://m.media-amazon.com/images/I/710+HcoP38L._AC_UF1000,1000_QL80_.jpg', title: 'The Hobbit', author: 'J.R.R. Tolkien', published: '2001/02/21', publisher: 'Home of books', isbn: '687356654', available: '21/06/2022' };
const itemTest = new Item(sections.itemList, props);
itemTest.init();

const itemTest1 = new Item(sections.itemList, props);
itemTest1.init();

const itemTest2 = new Item(sections.itemList, props);
itemTest2.init();

const itemTest3 = new Item(sections.itemList, props);
itemTest1.init();

const itemTest4 = new Item(sections.itemList, props);
itemTest2.init();

const itemTest5 = new Item(sections.itemList, props);
itemTest1.init();

const itemTest6 = new Item(sections.itemList, props);
itemTest2.init();

const itemTest7 = new Item(sections.itemList, props);
itemTest1.init();

const itemTest8 = new Item(sections.itemList, props);
itemTest2.init();