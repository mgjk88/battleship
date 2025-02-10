(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(601),o=n.n(r),i=n(314),a=n.n(i)()(o());a.push([e.id,"* {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n}\n\n:root{\n  --player-grid-width: 30px;\n  --player-grid-height: 30px;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n}\n\ndialog[open]{\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n#content {\n  width: 100%;\n  height: 500px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n.player-cntr {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.grid {\n  height: max-content;\n  width: max-content;\n  display: grid;\n  grid: repeat(11, var(--player-grid-height)) / repeat(11, var(--player-grid-width));\n}\n\n.cell {\n  height: var(--player-grid-height);\n  width: var(--player-grid-width);\n  background-color: blue;\n}\n\n.cell.ship {\n  background-color: grey;\n}\n\n.cell.ship.hit,\n.cell.hit{\n  background-color: red;\n}\n\n.cell.miss{\n  background-color: white;\n}",""]);const s=a},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var l=e[s],c=r.base?l[0]+r.base:l[0],d=i[c]||0,u="".concat(c," ").concat(d);i[c]=d+1;var h=n(u),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==h)t[h].references++,t[h].updater(p);else{var f=o(p,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=n(i[a]);t[s].references--}for(var l=r(e,o),c=0;c<i.length;c++){var d=n(i[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=l}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var r=n(72),o=n.n(r),i=n(825),a=n.n(i),s=n(659),l=n.n(s),c=n(56),d=n.n(c),u=n(540),h=n.n(u),p=n(113),f=n.n(p),m=n(208),y={};y.styleTagTransform=f(),y.setAttributes=d(),y.insert=l().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=h(),o()(m.A,y),m.A&&m.A.locals&&m.A.locals;class v{constructor(e=1){this.length=e,this.hits=0,this.sunk=!1}hit(){this.hits<this.length&&(this.hits+=1)}isSunk(){return this.hits>=this.length}}class g{constructor(){this.ships=[],this.grid=new Array(10).fill(null).map((()=>new Array(10).fill(null))),this.hits=[],this.misses=[]}static#e(e,t){return e>=0&&e<10&&t>=0&&t<10}place(e,t,n,r){e>n&&([e,n]=[n,e]),t>r&&([t,r]=[r,t]),((e,t,n,r)=>{if(e!==n&&t!==r)throw new Error("Invalid Orientation!");for(let o of arguments)if("number"!=typeof o||!g.#e(e,t)||!g.#e(n,r))throw new Error("Invalid Coordinates!");for(let o=e;o<=n;o+=1)for(let e=t;e<=r;e+=1)if(null!==this.grid[e][o])throw new Error("Coordinates conflict with existing ship!")})(e,t,n,r);let o=e===n?"x":"y",i=n-e+r-t+1;this.ships.push(new v(i));let a=this.ships.length-1;if("x"===o)for(let n=t;n<=r;n+=1)this.grid[n][e]=a;else for(let r=e;r<=n;r+=1)this.grid[t][r]=a}receiveAttack(e,t){((e,t)=>{if("number"!=typeof e||"number"!=typeof t||!g.#e(e,t))throw new Error("Invalid Coordinates!")})(e,t),null!==this.grid[t][e]?(this.ships[this.grid[t][e]].hit(),this.hits.push([e,t])):this.misses.push([e,t])}allSunk(){for(let e of this.ships)if(!1===e.isSunk())return!1;return!0}}class b{constructor(e,t){this.id=t,this.enemy=null,this.type=e,this.board=new g,this.moves=new Set}static randShips(e,t){const n=()=>Math.floor(10*Math.random());for(let r of Object.keys(e))for(;;)try{let o=n(),i=n(),a=null,s=null;Math.floor(2*Math.random())?(a=o-e[r]+1,s=i):(a=o,s=i-e[r]+1),t.place(a,s,o,i);break}catch{continue}}computerAttack(e){if("player"===this.type)throw new Error("Player cannot use computer to pick attack!");const t=()=>Math.floor(10*Math.random());if(!(t=>{if(0===t.length)return!1;let n=[[-1,0],[0,1],[1,0],[0,-1]];for(let r of t){let[t,o]=[r[1],r[0]];for(let r of n){let[n,i]=[r[0],r[1]],a=[o+i,t+n];if(a[0]>=0&&a[0]<10&&a[1]>=0&&a[1]<10&&!this.moves.has(`${a[0]}${a[1]}`))return e.board.receiveAttack(a[0],a[1]),this.moves.add(`${a[0]}${a[1]}`),!0}}return!1})(e.board.hits))for(;;){let[n,r]=[t(),t()];if(!this.moves.has(`${n}${r}`)){e.board.receiveAttack(n,r);break}}}}const w=(e,t)=>{let n=document.querySelector(`#${e.id}`),r=document.querySelector(`#${e.id}-name`),o=e.board.grid,i=document.querySelector(`#${e.id}-grid`);const a=t=>{let n=t.target,[r,o]=[parseInt(n.dataset.col),parseInt(n.dataset.row)];e.enemy.moves.has(`${r}${o}`)||(e.board.receiveAttack(r,o),e.enemy.moves.add(`${r}${o}`),s(e),e.board.allSunk()&&E(e.enemy),e.computerAttack(e.enemy),s(e.enemy),e.enemy.board.allSunk()&&E(e))},s=e=>{let t=e.board.hits,n=e.board.misses;for(let n of t){let[t,r]=n,o=document.querySelector(`#${e.id} button[data-row='${r}'][data-col='${t}']`);if(null===o)throw new Error("wrong selector");o.classList.add("hit")}for(let t of n){let[n,r]=t,o=document.querySelector(`#${e.id} button[data-row='${r}'][data-col='${n}']`);if(null===o)throw new Error("wrong selector");o.classList.add("miss")}};if(null===r){let t=document.createElement("h2");t.textContent=e.type,n.appendChild(t)}null===i&&(i=((e,t)=>{let n=document.createElement("div");t||n.addEventListener("click",a);let r=["A","B","C","D","E","F","G","H","I","J"];for(let e=0;e<11;e+=1){let t=document.createElement("p");0!==e&&(t.textContent=r[e-1]),n.appendChild(t)}for(let r=0;r<10;r+=1){let o=document.createElement("p");o.textContent=r+1,n.appendChild(o);for(let o=0;o<10;o+=1){let i=e[r][o],a=document.createElement("button");a.dataset.row=r,a.dataset.col=o,a.classList.add("cell"),null!==i&&t&&a.classList.add("ship"),n.appendChild(a)}}return n.classList.add("grid"),n})(o,t),i.id=`#${e.id}-grid`,n.appendChild(i))},x=()=>{let e=document.querySelector("dialog"),t=document.createElement("button");t.textContent="start",e.innerHTML="";let n=document.createElement("h1");n.textContent="BATTLESHIP!",e.append(n,t),t.addEventListener("click",(()=>{let t=document.querySelectorAll(".player-cntr");for(let e of t)e.innerHTML="";let n={carrier:5,battleship:4,cruiser:3,submarine:3,destroyer:2},r=new b("human","player-one"),o=new b("computer","player-two");r.enemy=o,o.enemy=r,b.randShips(n,r.board),b.randShips(n,o.board),w(r,!0),w(o,!1),e.close()})),e.show()},E=e=>{let t=document.querySelector("dialog"),n=document.createElement("button");t.innerHTML="",n.textContent="play again?";let r=document.createElement("h1");r.textContent=null!==e?`${e.type} wins!`:"play again soon!",t.append(r,n),n.addEventListener("click",(()=>{x()})),t.show()};x()})();