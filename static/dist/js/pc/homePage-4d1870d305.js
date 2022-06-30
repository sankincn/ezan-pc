function Homepage() {
    this.$document = $(document);
    var i = $(document).width();
    this.swiperWidth = 707, this.swiperLeft = (i - this.swiperWidth) / 2, this.swiper_stores = null, this.init(), Homepage.prototype.COORDS = initBannerCoords(), this.handleBannerArea(), $(".panorama-education-list .mobile-education").mouseenter(function() { "400px" != $(this).css("width") && ($(".panorama-education-list .mobile-education").css("width", "200px"), $(".panorama-education-list .mobile-education").find(".big-mobile-education").css("display", "none"), $(this).css("width", "400px"), $(this).find(".big-mobile-education").fadeIn("fast")) }), $(".core-product-list .core-product-item").mouseenter(function() { $(this).addClass("active").siblings().removeClass("active") }), $(".content-right-list").hover(function() {
        if (!$(this).hasClass("content-list-active")) {
            let i = $(".content-left-img" + $(this).data("key"));
            $(this).addClass("content-list-active").siblings().removeClass("content-list-active"), $(".content-left-img" + $(this).data("key")).attr("src", $(this).data("img")), i.addClass("animation-img"), i.addClass("fadeinT"), setTimeout(() => { i.removeClass("animation-img"), i.removeClass("fadeinT") }, 600)
        }
    })
}

function initBannerCoords() { for (var i = $("area"), t = [], e = 0; e < i.length; ++e) t.push(i[e].coords); return t }
$(function() {
    var i = new Homepage;
    $(window).resize(function() { i.handleBannerArea() })
}), Homepage.prototype = {
    initSwiper: function() { this.swiper_stores = new Swiper(".company-swipper", { slidesPerView: 3, spaceBetween: 50, slidesPerGroup: 3, loop: !0, pagination: ".company-swipper-page", paginationClickable: !0 }) },
    initBannerSwiper: function() {
        var i = new Swiper(".swiper-banner", { loop: !0, autoplay: 8e3, speed: 1500, pagination: ".swiper-pagination", paginationClickable: !0, nextButton: ".channelAdvantage.btnNext", prevButton: ".channelAdvantage.btnPrev" });
        this.bindSwiperOver(".swiper-banner", i)
    },
    bindSwiperOver: function(i, t) { $(i).mouseenter(function() { t.stopAutoplay() }).mouseleave(function() { t.startAutoplay() }) },
    initInfoSwiper: function() {
        var i = new Swiper(".info-swiper-container", { autoplay: 8e3, speed: 500, slidesPerView: 4, spaceBetween: 26, slidesPerGroup: 4, pagination: ".info-swipper-page", paginationClickable: !0 });
        this.bindSwiperOver(".info-swiper-container", i)
    },
    bindWindowScroll: function() {
        var i = this;
        $(window).bind("scroll", function() { i.$document.scrollTop() })
    },
    getQueryStr: function(i, t) { return -1 < i.indexOf("?") ? (t = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"), t = i.split("?")[1].match(t), null != t ? unescape(t[2]) : null) : null },
    initSensorsTrack: function() {
        var i = window.location.href,
            t = this.getQueryStr(i, "channel"),
            e = this.getQueryStr(i, "app_id");
        i = this.getQueryStr(i, "cmm1");
        const n = { page_id: "B#launch_gw#homepage", page_path: "B端#投放专用官网#首页", page_name: "首页", i_program: "投放专用官网", channel: t };
        e && (n.app_id = e), i && (n.cmm1 = i);
        try { sensors.track("channel_source", n) } catch (i) { console.log(i) }
    },
    function() {
        $(window).unbind("scroll");
        var i = new CountUp("dataShop", 0, 130),
            t = new CountUp("dataMoney", 0, 110),
            e = new CountUp("dataGoods", 0, 136),
            n = new CountUp("dataUsers", 0, 5e3);
        i.start(), t.start(), e.start(), n.start()
    },
    bindActivityBox: function() { $(".activity-wrapper .close").click(function(i) { i.stopPropagation(), $(".activity-wrapper").hide() }), $(".activity-wrapper").click(function(i) { i.stopPropagation(), $(".activity-wrapper").hide() }) },
    initDialog: function() {
        var i = $(".activity-wrapper"),
            t = $(".activity-box"),
            e = parseInt(i.data("show-type"));
        t = t.data("post-id"), -1 < [1, 2].indexOf(e) && (t = this.getPostActiveStorageName(t, e), localStorage.getItem(t) || (i.addClass("activity-show"), localStorage.setItem(t, !0))), 3 == e && i.addClass("activity-show")
    },
    getPostActiveStorageName: function(i, t) { return 1 === t ? "postActive" + i : 2 !== t ? "" : "postActive" + i + (new Date).toLocaleDateString() },
    bindTabActive: function() {
        $(".main-tab").hover(function() {
            var i = $(this).data("index");
            $(".content").addClass("hide"), $($(".content")[i]).removeClass("hide"), $(".main-tab").removeClass("active"), $(this).addClass("active")
        })
    },
    unBindNavHover: function(i) { i.hover(function() {}, function() { i.addClass("whiteNav") }) },
    bindNavHover: function(i) { i.hover(function() { i.addClass("whiteNav") }, function() { i.removeClass("whiteNav") }) },
    initNav: function() {
        var i = $("#nav"),
            t = this;
        $(window).scrollTop() < 50 && (i.removeClass("whiteNav"), t.bindNavHover(i)), window.addEventListener("scroll", function() { 50 < $(this).scrollTop() ? (i.addClass("whiteNav"), t.unBindNavHover(i)) : (i.removeClass("whiteNav"), t.bindNavHover(i)) })
    },
    initTab: function() { $(".module-box-2 .item").hover(function() { $(".module-box-2 .item").removeClass("active"), $(this).addClass("active") }) },
    handleVideo: function() {
        $(".video-btn").click(function(i) {
            var t = '<div class="video-frame" id="video-frame"><div class="mask"></div><div class="video-view-container"><div class="close-icon" style="background-image: url(https://ezan-1312726142.cos.accelerate.myqcloud.com/pc/static/wechatapppro-1252524126.file.myqcloud.com/appAKLWLitn7978/image/kj6n90f30269kqlom2j2.png)"></div><video src=' + $(".video-btn").attr("data-video") + ' autoplay="autoplay" class="video" width="880" height="495" controls="controls" id="four-video"></video></div></div>';
            i.stopPropagation(), $(document.body).append(t), document.getElementById("four-video").play()
        }), $(document).click(function(i) {
            (!$(".video-view-container").is(i.target) && 0 === $(".video-view-container").has(i.target).length || $(".video-view-container .close-icon").is(i.target)) && $("#video-frame").remove()
        })
    },
    handleBanner: function() {
        $("#qiyuClick").click(function(i) {
            var t = document.title;
            ysf.config({ success: function() { document.title = t } }), ysf.open()
        })
    },
    handleBannerArea: function() {
        for (var i = $("area"), t = ($(document).width() - 1200) / 2, e = [-1, -1, 1, 1], n = 0; n < i.length; ++n) {
            var a = this.COORDS[n].split(",");
            a[0] = (Number(a[0]) + t + e[0]).toString(), a[1] = (Number(a[1]) + e[1]).toString(), a[2] = (Number(a[2]) + t + e[2]).toString(), a[3] = (Number(a[3]) + e[3]).toString(), i[n].coords = a.join(",")
        }
    },
    bindTabsActive: function() {
        $(".scene .tabs").hover(function() {
            var i = $(this).data("index");
            $(".scene>.content").addClass("hide"), $($(".scene>.content")[i]).removeClass("hide"), $(".scene .tabs").removeClass("active"), $(this).addClass("active")
        }), $(".industry .tabs").hover(function() {
            var i = $(this).data("index");
            $(".industry>.content").addClass("hide"), $($(".industry>.content")[i]).removeClass("hide"), $(".industry .tabs").removeClass("active"), $(this).addClass("active")
        })
    },
    init: function() { this.initSwiper(), this.initBannerSwiper(), this.initInfoSwiper(), this.bindWindowScroll(), this.bindActivityBox(), this.bindTabActive(), this.initNav(), this.initTab(), this.handleVideo(), this.handleBanner(), this.bindTabsActive() }
};