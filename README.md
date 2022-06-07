# ColytDes
总之打点字上去<br>
### 提供的函数接口
01. get()  /* 参数为 "id名.id" 、"类名.class"、 "标签名.tag" */
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
