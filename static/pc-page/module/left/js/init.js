const thisIdName = "pc-page-left";

(function() { // 添加样式文件
    loadStyleFile("/static/pc-page/style/main.css");
    loadStyleFile("./css/user_view_content.css");
    loadStyleFile("./css/tools_content.css");
    loadStyleFile("./css/label_list.css");
    loadStyleFile("./css/subject_list.css");
    loadStyleFile("/static/pc-page/module/public/init.css");
})();

(function() {
    let sign_text = get("sign_text.class").to();
    if (sign_text.innerText.length < 1) sign_text = get("sign_text.id");
    const bottom_con = get("bottom_con.id");
    const bottom_con_p1 = get("bottom_con_p1.class").to();
    const bottom_con_p2 = get("bottom_con_p2.class").to();
    const bottom_num = get("bottom_num.class");

    if (sign_text == null || bottom_con_p1 == null || bottom_con_p2 == null || bottom_num == null)
        return;

    sign_text.onmouseover = function() {
        bottom_con_p1.style.opacity = 0;
        bottom_con_p2.style.opacity = 0;
        bottom_con_p1.style.color = "#00000000";
        bottom_con_p2.style.color = "#00000000";
        bottom_num.to(0).style.color = "#00000000";
        bottom_num.to(1).style.color = "#00000000";
    }
    sign_text.onmouseout = function() {
        bottom_con_p1.style.opacity = null;
        bottom_con_p2.style.opacity = null;
        bottom_con_p1.style.color = "";
        bottom_con_p2.style.color = "";
        bottom_num.to(0).style.color = "";
        bottom_num.to(1).style.color = "";
    }
})();

(function() {
    setOnClick(get("push.class").to(), function() {
        setCanPushAction(true);
    });
})();