function setMainBackground(url) {
    get("html.tag").to().style.backgroundImage = "url(" + url + ")";

}

function setBodyBackground(url) {
    const body = document.body;
    body.style.backgroundImage = "url(" + url + ")";
}

function setMainBodyStyle(style) {
    setStyle(document.body, style);
}

function getMainBody() {
    return document.body;
}


function getMainElement() {
    return get("html.tag").to();
}
