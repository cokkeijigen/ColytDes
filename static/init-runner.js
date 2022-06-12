(function() { // 初始化left页面内容
    loadMethod("pc-page-left", function() {
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

        setUserIcon("./res/user/icon.png");
        setUserName("Hello World!");
        setUserSignText("ザ・ワールド！世界は俺が変わってみせる！ああああああああああああああああっなんてね(>ω･* )ﾉ");
        setWordNum(23333);
        setAlbums(100);
        setLabels(100);
        setUserViewVisibility(true);
    });

    loadMethod("pc-page-left", function() {
        function getUerInfo() {
            return null;
        }
        const userInfo = getUerInfo();
        if (userInfo != null) {
            setUserIcon(userInfo["icon"]);
            setUserName(userInfo["name"]);
            setUserSignText(userInfo["sign"]);
            setWordNum(userInfo["words"]);
            setAlbums(userInfo["albums"]);
            setLabels(userInfo["labels"]);
            setUserViewVisibility(true);
        }
    });
})();


(function() { // 初始化right页面内容
    loadMethod("pc-page-right", function() {
        atImgebox("/static/pc-page/res/kyaru.png");
        atImgebox("/static/pc-page/res/kyaru1.jpg");
        atImgebox("/static/pc-page/res/murasame.png");
        atImgebox("/static/pc-page/res/kyaru2.png");
    });
})();

(function() { // 初始化top页面内容
    loadMethod("pc-page-top", function() {
        setNoticeTitle("何も持って生まれぬ故に、何者にもなれる！");
        setNoticeUrl("./test.html");
    });
})();