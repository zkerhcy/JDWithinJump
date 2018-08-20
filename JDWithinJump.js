// ==UserScript==
// @name         京东页内跳转
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  京东在非商品详情页面打开超链接时在当前窗口显示,不打开新窗口，减少购物时打开的页面数量
// @author       Zkerhcy
// @include      *//*.jd.com/*
// @require      https://cdn.bootcss.com/jquery/2.2.4/jquery.min.js
// @grant        none
// ==/UserScript==

;
(function () {
  'use strict'
  $(function () {
    var url = window.location.host
    if (url.indexOf('item.jd.com') === -1) {
      // $('.nickname').removeAttr('target');
      $('a').each(function (index, element) {
        $(this).removeAttr('target')
      });
    }
  })
})()
