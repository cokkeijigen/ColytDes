function setMainIframContent(url) {
    const main_iframe = get("main_ifram_content.id");
    main_iframe.src = url;
    if (main_iframe.attachEvent) {
        main_iframe.attachEvent("onload", function() {
            main_iframe.style.display = "initial";
        });
    } else {
        main_iframe.onload = function() {
            main_iframe.style.display = "initial";
        };
    }

}

function setMainIframSize(
    Height = document.documentElement.clientHeight,
    Width = document.documentElement.clientWidth) {
    const main_iframe = get("main_ifram_content.id");
    main_iframe.height = Height;
    main_iframe.width = Width;
}

function initMainIframSize() {
    window.addEventListener('load', function() {
        setMainIframSize();
        window.addEventListener('resize', function() {
            setMainIframSize();
        })
    });
}

function getMainIfram() {
    return get("main_ifram_content.id");
}