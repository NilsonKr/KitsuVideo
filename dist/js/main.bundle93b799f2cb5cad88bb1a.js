(()=>{var t={506:t=>{t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},926:t=>{function n(t,n,e,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?n(u):Promise.resolve(u).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}},575:t=>{t.exports=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},100:(t,n,e)=>{var r=e(489),o=e(67);function i(n,e,a){return o()?t.exports=i=Reflect.construct:t.exports=i=function(t,n,e){var o=[null];o.push.apply(o,n);var i=new(Function.bind.apply(t,o));return e&&r(i,e.prototype),i},i.apply(null,arguments)}t.exports=i},913:t=>{function n(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},754:t=>{function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},205:(t,n,e)=>{var r=e(489);t.exports=function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&r(t,n)}},430:t=>{t.exports=function(t){return-1!==Function.toString.call(t).indexOf("[native code]")}},67:t=>{t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},585:(t,n,e)=>{var r=e(8),o=e(506);t.exports=function(t,n){return!n||"object"!==r(n)&&"function"!=typeof n?o(t):n}},489:t=>{function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},n(e,r)}t.exports=n},8:t=>{function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},957:(t,n,e)=>{var r=e(754),o=e(489),i=e(430),a=e(100);function c(n){var e="function"==typeof Map?new Map:void 0;return t.exports=c=function(t){if(null===t||!i(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return a(t,arguments,r(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),o(n,t)},c(n)}t.exports=c},757:(t,n,e)=>{t.exports=e(666)},666:t=>{var n=function(t){"use strict";var n,e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{u({},"")}catch(t){u=function(t,n,e){return t[n]=e}}function s(t,n,e,r){var o=n&&n.prototype instanceof g?n:g,i=Object.create(o.prototype),a=new S(r||[]);return i._invoke=function(t,n,e){var r=f;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return P()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===y)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(r===f)throw r=d,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r=h;var u=l(t,n,e);if("normal"===u.type){if(r=e.done?d:p,u.arg===y)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(r=d,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function l(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",p="suspendedYield",h="executing",d="completed",y={};function g(){}function m(){}function v(){}var x={};x[i]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(T([])));w&&w!==e&&r.call(w,i)&&(x=w);var k=v.prototype=g.prototype=Object.create(x);function L(t){["next","throw","return"].forEach((function(n){u(t,n,(function(t){return this._invoke(n,t)}))}))}function E(t,n){function e(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?n.resolve(f.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):n.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,r){function i(){return new n((function(n,o){e(t,r,n,o)}))}return o=o?o.then(i,i):i()}}function j(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,j(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=l(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function _(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function O(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function T(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(r.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:P}}function P(){return{value:n,done:!0}}return m.prototype=k.constructor=v,v.constructor=m,m.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===m||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,c,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},L(E.prototype),E.prototype[a]=function(){return this},t.AsyncIterator=E,t.async=function(n,e,r,o,i){void 0===i&&(i=Promise);var a=new E(s(n,e,r,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(k),u(k,c,"Generator"),k[i]=function(){return this},k.toString=function(){return"[object Generator]"},t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=T,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),y},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),y}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:T(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),y}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return t[r](i,i.exports,e),i.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{"use strict";var t=e(575),n=e.n(t),r=e(913),o=e.n(r),i=e(205),a=e.n(i),c=e(585),u=e.n(c),s=e(754),l=e.n(s),f=e(957),p=e.n(f);function h(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=l()(t);if(n){var o=l()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return u()(this,e)}}var d=function(t){a()(r,t);var e=h(r);function r(){var t;return n()(this,r),(t=e.call(this)).attachShadow({mode:"open"}),t}return o()(r,[{key:"attributeChangedCallback",value:function(t,n,e){n!==e&&(this[t]=e)}},{key:"getTemplate",value:function(){var t=document.createElement("template");return t.innerHTML='\n            <header>\n                <div class="logo-container">\n                    <figure class="logo-header">\n                        <img src='.concat(this.src,' alt="Logo Header KitsuVideo">\n                    </figure>\n                    <h2>').concat(this.title,'</h2>\n                </div>\n                <div class="user-header">\n                    <div class="user-img-container">\n                        <img class="user-img" src=').concat(this.uimg,' alt="">\n                    </div>\n                    <p class="user-name">').concat(this.name,'</p>\n                    <span class="user-optlogo"></span>\n                    <div class="user-opt">\n                        <ul>\n                            <li>Item1</li>\n                            <li>Item1</li>\n                            <li>Item1</li>\n                        </ul>\n                    </div>\n                </div>\n            </header>\n            ').concat(this.styles(),"\n        "),t}},{key:"styles",value:function(){return" \n        <style>\n            *{\n                margin:  0;\n                padding: 0;\n                box-sizing: border-box;\n            }\n            :host{\n                --logo-font : 'Press Start 2P', cursive;\n                --main-font : 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n                --background-color: mediumslateblue;\n                display: block;\n                background-color: var(--background-color);\n            }\n            header{\n                display: flex;\n                justify-content:center;\n                align-items: center;\n                flex-wrap: wrap;\n                color: white;\n                padding: 10px 20px;\n            }\n            .logo-container{\n                display: flex;\n                align-items: center;\n            }\n            .logo-header img{ \n                max-width: 55px;\n                vertical-align: top;\n            }\n            .logo-container h2{\n                font-size: 2.4rem;\n                font-family: var(--logo-font);\n            }\n            .user-header{\n                position: relative;\n                height: 100%;\n                display: flex;  \n                justify-content: space-around;\n                align-items: center;\n            }\n            .user-img-container{\n                border-radius: 50%;\n                padding: 3px;\n                margin-right: 10px;\n                background-color: white;\n            }\n            .user-img{\n                margin-right:0 auto ;\n                vertical-align: top;\n                width: 40px;\n                height: 40px;\n                border-radius: 50%;\n            }\n            .user-name{\n                font-family: var(--main-font);\n                font-size: 1.6rem;\n                font-weight: bold;\n            }\n            .user-optlogo{\n                display: inline-block;\n                width: 15px;\n                height: 15px;\n                margin-left: 10px;\n                background: url('./assets/down-arrow.svg') center / cover no-repeat;\n            }\n            .user-opt{\n                position: absolute;\n                display: none;\n                width: 100%;\n                bottom: -240%;\n                right: 0;\n                padding: 5px;\n                text-align: right;\n                font-size: 2rem;\n                font-weight: bold;\n                border-radius: 15px;\n                background-color: var(--background-color);\n            }\n            .user-opt ul{\n                list-style: none;\n            }\n            .user-opt li {\n                margin: 5px;\n                text-decoration: underline;\n            }\n            .user-header:hover .user-opt{\n                display: block;\n\n            }\n            @media screen and (min-width: 768px){\n                header{\n                    justify-content: space-between;\n                }\n            }\n        </style>\n        "}},{key:"render",value:function(){this.shadowRoot.append(this.getTemplate().content.cloneNode(!0))}},{key:"connectedCallback",value:function(){this.render()}}],[{key:"observedAttributes",get:function(){return["src","title","uimg","name"]}}]),r}(p()(HTMLElement));function y(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=l()(t);if(n){var o=l()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return u()(this,e)}}window.customElements.get("header-component")||customElements.define("header-component",d);var g=function(t){a()(r,t);var e=y(r);function r(){var t;return n()(this,r),(t=e.call(this)).attachShadow({mode:"open"}),t}return o()(r,[{key:"attributeChangedCallback",value:function(t,n,e){n!==e&&(this[t]=e)}},{key:"getTemplate",value:function(){var t=document.createElement("template");return t.innerHTML=' \n        <div class="card-container">\n            <img src='.concat(this.img,' alt="').concat(this.title,' image">\n            <div class="card-details">\n                <img class="playBtn" src="./assets/playBtn.png" alt="Play Button">\n                <div class="card-info">\n                    <h2>').concat(this.title,'</h2>\n                    <p class="date">').concat(this.date,'</p>\n                    <em class="episodes">Episodes : ').concat(this.episodes,"</em>\n                </div>\n            </div>\n        </div>\n        ").concat(this.getStyle(),"\n        "),t}},{key:"getStyle",value:function(){return"\n            <style>\n                *{\n                    box-sizing: border-box;\n                    margin: 0;\n                    padding: 0;\n                }\n                :host{\n                    cursor:pointer;\n                    display: block;\n                }\n                .card-container{\n                    min-height: 300px;\n                    max-height: 400px;\n                    max-width: 270px;\n                    box-shadow: 0 5px 10px rgb(0 0 0 / 80%);\n                    overflow: hidden;\n                    position: relative;\n                    transform-origin: center top;\n                    transition: 0.3s;\n                    \n                }\n                .card-container img{\n                    object-fit: cover;\n                }\n                .card-details{\n                    display: flex;\n                    flex-direction: column;\n                    justify-content: space-evenly;\n                    align-items: center;\n                    color: white;\n                    position: absolute;\n                    top: 0;\n                    bottom: -300%;\n                    right: 0;\n                    left: 0;\n                    text-align: center;\n                    transition: .7s;\n                }\n                .card-container:hover{\n                    box-shadow: 0 8px 16px 3px rgb(0 0 0 / 60%);\n                    transform: translateY(-8px) scale(1.01) rotateX(15deg);\n                }\n                .card-container:hover .card-details{\n                    bottom: 0;\n                    background-color: rgba(0, 0, 0, 0.45);\n                }\n                .playBtn{\n                    width: 100px;\n                }\n                .card-info h2{\n                    font-size: 3rem;\n                }\n                .date{\n                    font-size: 1.3rem;\n                    margin: 10px 0;\n                }\n                .episodes{\n                    font-size: 2rem;\n                }\n                @media screen and (min-width: 1024px){\n                    .card-container{\n                        min-height: 250px;\n                        max-height: 300px;\n                        max-width: 230px;\n                    }\n                }\n            </style>\n        "}},{key:"render",value:function(){this.shadowRoot.append(this.getTemplate().content.cloneNode(!0))}},{key:"connectedCallback",value:function(){this.render()}}],[{key:"observedAttributes",get:function(){return["img","title","date","episodes"]}}]),r}(p()(HTMLElement));window.customElements.get("card-anime")||customElements.define("card-anime",g);var m=e(757),v=e.n(m),x=e(926),b=e.n(x);const w=function(){var t=b()(v().mark((function t(n){var e,r;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(n);case 3:return e=t.sent,t.next=6,e.json();case 6:return r=t.sent,t.abrupt("return",r);case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(n){return t.apply(this,arguments)}}();const k=function(t){var n=t.data,e=document.querySelector("#app"),r=[];n.forEach((function(t){var n=t.attributes.titles.en?t.attributes.titles.en:t.attributes.titles.en_jp,e=t.attributes.episodeCount?t.attributes.episodeCount:t.attributes.episodeLength;r.push("<card-anime img=".concat(t.attributes.posterImage.small,' title="').concat(n,'" date=').concat(t.attributes.createdAt," episodes=").concat(e,"></card-anime>"))})),e.innerHTML="".concat(r.join(""))};var L="https://kitsu.io/api/edge//trending/anime?limit=10",E=document.querySelector("#anime__title"),j=document.querySelector("#burguer"),_=document.querySelector("#Menu");document.body.addEventListener("click",(function(t){var n=t.target;t.preventDefault(),n.classList.contains("burguer-click")&&(j.classList.toggle("active-burguer"),_.classList.toggle("menuActive")),"home"===n.id&&(E.innerText="Home",w("https://kitsu.io/api/edge/anime?page[limit]=10").then((function(t){return k(t)}))),"trending"===n.id&&(E.innerText="Trending",w(L).then((function(t){return k(t)}))),"likey"===n.id&&(E.innerText="Likey",w("https://kitsu.io/api/edge//anime?page[limit]=10&sort=-average_rating").then((function(t){return k(t)})))})),w(L).then((function(t){return k(t)}))})()})();