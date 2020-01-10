(function(e){function t(t){for(var n,c,l=t[0],i=t[1],s=t[2],d=0,p=[];d<l.length;d++)c=l[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,s||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,l=1;l<o.length;l++){var i=o[l];0!==a[i]&&(n=!1)}n&&(r.splice(t--,1),e=c(c.s=o[0]))}return e}var n={},a={app:0},r=[];function c(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=e,c.c=n,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(o,n,function(t){return e[t]}.bind(null,n));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=i;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var n=o("85ec"),a=o.n(n);a.a},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("Todo")],1)},r=[],c=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container"},[o("h1",{staticClass:"title"},[e._v("Todos")]),o("div",{staticClass:"ver"},[e._v("2.0")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"input-todo",attrs:{placeholder:"What needs to be done?",autofocus:""},domProps:{value:e.value},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSubmit(t)},input:function(t){t.target.composing||(e.value=t.target.value)}}}),o("ul",{staticClass:"nav",on:{click:e.onClickNav}},[o("li",{class:"all"===e.navState?"active":"",attrs:{id:"all"}},[e._v("All")]),o("li",{class:"active"===e.navState?"active":"",attrs:{id:"active"}},[e._v("Active")]),o("li",{class:"completed"===e.navState?"active":"",attrs:{id:"completed"}},[e._v("Completed")])]),o("ul",{staticClass:"todos"},e._l(e.filterTodo,(function(t){return o("li",{key:t.id,staticClass:"todo-item"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.completed,expression:"todo.completed"}],staticClass:"custom-checkbox",attrs:{type:"checkbox",id:"ck-"+t.id},domProps:{checked:Array.isArray(t.completed)?e._i(t.completed,null)>-1:t.completed},on:{change:function(o){var n=t.completed,a=o.target,r=!!a.checked;if(Array.isArray(n)){var c=null,l=e._i(n,c);a.checked?l<0&&e.$set(t,"completed",n.concat([c])):l>-1&&e.$set(t,"completed",n.slice(0,l).concat(n.slice(l+1)))}else e.$set(t,"completed",r)}}}),o("label",{attrs:{for:"ck-"+t.id}},[e._v(e._s(t.value))]),o("i",{staticClass:"remove-todo far fa-times-circle",on:{click:function(o){return e.onRemove(t.id)}}})])})),0),o("div",{staticClass:"footer"},[o("div",{staticClass:"complete-all"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.allCheckState,expression:"allCheckState"}],staticClass:"custom-checkbox",attrs:{type:"checkbox",id:"ck-complete-all"},domProps:{checked:Array.isArray(e.allCheckState)?e._i(e.allCheckState,null)>-1:e.allCheckState},on:{click:e.onChangeAll,change:function(t){var o=e.allCheckState,n=t.target,a=!!n.checked;if(Array.isArray(o)){var r=null,c=e._i(o,r);n.checked?c<0&&(e.allCheckState=o.concat([r])):c>-1&&(e.allCheckState=o.slice(0,c).concat(o.slice(c+1)))}else e.allCheckState=a}}}),o("label",{attrs:{for:"ck-complete-all"}},[e._v("Mark all as complete")])]),o("div",{staticClass:"clear-completed"},[o("button",{staticClass:"btn",on:{click:e.onClearCompleted}},[e._v("Clear completed ("),o("span",{staticClass:"completed-todos"},[e._v(e._s(e.getCompleted))]),e._v(")")]),o("strong",{staticClass:"active-todos"},[e._v(e._s(e.getLefted))]),e._v(" items left ")])])])},l=[],i=(o("a4d3"),o("4de4"),o("4160"),o("d81d"),o("e439"),o("dbb4"),o("b64b"),o("159b"),o("ade3"));function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function u(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){Object(i["a"])(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var d=1,p={data:function(){return{todos:[],value:"",navState:"all",allCheckState:!1}},methods:{onSubmit:function(){this.value&&(this.todos.push({id:d++,value:this.value,completed:!1}),this.value="")},onRemove:function(e){this.todos=this.todos.filter((function(t){return t.id!==e}))},onClickNav:function(e){this.navState=e.target.id},onChangeAll:function(){var e=this;this.todos=this.todos.map((function(t){return u({},t,{completed:!e.allCheckState})}))},onClearCompleted:function(){this.todos=this.todos.filter((function(e){return!1===e.completed}))}},computed:{getCompleted:function(){return this.todos.filter((function(e){return!0===e.completed})).length},getLefted:function(){return this.todos.filter((function(e){return!1===e.completed})).length},filterTodo:function(){var e=this;return this.todos.filter((function(t){return"active"===e.navState?!t.completed:"completed"!==e.navState||t.completed}))}}},f=p,v=(o("a2a6"),o("2877")),m=Object(v["a"])(f,c,l,!1,null,"35a36118",null),h=m.exports,b={name:"app",components:{Todo:h}},y=b,k=(o("034f"),Object(v["a"])(y,a,r,!1,null,null,null)),C=k.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(C)}}).$mount("#app")},"85ec":function(e,t,o){},a2a6:function(e,t,o){"use strict";var n=o("ac4b"),a=o.n(n);a.a},ac4b:function(e,t,o){}});
//# sourceMappingURL=app.49ca2368.js.map