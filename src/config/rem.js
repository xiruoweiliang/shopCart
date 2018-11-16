(function(win) {
    var remCalc = {};
    var docEl = win.document.documentElement,
        tid;

    function refreshRem() {
        // 获取当前窗口的宽度
        var width = docEl.getBoundingClientRect().width;
        // 大于750px 按750算
        if (width > 750) { width = 750 }
        // 把窗口的宽度固定分为10份 也就是10rem
        // 按视觉稿750算  750/10=75px  那么1rem = 75px
        // 750视觉中 80px*80px的按钮 转换为rem  80/75 = 1.066667rem
        // 按钮的宽高固定为  1.06667rem * 1.06667rem
        // 当窗口宽度缩放为 320px的时候
        // 那么 1rem = 42.66px
        // 原来 80px*80px的按钮现在变为 1.25rem * 32px = 40px
        // 按钮变为 40px * 40px
        // 其他宽度也类似
        //
        // cms做法也类似
        // 只是我们把窗口宽度固定分为 6.4份，即6.4rem
        // 所以 1rem = 100px
        // 640视觉中 80px*80px的按钮 转换为rem  80/100 = 0.8rem
        // ....其他也差不多
        //
        //
        // 对比
        // 其实也就是计算rem的问题 视觉稿量出来的值  除64 或 100的问题
        // 除100 总比 除64 好口算
        // 就算用sass写个 @function px2rem代替口算
        // .8rem 总比输入 px2rem(80)少几个字符
        //
        //
        // var rem = width / 10;
        // cms 只要把这行改成
        var rem = width /750 * 100
        docEl.style.fontSize = rem + "px";
        remCalc.rem = rem;
        //误差、兼容性处理
        var actualSize = parseFloat(window.getComputedStyle(document.documentElement)["font-size"]);
        if (actualSize !== rem && actualSize > 0 && Math.abs(actualSize - rem) > 1) {
            var remScaled = rem * rem / actualSize;
                docEl.style.fontSize = remScaled + "px"
            }
        }

        //函数节流，避免频繁更新
        function dbcRefresh() {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 100)
        }

        //窗口更新动态改变font-size
        win.addEventListener("resize", function() { dbcRefresh() }, false);


        //页面显示的时候再计算一次   难道切换窗口之后再切换来窗口大小会变?....
        win.addEventListener("pageshow", function(e) {
            if (e.persisted) { dbcRefresh() }
        }, false);
        refreshRem();
        remCalc.refreshRem = refreshRem;
        remCalc.rem2px = function(d) {
            var val = parseFloat(d) * this.rem;
            if (typeof d === "string" && d.match(/rem$/)) { val += "px" }
            return val
        };
        remCalc.px2rem = function(d) {
            var val = parseFloat(d) / this.rem;
            if (typeof d === "string" && d.match(/px$/)) { val += "rem" }
            return val
        };
        win.remCalc = remCalc
    })(window);
