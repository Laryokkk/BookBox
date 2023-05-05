import Header from "../libs/components/header/script.js";

const sections = {
    header: document.querySelector('section#header'),
    heading: document.querySelector('section#heading'),
}

const header = new Header(sections.header)
header.init();