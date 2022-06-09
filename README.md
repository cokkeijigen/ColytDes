# ColytDes 
[查看demo](http://colytitse.cokkeijigen.top/)
总之打点字上去...<br>
页面初始化的代码请写在 `./static/init-runner.js`<br>
配合`loadMethods()`使用或者`try-catch`语句书写<br>
loadMethods()的使用请看下面
# 提供的可用于初始化前端页面内容展示函数接口

***
### 1. logd() /* 参数为string */
```
logd("hello world!"); // 控制台打印hello wrold，即console.log()
```
### 2. get()  /* 参数为： "id名.id" 、"类名.class"、 "标签名.tag"、"名字.name" */
```
// 参数一 .id
let test = get("test.id"); // 或者 get("test").id 返回一个document.getElementById()对象
```
```
// 参数二 .class
let test = get("test.class"); // 或者get("test").class 返回一个对象，包含all()和to(v = 0)两个方法
let elelist = test.all(); // 返回一个在test对象中通过类名获取到的元素list，即document.getElementsByClassName()
let elemet = test.to(); // 返回list中的第一个元素对象内容，该方法也可以通过传入数字引索到list中的第几个元素
```
```
// 参数三 .tag
let test = get("div.tag"); // 或者get("div").tag 返回一个对象，包含all()和to(v = 0)两个方法
let elelist = test.all(); // 返回一个在test对象中通过标签名获取到的元素list，即document.getElementsByTagName()
let elemet = test.to(); // 返回list中的第一个元素对象内容，该方法也可以通过传入数字引索到list中的第几个元素
```
```
// 参数四 .name
let test = get("test.name"); // 或者get("div").name 返回一个对象，包含all()和to(v = 0)两个方法
let elelist = test.all(); // 返回一个在test对象中通过名称获取到的元素list，即document.getElementsByName()
let elemet = test.to(); // 返回list中的第一个元素对象内容，该方法也可以通过传入数字引索到list中的第几个元素
```
### 3. loadStyleFile() /* 参数为css文件路径或者url */
```
loadStyleFile("./test.css"); // 在当前html引入.css文件
```
### 4. setStyle() /* 参数为：元素对象、css样式、class名称（可选）*/
```
setStyle(get('test.id'), {
  "background-image": "url(https://s1.ax1x.com/2022/05/05/OmUmnK.jpg)",
  "background-size": "80%"
});
```
### 5. loadMethods() /* 参数为单个或者多个function或者map */
```
// 该函数用于在init-runner.js中调用其他函数
 let methods_1 = loadMethods(function(){
    setUserSignText("总之打点字上去");
 });
 methods_1.invoke();

 let method_2 = loadMethods();
 method_2.invokes({
        "setUserSignText": "\"总之打点字上去\"",
        "setStyle": "get('test.id'),
        {\'background-image\':\'url(https://s1.ax1x.com/2022/05/05/OmUmnK.jpg)\',\'background-size\':\'80%\'}"
    })
```
### 6. loadMethod() /* 参数：idName、回调 */
```
loadMethod("pc-page-left", function(){
  setUserSignText("总之打点字上去");
});
```
### 7. setOnClick() /* 参数：元素对象、回调 */
```
// 给id为test的元素对象设置点击事件
setOnClick(get("test.id"),function(){
  logd("点击了test");
});
```
### 8. setTargetPage() /* 参数：element、url */
```
 // 给id为test的元素对象设置点击新建标签打开https://www.google.com
  setTargetPage(get("test.id"), "https://www.google.com");
```
### 9. gotoNewPage() /* 参数为url */
```
 gotoNewPage("https://www.google.com") // 新建标签打开https://www.google.com
```
### 10.reload() // 重新加载页面
***
## ./pc-page
#### ----------------------------Main----------------------------
```
1. setpcpageBackground(url) // 设置pc页面的背景图片
```
```
2. setpcpageBodyBackground(url) // 设置pc页面的body背景图片
```
```
3. setpcpageBodyStyle(style) // 设置pc页面的body样式
```
```
4. getpcpageMainBody() // 获取pc页面的body
```
```
5. getpcpageMainElement() // 获取pc页面的html
```
#### ----------------------------top----------------------------
```
1.setNoticeTitle(str) // 设置公告
2.setNoticeUrl(url) //设置公告链接
```
#### ----------------------------right----------------------------
```
atImgebox(url) // 在右边添加贴图 
```
#### ----------------------------left----------------------------
```
1.setUserViewVisibility(val) // 设置用户view的显示或者隐藏，参数：true、false
```
```
2.setUserIcon(url) // 设置用户头像图片
```
```
3.setUserName(str) // 设置用户名称
```
```
4.setUserSignText(str) // 设置用户签名，纯文本
```
```
5.setUserSignFormatText(str, fun) // 设置用户签名，支持使用标签的文本，回调（可选）
```
```
6.setWordNum(val) // 设置用户文章数量
```
```
7.setAlbums(val) // 设置相册数量
```
```
8.setLabels(val) // 设置标签数量
```
9.setHotLabelLists(data) // 设置热门标签列表，参数：[{"title":"text","url":"http://"}]
```
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
```
10.setHotSubjectList(data) // 设置热门主题列表，参数：[{"title":"text","url":"http://"}]
```
setHotSubjectList([
        { "title": "吾が妻 雪風...", "url": "" },
        { "title": "男が変態なんて何か悪い？", "url": "" },
        { "title": "迷えば、敗れる", "url": "" },
        { "title": "参れ！隻狼！", "url": "" },
        { "title": "うまぴょい伝説", "url": "" },
        { "title": "これっですっ！", "url": "" }
    ]);
```
#### ----------------------------center----------------------------
1. createItem(data, token) // 创建显示动态项目
```
/*参数：
  data : {imgurl,title,content,browse,message,folder}
  token : 可选，该参数将会设置item的id为 "item_token_" + "设置的token参数"
*/
createItem({
            "imgurl": "/static/pc-page/module/center/res/kyaru01.jpg",
            "title": "震惊！猫猫居然做出了... ",
            "content": "让我们来和小编看看这究竟是发生了什么事..."
            "browse": 44,
            "message": 234,
            "folder": "114514"
        }, "test"); // 此处item的id为item_token_test
```
```
2.getItemsCount() // 获取已创建的项目数量
```
```
3.clearItems() // 清除全部已创建的项目
```
***
## thisContent字段 || pcpageContent对象
```
 thisContent
```
```
pcpageContent.getBannerContent()
```
```
pcpageContent.getLeftContent()
```
```
pcpageContent.getCenterContent()
```
```
pcpageContent.getRightContent()
```
```
pcpageContent.getFooterContent()
```
