function setpcpageBackground(url) {
    get("html.tag").to().style.backgroundImage = "url(" + url + ")";

}

function setpcpageBodyBackground(url) {
    const body = document.body;
    body.style.backgroundImage = "url(" + url + ")";
}

function setpcpageMainBodyStyle(style) {
    setStyle(document.body, style);
}

function getpcpageMainBody() {
    return document.body;
}


function getpcpageMainElement() {
    return get("html.tag").to();
}