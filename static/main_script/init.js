(function() {
    initMainIframSize();
    setMainIframContent("./static/pc-page/main.html");
    loadStyleFile("./static/main_style/main-init.css");
})()

const pcpageContent = new function() {
    const thisContent = get("main_ifram_content.id").contentWindow;
    this.getBannerContent = function() {
        return thisContent.get("banner_iframe.id").contentWindow;
    }
    this.getLeftContent = function() {
        return thisContent.get("left_iframe.id").contentWindow;
    }
    this.getCenterContent = function() {
        return thisContent.get("center_iframe.id").contentWindow;
    }
    this.getRightContent = function() {
        return thisContent.get("footer_iframe.id").contentWindow;
    }
}
