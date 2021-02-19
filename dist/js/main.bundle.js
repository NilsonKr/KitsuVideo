!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";t.r(e);t(1)},function(n,e){class t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["src","title","uimg","name"]}attributeChangedCallback(n,e,t){e!==t&&(this[n]=t)}getTemplate(){const n=document.createElement("template");return n.innerHTML=`\n            <header>\n                <div class="logo-container">\n                    <figure class="logo-header">\n                        <img src=${this.src} alt="Logo Header KitsuVideo">\n                    </figure>\n                    <h2>${this.title}</h2>\n                </div>\n                <div class="user-header">\n                    <div class="user-img-container">\n                        <img class="user-img" src=${this.uimg} alt="">\n                    </div>\n                    <p class="user-name">${this.name}</p>\n                    <span class="user-optlogo"></span>\n                    <ul class="user-opt">\n                        <li>Item1</li>\n                        <li>Item1</li>\n                        <li>Item1</li>\n                    </ul>\n                </div>\n            </header>\n            ${this.styles()}\n        `,n}styles(){return" \n        <style>\n            *{\n                margin:  0;\n                padding: 0;\n                box-sizing: border-box;\n            }\n            :host{\n                --logo-font : 'Press Start 2P', cursive;\n                --main-font : 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n                --background-color: mediumslateblue;\n                display: block;\n                background-color: var(--background-color);\n            }\n            header{\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                color: white;\n                padding: 10px 20px;\n            }\n            .logo-container{\n                display: flex;\n                align-items: center;\n            }\n            .logo-header img{ \n                max-width: 55px;\n                vertical-align: top;\n            }\n            .logo-container h2{\n                font-size: 2.5rem;\n                font-family: var(--logo-font);\n            }\n            .user-header{\n                display: flex;  \n                justify-content: space-around;\n                align-items: center;\n            }\n            .user-img-container{\n                border-radius: 50%;\n                padding: 3px;\n                margin-right: 10px;\n                background-color: white;\n            }\n            .user-img{\n                margin-right:0 auto ;\n                vertical-align: top;\n                width: 40px;\n                height: 40px;\n                border-radius: 50%;\n            }\n            .user-name{\n                font-family: var(--main-font);\n                font-size: 1.6rem;\n                font-weight: bold;\n            }\n            .user-optlogo{\n                display: inline-block;\n                width: 15px;\n                height: 15px;\n                margin-left: 10px;\n                background: url('./assets/down-arrow.svg') center / cover no-repeat;\n            }\n            .user-opt{\n                display: none;\n            }\n        </style>\n        "}render(){this.shadowRoot.append(this.getTemplate().content.cloneNode(!0))}connectedCallback(){this.render()}}customElements.define("header-component",t)}]);