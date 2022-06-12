function get(val) {
    let Elements = null;
    let to = function(v = 0) {
        if ((v < 0 && 0 > Elements.length - v) || v >= Elements.length) return null;
        return Elements[v >= 0 ? v : Elements.length - v];
    }
    let all = function() { return Elements };
    if (val.substring(val.length - 3) == ".id")
        return document.getElementById(val.substring(0, val.length - 3));
    if (val.substring(val.length - 6) == ".class")
        return new function() {
            Elements = document.getElementsByClassName(val.substring(0, val.length - 6));
            this.to = to;
            this.all = all;
        }
    if (val.substring(val.length - 4) == ".tag")
        return new function() {
            Elements = document.getElementsByTagName(val.substring(0, val.length - 4));
            this.to = to;
            this.all = all;
        }
    if (val.substring(val.length - 5) == ".name")
        return new function() {
            Elements = document.getElementsByName(val.substring(0, val.length - 5));
            this.to = to;
            this.all = all;
        }
    return new function() {
        this.tag = get(val + ".tag");
        this.class = get(val + ".class");
        this.id = get(val + ".id");
        this.name = get(val + ".name");
    };
}

function logd(...str) {
    eval("console.log('" + str.toString().replace(",", " ") + "')");
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
                text += s + ":" + css[s] + ";";
            }
            return text;
        }()));
    const style = document.createElement("style");
    style.type = "text/css";
    style.innerText = cssText;
    get("html").tag.to().appendChild(style);
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
                eval(v + "try {(%s)} catch (err) {}".replace("%s", expression[v]));
            }
        }
    }(funs);
}

function loadMethod(idName, Callback) {
    if (getIdName() != idName) return;
    Callback();
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
    const script = document.createElement("script");
    script.src = "/static/init-runner.js";
    get("html").tag.to().appendChild(script);
})();

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
