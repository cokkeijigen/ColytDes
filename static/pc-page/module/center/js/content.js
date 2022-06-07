const ItemsBox = get("ItemsBox.id");
let SplitLinePosition = 0;
let itemsCount = 0;

function createItem(data, token = null) {
    const item = document.createElement("div");
    item.className = "items";
    if (token != null) item.id = "iems_token_" + token;
    item.innerHTML = getItemDocument()
        .replace("%imgurl", "" + data["imgurl"])
        .replace("%title", "" + data["title"])
        .replace("%content", "" + data["content"])
        .replace("%date", "" + data["date"])
        .replace("%browse", "" + data["browse"])
        .replace("%message", "" + data["message"])
        .replace("%folder", "" + data["folder"]);
    ItemsBox.appendChild(item);
    itemsCount++;
    if (SplitLinePosition == 0) {
        ItemsBox.appendChild(getItemSplitLine("right"));
        SplitLinePosition = 1;
        return;
    }
    if (SplitLinePosition == 1) {
        ItemsBox.appendChild(getItemSplitLine("left"));
        SplitLinePosition = 0;
    }
}

function getItemsCount() {
    return itemsCount;
}

function clearItems() {
    ItemsBox.innerHTML = ""
}

// 分割线
function getItemSplitLine(position) {
    const item_split = document.createElement("div");
    item_split.className = "item_split_line";
    item_split.innerHTML = "<div class=\"split_line_%p\"></div>".replace("%p", position);
    return item_split;
}
// item内容
function getItemDocument() {
    return "<div class=\"main-image_01\"><div style=\"background-image: url(%imgurl)\"></div></div>" +
        "<div class=\"context_01\"><div class=\"text_01\">" +
        "<h2 class=\"text_title_01\">%title</h2>" +
        "<div class=\"text_content_01\"><p>%content</p></div>" +
        "<div class=\"li_date_01\"> <p>...in %date</p></div>" +
        "<div class=\"li_data_01\">" +
        "<p class=\"li_browse_01\"><img src=\"./res/ve.png\">%browse</p>" +
        "<p class=\"li_message_01\"><img src=\"./res/co.png\">%message</p>" +
        "<p class=\"li_folder_01\"><img src=\"./res/fo.png\">%folder</p>" +
        "<p class=\"onSwith\">open up ▼</p></div></div>";
}
