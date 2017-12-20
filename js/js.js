(function() {
    var slideData = {};
    // 初始化函数
    function init() {
        var slideUls = document.querySelector(".slideImg");
        var slideItem = document.querySelector(".slideItem");
        var slidePre = document.querySelector(".slidePre");
        var slideNext = document.querySelector(".slideNext");
        slideData.slideLis = slideUls.children;
        slideData.slideItem = slideItem.children;
        slideData.slideImgNum = slideData.slideLis.length;
        slideData.slideIndex = 0;
        slideData.slideNext = 0;
        slideData.time = 1200;
        slidePre.addEventListener("click", preItem);
        slideNext.addEventListener("click", nextItem);
        slideItem.addEventListener("click", changeItem);
        // if (slidePre) {
        //     slidePre.addEventListener("click", preItem);
        // }
        // if (slidePre) {
        //     slideNext.addEventListener("click", nextItem);
        // }
        // if (slideItem) {
        //     slideItem.addEventListener("click", changeItem);
        // }
        slideUls.addEventListener("mouseover", mouseM);
        slideUls.addEventListener("mouseleave", mouseL);
        playAuto();
        slideData.timer = window.setInterval(playAuto,  slideData.time);
    }
    init();
    // 自动图片播放
    function playAuto() {
        if (slideData.slideNext > slideData.slideImgNum - 1) {
            slideData.slideNext = 0;
        } else if (slideData.slideNext < 0) {
            slideData.slideNext = slideData.slideImgNum - 1;
        }
        changeImg();
    }
    // 鼠标移到图片停止
    function mouseM() {
        window.clearInterval(slideData.timer);
    }
    // 鼠标离开图片启动自动播放
    function mouseL() {
        slideData.timer = window.setInterval(playAuto,  slideData.time);
    }
    //更换显示的图片
    function changeImg() {
        var slideNextEl = slideData.slideLis[slideData.slideNext];
        var slideIndexEl = slideData.slideLis[slideData.slideIndex];
        slideIndexEl.className = "hide";
        slideNextEl.className = "show";
        slideData.slideItem[slideData.slideIndex].className = "";
        slideData.slideItem[slideData.slideNext].className = "slideActiveItem";

        slideData.slideIndex = slideData.slideNext;
        slideData.slideNext = slideData.slideNext + 1;
    }
    //切换按钮监听函数
    function changeItem(event) {
        if (event.target.nodeName == "LI") {
            var el = event.target;
            window.clearInterval(slideData.timer);
            slideData.slideNext = el.innerHTML - 1;
            playAuto();
            slideData.timer = window.setInterval(playAuto,  slideData.time);
        }
    }
    //pre
    function preItem() {
        window.clearInterval(slideData.timer);
        slideData.slideNext = slideData.slideIndex - 1;
        playAuto();
        slideData.timer = window.setInterval(playAuto,  slideData.time);
    }
    //next
    function nextItem() {
        window.clearInterval(slideData.timer);
        slideData.slideNext = slideData.slideIndex + 1;
        playAuto();
        slideData.timer = window.setInterval(playAuto,  slideData.time);
    }


})()