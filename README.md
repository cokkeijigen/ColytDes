# ColytDes
总之打点字上去<br>
# 提供的函数接口

***
01. logd() /* 参数为string */
```
logd("hello world!"); // 控制台打印hello wrold，即console.log()
```
2. get()  /* 参数为： "id名.id" 、"类名.class"、 "标签名.tag" */
```
// 参数一 .id
let test = get("test.id"); // 返回一个document.getElementById()对象
```
```
// 参数二 .class
let test = get("test.class"); // 返回一个对象，包含all()和to(v = 0)两个方法
let elelist = test.all(); // 返回一个在test对象中通过类名获取到的元素list，即document.getElementsByClassName()
let elemet = test.to(); // 返回list中的第一个元素对象内容，该方法也可以通过传入数字引索到list中的第几个元素
```
```
// 参数二 .tag
let test = get("test.tag"); // 返回一个对象，包含all()和to(v = 0)两个方法
let elelist = test.all(); // 和.class一致
let elemet = test.to(); // 和.class一致
```
3. loadStyleFile() /* 参数为css文件路径或者url */
```
loadStyleFile("./test.css"); // 在当前html引入.css文件
```
4. setStyle() /* 参数为：元素对象、css样式、class名称（可选）*/
```
setStyle(get('test.id'), {
  "background-image": "url(https://s1.ax1x.com/2022/05/05/OmUmnK.jpg)",
  "background-size": "80%"
});
```
5. loadMethods()  /* 参数为单个或者多个function或者map */
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
### ./pc-page
***
```
1. setpcpageBackground() // 设置pc页面的背景图片
```
```
2. setpcpageBodyBackground() // 设置pc页面的body背景图片
```
```
3. setpcpageBodyStyle() // 设置pc页面的body样式
```
```
4. getpcpageMainBody() // 获取pc页面的body
```
```
5. getpcpageMainElement() // 获取pc页面的html
```
