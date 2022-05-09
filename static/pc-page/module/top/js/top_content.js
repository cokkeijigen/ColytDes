function setNoticeTitle(str) {
    get("notice_title.id").innerText = "公告：" +
        (str.length > 25 ? str.substring(0, 25) + "..." : str);
}

function setNoticeUrl(url) {
    get("notice_url.id").href = url;
}