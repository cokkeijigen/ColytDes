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

(function() { // 初始化center页面内容
    loadMethod("pc-page-center", function() {
        for (var i = 0; i < 5; i++)
            createItem({
                "imgurl": "/static/pc-page/module/center/res/kyaru01.jpg",
                "title": "震惊！猫猫居然做出了... ",
                "content": "让我们来和小编看看这究竟是发生了什么事，大家都知道猫猫非常可爱，但这背后的原因究竟是为什么，让我们来和小编看看这究竟是发生了什么事，大家都知道猫猫非常可爱，但这背后的原因究竟是为什么让我们来和小编看看这究竟是发生了什么事，大家都知道猫猫非常可爱，但这背后的原因究竟是为什么让我们来和小编看看这究竟是发生了什么事，大家都知道猫猫非常可爱，但这背后的原因究竟是为什么让我们来和小编看看这究竟是发生了什么事，大家都知道猫猫非常可爱，但这背后的原因究竟是为什么",
                "date": "2022-11-24",
                "browse": 44,
                "message": 234,
                "folder": "114514"
            }, "item_token_" + i);
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
