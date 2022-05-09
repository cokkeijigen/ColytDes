function setOnClick(element, fun) {
    element.addEventListener("click", fun);
}

function setTargetPage(element, url) {
    if (url == "") return;
    element.addEventListener("click", function() {
        window.open(url, "_blank");
    });
}

function gotoNewPage(url) {
    if (url == "") return;
    window.open(url, "_blank");
}

function setUserViewVisibility(val) {
    const user_view = get("user_view.id");
    if (val) user_view.style.visibility = "visible";
    else user_view.style.visibility = "hidden";
}

function setUserIcon(url) {
    const icon = get("user_icon.id");
    if (icon != null) icon.src = url;
}

function setUserName(str) {
    const user_neme = get("user_neme.id");
    if (user_neme != null) user_neme.innerText = str;
}

function setUserSignText(str) {
    if (str.length < 1) return;
    const sign_text = get("sign_text.class").to();
    sign_text.style.display = "initial";
    if (sign_text != null) sign_text.innerText = str;
}

function setUserSignFormatText(str, fun = null) {
    const sign_text = get("sign_text.id");
    if (sign_text != null) sign_text.innerHTML = str;
    if (fun != null) fun(sign_text);
}

function setWordNum(val = 0) {
    const word_num = get("word_num.id");
    if (word_num != null)
        word_num.innerText =
        "◥  " + (("" + val).length > 4 ? ("" + val).substring(0, 4) + "..." : val);
}

function setAlbums(val = 0) {
    const bottom_num = get("bottom_num.class").to(0);
    if (bottom_num != null) bottom_num.innerText = val > 99 ? "99+" : val + "";
}

function setLabels(val = 0) {
    const bottom_num = get("bottom_num.class").to(1);
    if (bottom_num != null) bottom_num.innerText = val > 99 ? "99+" : val + "";
}

function setHotLabelLists(data) {
    const hot_label_list = get("hot_label_list.id");
    if (hot_label_list == null) return;
    var temp = "<p onclick=\"gotoNewPage(\'%url\')\"><img src=\"./res/discount.svg\">%name</p>"
    var result = "";
    for (var i in data) {
        var content = data[i];
        var title = content["title"];
        var url = content["url"];
        result += temp.replace("%name", title.length < 10 ? title : title.substring(0, 10) + "...")
            .replace("%url", url);
    }
    hot_label_list.innerHTML = result;
}

function setHotSubjectList(data) {
    const hot_subject_list = get("hot_subject_list.id");
    if (hot_subject_list == null) return;
    let temp = "<a><p onclick=\"gotoNewPage(\'%url\')\" style=\"%css\">" +
        "<img src=\"./res/activity.svg\">%name</p></a>";
    let color = ["#c2daff7d", "#fffbc37d", "#c3ffcb7d", "#ffc3ed7d", "#c3f1ff7d", "#fff1c37d"];
    let result = "";
    let set = -1;
    for (var i in data) {
        var content = data[i];
        var title = content["title"];
        var url = content["url"];
        var val = function() {
            while (true) {
                var num = Math.round(Math.random() * (color.length - 1));
                if (set != num) return set = num;
            }
        }();
        result += temp
            .replace("%name", title.length < 15 ? title : title.substring(0, 15) + "...")
            .replace("%url", url)
            .replace("%css", "background-color:" + color[val]);
    }
    hot_subject_list.innerHTML = result;
}