(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7aa4492c"],{"4a0c":function(e,t,n){"use strict";var i=n("b775");t["a"]={select:function(e){return Object(i["a"])("/api/student/exam/paper/select/"+e)},pageList:function(e){return Object(i["a"])("/api/student/exam/paper/pageList",e)}}},"6cce":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-row",{staticClass:"do-exam-title"},[n("el-col",{attrs:{span:24}},[e._l(e.answer.answerItems,(function(t){return n("span",{key:t.itemOrder},[n("el-tag",{staticClass:"do-exam-title-tag",attrs:{type:e.questionCompleted(t.completed)},on:{click:function(n){return e.goAnchor("#question-"+t.itemOrder)}}},[e._v(e._s(t.itemOrder))])],1)})),n("span",{staticClass:"do-exam-time"},[n("label",[e._v("剩余时间：")]),n("label",[e._v(e._s(e.formatSeconds(e.remainTime)))])])],2)],1),n("el-row",{staticClass:"do-exam-title-hidden"},[n("el-col",{attrs:{span:24}},[e._l(e.answer.answerItems,(function(t){return n("span",{key:t.itemOrder},[n("el-tag",{staticClass:"do-exam-title-tag"},[e._v(e._s(t.itemOrder))])],1)})),n("span",{staticClass:"do-exam-time"},[n("label",[e._v("剩余时间：")])])],2)],1),n("el-container",{staticClass:"app-item-contain"},[n("el-header",{staticClass:"align-center"},[n("h1",[e._v(e._s(e.form.name))]),n("div",[n("span",{staticClass:"question-title-padding"},[e._v("试卷总分："+e._s(e.form.score))]),n("span",{staticClass:"question-title-padding"},[e._v("考试时间："+e._s(e.form.suggestTime)+"分钟")])])]),n("el-main",[n("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.formLoading,expression:"formLoading"}],ref:"form",attrs:{model:e.form,"label-width":"100px"}},[e._l(e.form.titleItems,(function(t,i){return n("el-row",{key:i},[n("h3",[e._v(e._s(t.name))]),0!==t.questionItems.length?n("el-card",{staticClass:"exampaper-item-box"},e._l(t.questionItems,(function(t){return n("el-form-item",{key:t.itemOrder,staticClass:"exam-question-item",attrs:{label:t.itemOrder+".","label-width":"50px",id:"question-"+t.itemOrder}},[n("QuestionEdit",{attrs:{qType:t.questionType,question:t,answer:e.answer.answerItems[t.itemOrder-1]}})],1)})),1):e._e()],1)})),n("el-row",{staticClass:"do-align-center"},[n("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("提交")]),n("el-button",[e._v("取消")])],1)],2)],1)],1)],1)},r=[],a=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),s=n("2f62"),o=n("ed08"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"line-height":"1.8"}},[1==e.qType?n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.qLoading,expression:"qLoading"}]},[n("div",{staticClass:"q-title",domProps:{innerHTML:e._s(e.question.title)}}),n("div",{staticClass:"q-content"},[n("el-radio-group",{on:{change:function(t){e.answer.completed=!0}},model:{value:e.answer.content,callback:function(t){e.$set(e.answer,"content",t)},expression:"answer.content"}},e._l(e.question.items,(function(t){return n("el-radio",{key:t.prefix,attrs:{label:t.prefix}},[n("span",{staticClass:"question-prefix"},[e._v(e._s(t.prefix)+".")]),n("span",{staticClass:"q-item-span-content",domProps:{innerHTML:e._s(t.content)}})])})),1)],1)]):2==e.qType?n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.qLoading,expression:"qLoading"}]},[n("div",{staticClass:"q-title",domProps:{innerHTML:e._s(e.question.title)}}),n("div",{staticClass:"q-content"},[n("el-checkbox-group",{on:{change:function(t){e.answer.completed=!0}},model:{value:e.answer.contentArray,callback:function(t){e.$set(e.answer,"contentArray",t)},expression:"answer.contentArray"}},e._l(e.question.items,(function(t){return n("el-checkbox",{key:t.prefix,attrs:{label:t.prefix}},[n("span",{staticClass:"question-prefix"},[e._v(e._s(t.prefix)+".")]),n("span",{staticClass:"q-item-span-content",domProps:{innerHTML:e._s(t.content)}})])})),1)],1)]):3==e.qType?n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.qLoading,expression:"qLoading"}]},[n("div",{staticClass:"q-title",staticStyle:{display:"inline","margin-right":"10px"},domProps:{innerHTML:e._s(e.question.title)}}),n("span",{staticStyle:{"padding-right":"10px"}},[e._v("(")]),n("el-radio-group",{on:{change:function(t){e.answer.completed=!0}},model:{value:e.answer.content,callback:function(t){e.$set(e.answer,"content",t)},expression:"answer.content"}},e._l(e.question.items,(function(t){return n("el-radio",{key:t.prefix,attrs:{label:t.prefix}},[n("span",{staticClass:"q-item-span-content",domProps:{innerHTML:e._s(t.content)}})])})),1),n("span",{staticStyle:{"padding-left":"10px"}},[e._v(")")])],1):4==e.qType?n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.qLoading,expression:"qLoading"}]},[n("div",{staticClass:"q-title",domProps:{innerHTML:e._s(e.question.title)}}),n("div",e._l(e.question.items,(function(t){return n("el-form-item",{key:t.prefix,staticStyle:{"margin-top":"10px","margin-bottom":"10px"},attrs:{label:t.prefix,"label-width":"50px"}},[n("el-input",{on:{change:function(t){e.answer.completed=!0}},model:{value:e.answer.contentArray[t.prefix-1],callback:function(n){e.$set(e.answer.contentArray,t.prefix-1,n)},expression:"answer.contentArray[item.prefix-1]"}})],1)})),1)]):5==e.qType?n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.qLoading,expression:"qLoading"}]},[n("div",{staticClass:"q-title",domProps:{innerHTML:e._s(e.question.title)}}),n("div",[n("el-input",{attrs:{type:"textarea",rows:"5"},on:{change:function(t){e.answer.completed=!0}},model:{value:e.answer.content,callback:function(t){e.$set(e.answer,"content",t)},expression:"answer.content"}})],1)]):n("div")])},l=[],d=(n("a9e3"),{name:"QuestionShow",props:{question:{type:Object,default:function(){return{}}},answer:{type:Object,default:function(){return{id:null,content:"",contentArray:[]}}},qLoading:{type:Boolean,default:!1},qType:{type:Number,default:0}},methods:{}}),m=d,u=n("2877"),p=Object(u["a"])(m,c,l,!1,null,null,null),f=p.exports,v=n("4a0c"),g=n("ed24");function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){Object(a["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var q={components:{QuestionEdit:f},data:function(){return{form:{},formLoading:!1,answer:{questionId:null,doTime:0,answerItems:[]},timer:null,remainTime:0}},created:function(){var e=this.$route.query.id,t=this;e&&0!==parseInt(e)&&(t.formLoading=!0,v["a"].select(e).then((function(e){t.form=e.response,t.remainTime=60*e.response.suggestTime,t.initAnswer(),t.timeReduce(),t.formLoading=!1})))},mounted:function(){},beforeDestroy:function(){window.clearInterval(this.timer)},methods:{formatSeconds:function(e){return Object(o["a"])(e)},timeReduce:function(){var e=this;this.timer=setInterval((function(){e.remainTime<=0?e.submitForm():(++e.answer.doTime,--e.remainTime)}),1e3)},questionCompleted:function(e){return this.enumFormat(this.doCompletedTag,e)},goAnchor:function(e){this.$el.querySelector(e).scrollIntoView({behavior:"instant",block:"center",inline:"nearest"})},initAnswer:function(){this.answer.id=this.form.id;var e=this.form.titleItems;for(var t in e){var n=e[t].questionItems;for(var i in n){var r=n[i];this.answer.answerItems.push({questionId:r.id,content:null,contentArray:[],completed:!1,itemOrder:r.itemOrder})}}},submitForm:function(){var e=this;window.clearInterval(e.timer),e.formLoading=!0,g["a"].answerSubmit(this.answer).then((function(t){1===t.code?e.$alert("试卷得分："+t.response+"分","考试结果",{confirmButtonText:"返回考试记录",callback:function(t){e.$router.push("/record/index")}}):e.$message.error(t.message),e.formLoading=!1})).catch((function(t){e.formLoading=!1}))}},computed:b({},Object(s["c"])("enumItem",["enumFormat"]),{},Object(s["e"])("enumItem",{doCompletedTag:function(e){return e.exam.question.answer.doCompletedTag}}))},x=q,h=(n("ec24"),Object(u["a"])(x,i,r,!1,null,"f823bb76",null));t["default"]=h.exports},e60d:function(e,t,n){},ec24:function(e,t,n){"use strict";var i=n("e60d"),r=n.n(i);r.a}}]);