const componentUtils = {};

componentUtils.htmlDOMConverter = (templateString) => {
    const parser = new DOMParser();
    const templateElement = parser.parseFromString(templateString, 'text/html');
    const template = templateElement.documentElement.querySelector("body > section#_template");

    return template;
}

componentUtils.render = (parentElement = document, rootElement) => {
    parentElement.appendChild(rootElement);
}

export { componentUtils };
