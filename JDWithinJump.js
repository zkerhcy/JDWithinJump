// ==UserScript==
// @name         京东页内跳转
// @namespace    http://tampermonkey.net/
// @version      0.6
// @description  京东在非商品详情页面打开超链接时在当前窗口显示,不打开新窗口，减少购物时打开的页面数量
// @author       Zkerhcy
// @include      *//*.jd.com/*
// @exclude      *//passport.jd.com/*
// @updateURL    https://raw.githubusercontent.com/zkerhcy/JDWithinJump/master/JDWithinJump.js
// @downloadURL  https://raw.githubusercontent.com/zkerhcy/JDWithinJump/master/JDWithinJump.js
// @grant        none
// ==/UserScript==

;(function() {
  'use strict'
  $(function() {
    var url = window.location.host
    if (url.indexOf('item.jd.com') === -1) {
      $('a').each(function(index, element) {
        $(this).removeAttr('target')
      })
    }
  })
})()
