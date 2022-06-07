(function() { // 添加样式文件
    loadStyleFile("/static/pc-page/style/main.css");
    loadStyleFile("./css/user_view_content.css");
    loadStyleFile("./css/tools_content.css");
    loadStyleFile("./css/label_list.css");
    loadStyleFile("./css/subject_list.css");
    loadStyleFile("/static/pc-page/module/public/init.css");
})();

(function() { // 初始化页面内容
    setUserIcon("./res/user/icon.png");
    setUserName("Hello World!");
    setUserSignText("ザ・ワールド！世界は俺が変わってみせる！ああああああああああああああああっなんてね(>ω･* )ﾉ");
    setWordNum(23333);
    setAlbums(100);
    setLabels(100);
    setHotLabelLists([
        { "title": "Github", "url": "https://github.com/cokkeijigen/ColytDes" },
        { "title": "猫猫居然可以这么可爱！", "url": "" },
        { "title": "总之打点字上去", "url": "" },
        { "title": "你很勇哦", "url": "" },
        { "title": "雪ちゃん可愛い", "url": "" },
        { "title": "キャルちゃん", "url": "" },
        { "title": "ColytDes", "url": "" },
        { "title": "なな", "url": "" },
        { "title": "チェシャ猫", "url": "" },
        { "title": "猫好き", "url": "" }
    ]);
    setHotSubjectList([
        { "title": "吾が妻 雪風...", "url": "" },
        { "title": "男が変態なんて何か悪い？", "url": "" },
        { "title": "迷えば、敗れる", "url": "" },
        { "title": "参れ！隻狼！", "url": "" },
        { "title": "うまぴょい伝説", "url": "" },
        { "title": "これっですっ！", "url": "" }
    ]);


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