!function(a,n){"function"==typeof define&&define.amd?define(n):"object"==typeof exports?module.exports=n(require,0,module):a.CountUp=n()}(this,function(a,n,t){return function(a,n,t,e,i,r){function o(a){return"number"==typeof a&&!isNaN(a)}var s=this;if(s.version=function(){return"1.9.3"},s.options={useEasing:!0,useGrouping:!0,separator:"",decimal:".",easingFn:function(a,n,t,e){return t*(1-Math.pow(2,-10*a/e))*1024/1023+n},formattingFn:function(a){var n,t,e,i,r=a<0;if(a=Math.abs(a).toFixed(s.decimals),n=(a=(a+="").split("."))[0],a=1<a.length?s.options.decimal+a[1]:"",s.options.useGrouping){for(t="",e=0,i=n.length;e<i;++e)0!==e&&e%3==0&&(t=s.options.separator+t),t=n[i-e-1]+t;n=t}return s.options.numerals.length&&(n=n.replace(/[0-9]/g,function(a){return s.options.numerals[+a]}),a=a.replace(/[0-9]/g,function(a){return s.options.numerals[+a]})),(r?"-":"")+s.options.prefix+n+a+s.options.suffix},prefix:"",suffix:"",numerals:[]},r&&"object"==typeof r)for(var u in s.options)r.hasOwnProperty(u)&&null!==r[u]&&(s.options[u]=r[u]);""===s.options.separator?s.options.useGrouping=!1:s.options.separator=""+s.options.separator;for(var l=0,m=["webkit","moz","ms","o"],d=0;d<m.length&&!window.requestAnimationFrame;++d)window.requestAnimationFrame=window[m[d]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[m[d]+"CancelAnimationFrame"]||window[m[d]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(a,n){var t=(new Date).getTime(),e=Math.max(0,16-(t-l)),i=window.setTimeout(function(){a(t+e)},e);return l=t+e,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)}),s.initialize=function(){return!(!s.initialized&&(s.error="",s.d="string"==typeof a?document.getElementById(a):a,s.d?(s.startVal=Number(n),s.endVal=Number(t),o(s.startVal)&&o(s.endVal)?(s.decimals=Math.max(0,e||0),s.dec=Math.pow(10,s.decimals),s.duration=1e3*Number(i)||2e3,s.countDown=s.startVal>s.endVal,s.frameVal=s.startVal,s.initialized=!0,0):(s.error="[CountUp] startVal ("+n+") or endVal ("+t+") is not a number",1)):s.error="[CountUp] target is null or undefined"))},s.printValue=function(a){a=s.options.formattingFn(a);"INPUT"===s.d.tagName?this.d.value=a:"text"===s.d.tagName||"tspan"===s.d.tagName?this.d.textContent=a:this.d.innerHTML=a},s.count=function(a){s.startTime||(s.startTime=a);a=(s.timestamp=a)-s.startTime;s.remaining=s.duration-a,s.options.useEasing?s.countDown?s.frameVal=s.startVal-s.options.easingFn(a,0,s.startVal-s.endVal,s.duration):s.frameVal=s.options.easingFn(a,s.startVal,s.endVal-s.startVal,s.duration):s.countDown?s.frameVal=s.startVal-(s.startVal-s.endVal)*(a/s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(a/s.duration),s.countDown?s.frameVal=s.frameVal<s.endVal?s.endVal:s.frameVal:s.frameVal=s.frameVal>s.endVal?s.endVal:s.frameVal,s.frameVal=Math.round(s.frameVal*s.dec)/s.dec,s.printValue(s.frameVal),a<s.duration?s.rAF=requestAnimationFrame(s.count):s.callback&&s.callback()},s.start=function(a){s.initialize()&&(s.callback=a,s.rAF=requestAnimationFrame(s.count))},s.pauseResume=function(){s.paused?(s.paused=!1,delete s.startTime,s.duration=s.remaining,s.startVal=s.frameVal,requestAnimationFrame(s.count)):(s.paused=!0,cancelAnimationFrame(s.rAF))},s.reset=function(){s.paused=!1,delete s.startTime,s.initialized=!1,s.initialize()&&(cancelAnimationFrame(s.rAF),s.printValue(s.startVal))},s.update=function(a){s.initialize()&&(o(a=Number(a))?(s.error="",a!==s.frameVal&&(cancelAnimationFrame(s.rAF),s.paused=!1,delete s.startTime,s.startVal=s.frameVal,s.endVal=a,s.countDown=s.startVal>s.endVal,s.rAF=requestAnimationFrame(s.count))):s.error="[CountUp] update() - new endVal is not a number: "+a)},s.initialize()&&s.printValue(s.startVal)}});