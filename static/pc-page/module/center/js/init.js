(function() {
    loadStyleFile("/static/pc-page/style/main.css");
    loadStyleFile("./css/content.css");
    loadStyleFile("/static/pc-page/module/public/init.css");
})();

(function() {
    get("items_end.class").to().onclick = function() {
        const ItemsBox = get("ItemsBox.id");
        ItemsBox.style.display = "none";
        setTimeout(function() {
            window.scrollTo(0, 0)
            ItemsBox.style.display = "";
        }, 200);
    };
})();