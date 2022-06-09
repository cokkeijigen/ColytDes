function get(val) {
    if (val.substring(val.length - 3) == ".id")
        return document.getElementById(val.substring(0, val.length - 3));
    if (val.substring(val.length - 6) == ".class")
        return new function() {
            let Elements = document.getElementsByClassName(val.substring(0, val.length - 6));
            this.to = function(v = 0) {
                if (v >= Elements) return null;
                return Elements[v];
            }
            this.all = function() { return Elements };
        }
    if (val.substring(val.length - 4) == ".tag")
        return new function() {
            let Elements = document.getElementsByTagName(val.substring(0, val.length - 4));
            this.to = function(v = 0) {
                if (v >= Elements) return null;
                return Elements[v];
            }
            this.all = function() { return Elements };
        }
    return null;
}

function logd(str) {
    return console.log(str);
}

function loadStyleFile(url) {
    var head = document.head;
    var link = document.createElement('link');
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", url);
    head.appendChild(link);
    return link;
}

function reload() {
    window.location.reload();
}

function setStyle(e, css, name = null) {
    function createClassName() {
        const array = "abcdefghijklmnopqrstuvwxyz".split("");
        var result = "";
        for (var i = 0; i < 8; i++)
            result += array[Math.round(Math.random() * (array.length - 1))];
        return result;
    }
    const className = name != null ? name : createClassName();
    const cssText = typeof(css) == "string" ? css : ".%name{%conetnt}"
        .replace("%name", className)
        .replace("%conetnt", (function() {
            var text = "";
            for (var s in css) {
                text += s + ":" + css[s];
            }
            return text;
        }()));
    const style = document.createElement("style");
    style.type = "text/css";
    style.innerText = cssText;
    document.getElementsByTagName("html").item(0).appendChild(style);
    e.className = e.className + " " + className;

}

function loadMethods(...funs) {
    return new function(funs) {
        this.invoke = function() {
            for (var i in funs) {
                try {
                    funs[i]();
                } catch (err) {}
            }
        }
        this.invokes = function(expression) {
            for (var v in expression) {
                try {
                    eval(v + "(%s)".replace("%s", expression[v]));
                } catch (err) {}
            }
        }
    }(funs);
}

function loadMethod(idName, fun) {
    if (getIdName() != idName) return;
    fun();
}

function setOnClick(element, fun) {
    element.addEventListener("click", fun);
}

function setTargetPage(element, url) {
    element.addEventListener("click", function() {
        gotoNewPage(url)
    });
}

function gotoNewPage(url) {
    if (url == "") return;
    window.open(url, "_blank");
}

function getIdName() {
    return thisIdName;
}

(function() {
    const keyCodeMap = {
        91: true, // command
        61: true,
        107: true, // 数字键盘 +
        109: true, // 数字键盘 -
        173: true, // 火狐 - 号
        187: true, // +
        189: true, // -
    };
    // 覆盖ctrl||command + ‘+’/‘-’
    document.onkeydown = function(event) {
        const e = event || window.event;
        const ctrlKey = e.ctrlKey || e.metaKey;
        if (ctrlKey && keyCodeMap[e.keyCode]) {
            e.preventDefault();
        } else if (e.detail) { // Firefox
            event.returnValue = false;
        }
    };
    // 覆盖鼠标滑动
    document.addEventListener('wheel', (e) => {
        if (e.ctrlKey) {
            if (e.deltaY < 0) {
                e.preventDefault();
                return false;
            }
            if (e.deltaY > 0) {
                e.preventDefault();
                return false;
            }
        }
    }, { passive: false });
})();