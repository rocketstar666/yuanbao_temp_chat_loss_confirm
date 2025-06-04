// ==UserScript==
// @name         腾讯元宝临时对话丢失提示
// @namespace    http://tampermonkey.net/
// @match        *://yuanbao.tencent.com/chat/*
// ==/UserScript==

(function() {
    'use strict';

    // 检查URL中是否包含"chatMode=temp"，但直接从普通对话切换成临时对话时失效
    if (window.location.href.indexOf('chatMode=temp') === -1) {
        return;
    }

    window.addEventListener('beforeunload', function(e) {
        const confirmationMessage = '临时对话将丢失！';
        e.returnValue = confirmationMessage;
        return confirmationMessage;
    });

})();
