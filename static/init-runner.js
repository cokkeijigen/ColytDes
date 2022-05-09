(function() {

    // let setMainBodyStyle = function() {
    //     setStyle("getMainBody()", {
    //         "background-image": "url(https://s1.ax1x.com/2022/05/05/OmUmnK.jpg)",
    //         "background-size": "80%",
    //     })
    // };
    // let UserSignFormatText = function() {
    //     setUserSignFormatText(
    //         "<p style='color:#ff0000;font-size:20px'>啊啊啊啊<p>",
    //         function(view) {
    //             view.onmouseover = function() {
    //                 logd("触碰到了签名");
    //             }
    //             view.onmouseout = function() {
    //                 logd("离开了");
    //             }
    //         }
    //     );
    // };
    // new loadMethods(UserSignFormatText, setMainBodyStyle).setLog(logd()).invoke();

    // new loadMethods(function() {
    //     setUserSignText("总之打点字上去");
    // }).invoke();


    // new loadMethods().invokes({
    //     "setUserSignText": "\"总之打点字上去\"",
    //     "setStyle": "\"getMainBody()\",{\'background-image\':\'url(https://s1.ax1x.com/2022/05/05/OmUmnK.jpg)\',\'background-size\':\'80%\'}"
    // });

    new loadMethods(function() {
        setNoticeTitle("PCR国服公会招人，公会名：姫玩姬神社！")
    }).invoke();
})();