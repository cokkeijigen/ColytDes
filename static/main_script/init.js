(function() {
    initMainIframSize();
    setMainIframContent("./static/pc-page/main.html");
    loadStyleFile("./static/main_style/main-init.css");
})()

const thisContent = get("main_ifram_content.id").contentWindow;
const pcpageContent = new function() {
    const BannerContent = thisContent.get("banner_iframe.id").contentWindow;
    const LeftContent = thisContent.get("left_iframe.id").contentWindow;
    const CenterContent = thisContent.get("center_iframe.id").contentWindow;
    const RightContent = thisContent.get("right_iframe.id").contentWindow;
    const FooterContent = thisContent.get("footer_iframe.id").contentWindow;
    this.getBannerContent = function() {
        return BannerContent;
    }
    this.getLeftContent = function() {
        return LeftContent;
    }
    this.getCenterContent = function() {
        return CenterContent;
    }
    this.getRightContent = function() {
        return RightContent; 
    }
    this.getFooterContent = function() {
        return FooterContent;
    }
}
