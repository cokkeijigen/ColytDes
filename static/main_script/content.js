function get(val) {
    if (val.substring(val.length - 3) == ".id")
        return document.getElementById(val.substring(0, val.length - 3));
    if (val.substring(val.length - 6) == ".class")
        return new function() {
            let Elements = document.getElementsByClassName(val.substring(0, val.length - 6));
            this.to = function(v = 0) {
                if (v >= this.Elements) return null;
                return Elements[v];
            }
            this.all = function() { return this.Elements };
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

function setStyle(e, css) {
    for (var v in css) {
        var set = function(str) {
            var l = str.split('-');
            if (l.length != 2) return str;
            return (l[0] + l[1].substring(0, 1).toUpperCase() + l[1].substring(1))
                .replace(/^\s*|\s*$/g, "");
        }(v);
        var val = css[v];
        try {
            eval(e + ".style.%s=\"%v\"".replace("%s", set).replace("%v", val));
        } catch (err) {}
    }
}

function loadMethods(...funs) {
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
});