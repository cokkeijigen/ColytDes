# ColytDes
总之打点字上去<br>
### 提供的函数接口
01. get()
```
/* 参数为 "类名.class"、 "id名.id" + "标签名.tag" */

let test = get("test.class"); // 返回一个对象，包含all()和to(v = 0)两个方法
let elelist = test.all(); // 返回一个在test对象中通过类名获取到的元素list，即document.getElementsByClassName()
let elemet = test.to(); // 返回list中的第一个元素对象内容，该方法也可以通过传入数字引索到list中的第几个元素
```
