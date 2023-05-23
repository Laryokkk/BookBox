import Header from "../../libs/components/header/script.js";
import DropDown from "../../libs/components/dropdown/script.js";
import { filterLibrary as filterLibraryProps, filterItems as filterItemsProps} from "../../libs/helpers/helper.js"

const sections = {
    header: document.querySelector('section#header'),
    filterLibrarys: document.querySelector('div.button-group > div.librarys'),
    filterItems: document.querySelector('div.button-group > div.items'),
}

const header = new Header(sections.header)
header.init();

const filterLibrary = new DropDown(sections.filterLibrarys, filterLibraryProps);
filterLibrary.init();

const filterItem = new DropDown(sections.filterItems, filterItemsProps);
filterItem.init();