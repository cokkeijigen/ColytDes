const thisIdName = "pc-page";

(function() {
    loadStyleFile("./style/pc-page.css");
    loadStyleFile("./style/main.css");
    setpcpageBodyBackground("./res/top_view.png");
    setpcpageBackground("./res/68467122_p0.png");
    get("banner_iframe.id").src = "./module/top/";
    get("left_iframe.id").src = "./module/left/";
    get("center_iframe.id").src = "./module/center/";
    get("right_iframe.id").src = "./module/right/";
    get("footer_iframe.id").src = "./module/bottom/";
})();