import Header from "../../libs/components/header/script.js";

const sections = {
    header: document.querySelector('section#header'),
}

const header = new Header(sections.header)
header.init();