!function(ue){ue.fn.slide=function(re){return ue.fn.slide.defaults={type:"slide",effect:"fade",autoPlay:!1,delayTime:500,interTime:2500,triggerTime:150,defaultIndex:0,titCell:".hd li",mainCell:".bd",targetCell:null,trigger:"mouseover",scroll:1,vis:1,titOnClassName:"on",autoPage:!1,prevCell:".prev",nextCell:".next",pageStateCell:".pageState",opp:!1,pnLoop:!0,easing:"swing",startFun:null,endFun:null,switchLoad:null,playStateCell:".playState",mouseOverStop:!0,defaultPlay:!0,returnDefault:!1},this.each(function(){var s,e,t,a,n,i,o,r,u,l,c,f,p,d,h,m,v,w,g,I,M,C,y,O,x,b,q,k,P,T,S,Q,L,j,B,D,F,E,W,N,A,H,U,z,R,X=ue.extend({},ue.fn.slide.defaults,re),$=ue(this),G=X.effect,J=ue(X.prevCell,$),K=ue(X.nextCell,$),V=ue(X.pageStateCell,$),Y=ue(X.playStateCell,$),Z=ue(X.titCell,$),_=Z.length,ee=ue(X.mainCell,$),te=ee.children().length,ne=X.switchLoad,ae=ue(X.targetCell,$),ie=parseInt(X.defaultIndex),se=parseInt(X.delayTime),oe=parseInt(X.interTime);if(parseInt(X.triggerTime),s=parseInt(X.scroll),e="false"!=X.autoPlay&&0!=X.autoPlay,t="false"!=X.opp&&0!=X.opp,E="false"!=X.autoPage&&0!=X.autoPage,a="false"!=X.pnLoop&&0!=X.pnLoop,n="false"!=X.mouseOverStop&&0!=X.mouseOverStop,i="false"!=X.defaultPlay&&0!=X.defaultPlay,U="false"!=X.returnDefault&&0!=X.returnDefault,o=isNaN(X.vis)?1:parseInt(X.vis),r=!-[1]&&!window.XMLHttpRequest,f=c=l=u=0,p=X.easing,m=h=d=null,v=X.titOnClassName,F=Z.index($.find("."+v)),w=ie=-1==F?ie:F,I=g=ie,M=o<=te?0!=te%s?te%s:s:0,y="leftMarquee"==G||"topMarquee"==G,O=function(){ue.isFunction(X.startFun)&&X.startFun(ie,_,$,ue(X.titCell,$),ee,ae,J,K)},x=function(){ue.isFunction(X.endFun)&&X.endFun(ie,_,$,ue(X.titCell,$),ee,ae,J,K)},b=function(){Z.removeClass(v),i&&Z.eq(g).addClass(v)},"menu"==X.type)return i&&Z.removeClass(v).eq(ie).addClass(v),Z.hover(function(){C=ue(this).find(X.targetCell);var e=Z.index(ue(this));h=setTimeout(function(){switch(ie=e,Z.removeClass(v).eq(ie).addClass(v),O(),G){case"fade":C.stop(!0,!0).animate({opacity:"show"},se,p,x);break;case"slideDown":C.stop(!0,!0).animate({height:"show"},se,p,x)}},X.triggerTime)},function(){switch(clearTimeout(h),G){case"fade":C.animate({opacity:"hide"},se,p);break;case"slideDown":C.animate({height:"hide"},se,p)}}),void(U&&$.hover(function(){clearTimeout(m)},function(){m=setTimeout(b,se)}));if(0==_&&(_=te),y&&(_=2),E){if(o<=te?"leftLoop"==G||"topLoop"==G?_=0!=te%s?1+(0^te/s):te/s:(H=te-o,(_=1+parseInt(0!=H%s?H/s+1:H/s))<=0&&(_=1)):_=1,Z.html(""),q="",1==X.autoPage||"true"==X.autoPage)for(k=0;k<_;k++)q+="<li>"+(k+1)+"</li>";else for(k=0;k<_;k++)q+=X.autoPage.replace("$",k+1);Z.html(q),Z=Z.children()}if(o<=te)switch(ee.children().each(function(){ue(this).width()>c&&(c=ue(this).width(),l=ue(this).outerWidth(!0)),ue(this).height()>f&&(f=ue(this).height(),u=ue(this).outerHeight(!0))}),P=ee.children(),T=function(){for(var e=0;e<o;e++)P.eq(e).clone().addClass("clone").appendTo(ee);for(e=0;e<M;e++)P.eq(te-e-1).clone().addClass("clone").prependTo(ee)},G){case"fold":ee.css({position:"relative",width:l,height:u}).children().css({position:"absolute",width:c,left:0,top:0,display:"none"});break;case"top":ee.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:'+o*u+'px"></div>').css({top:-ie*s*u,position:"relative",padding:"0",margin:"0"}).children().css({height:f});break;case"left":ee.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:'+o*l+'px"></div>').css({width:te*l,left:-ie*s*l,position:"relative",overflow:"hidden",padding:"0",margin:"0"}).children().css({float:"left",width:c});break;case"leftLoop":case"leftMarquee":T(),ee.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:'+o*l+'px"></div>').css({width:(te+o+M)*l,position:"relative",overflow:"hidden",padding:"0",margin:"0",left:-(M+ie*s)*l}).children().css({float:"left",width:c});break;case"topLoop":case"topMarquee":T(),ee.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:'+o*u+'px"></div>').css({height:(te+o+M)*u,position:"relative",padding:"0",margin:"0",top:-(M+ie*s)*u}).children().css({height:f})}S=function(e){var t=e*s;return e==_?t=te:-1==e&&0!=te%s&&(t=-te%s),t},Q=function(n){function e(e){for(var t=e;t<o+e;t++)n.eq(t).find("img["+ne+"]").each(function(){var e,t,n=ue(this);if(n.attr("src",n.attr(ne)).removeAttr(ne),ee.find(".clone")[0])for(e=ee.children(),t=0;t<e.length;t++)e.eq(t).find("img["+ne+"]").each(function(){ue(this).attr(ne)==n.attr("src")&&ue(this).attr("src",ue(this).attr(ne)).removeAttr(ne)})})}var t,a,i;switch(G){case"fade":case"fold":case"top":case"left":case"slideDown":e(ie*s);break;case"leftLoop":case"topLoop":e(M+S(I));break;case"leftMarquee":case"topMarquee":t=("leftMarquee"==G?ee.css("left"):ee.css("top")).replace("px",""),a=M,0!=t%(i="leftMarquee"==G?l:u)&&(i=Math.abs(0^t/i),a=1==ie?M+i:M+i-1),e(a)}},L=function(e){var t,n;if(!i||w!=ie||e||y){if(y?1<=ie?ie=1:ie<=0&&(ie=0):_<=(I=ie)?ie=0:ie<0&&(ie=_-1),O(),null!=ne&&Q(ee.children()),ae[0]&&(C=ae.eq(ie),null!=ne&&Q(ae),"slideDown"==G?(ae.not(C).stop(!0,!0).slideUp(se),C.slideDown(se,p,function(){ee[0]||x()})):(ae.not(C).stop(!0,!0).hide(),C.animate({opacity:"show"},se,function(){ee[0]||x()}))),o<=te)switch(G){case"fade":ee.children().stop(!0,!0).eq(ie).animate({opacity:"show"},se,p,function(){x()}).siblings().hide();break;case"fold":ee.children().stop(!0,!0).eq(ie).animate({opacity:"show"},se,p,function(){x()}).siblings().animate({opacity:"hide"},se,p);break;case"top":ee.stop(!0,!1).animate({top:-ie*s*u},se,p,function(){x()});break;case"left":ee.stop(!0,!1).animate({left:-ie*s*l},se,p,function(){x()});break;case"leftLoop":t=I,ee.stop(!0,!0).animate({left:-(S(I)+M)*l},se,p,function(){t<=-1?ee.css("left",-(M+(_-1)*s)*l):_<=t&&ee.css("left",-M*l),x()});break;case"topLoop":t=I,ee.stop(!0,!0).animate({top:-(S(I)+M)*u},se,p,function(){t<=-1?ee.css("top",-(M+(_-1)*s)*u):_<=t&&ee.css("top",-M*u),x()});break;case"leftMarquee":n=ee.css("left").replace("px",""),0==ie?ee.animate({left:++n},0,function(){0<=ee.css("left").replace("px","")&&ee.css("left",-te*l)}):ee.animate({left:--n},0,function(){ee.css("left").replace("px","")<=-(te+M)*l&&ee.css("left",-M*l)});break;case"topMarquee":n=ee.css("top").replace("px",""),0==ie?ee.animate({top:++n},0,function(){0<=ee.css("top").replace("px","")&&ee.css("top",-te*u)}):ee.animate({top:--n},0,function(){ee.css("top").replace("px","")<=-(te+M)*u&&ee.css("top",-M*u)})}Z.removeClass(v).eq(ie).addClass(v),w=ie,a||(K.removeClass("nextStop"),J.removeClass("prevStop"),0==ie&&J.addClass("prevStop"),ie==_-1&&K.addClass("nextStop")),V.html("<span>"+(ie+1)+"</span>/"+_)}},i&&L(!0),U&&$.hover(function(){clearTimeout(m)},function(){m=setTimeout(function(){ie=g,i?L():"slideDown"==G?C.slideUp(se,b):C.animate({opacity:"hide"},se,b),w=ie},300)}),j=function(e){d=setInterval(function(){t?ie--:ie++,L()},e||oe)},B=function(e){d=setInterval(L,e||oe)},D=function(){n||!e||Y.hasClass("pauseState")||(clearInterval(d),j())},F=function(){!a&&ie==_-1||(ie++,L(),y||D())},E=function(){!a&&0==ie||(ie--,L(),y||D())},W=function(){clearInterval(d),(y?B:j)(),Y.removeClass("pauseState")},N=function(){clearInterval(d),Y.addClass("pauseState")},e?y?(t?ie--:ie++,B(),n&&ee.hover(N,W)):(j(),n&&$.hover(N,W)):(y&&(t?ie--:ie++),Y.addClass("pauseState")),Y.click(function(){(Y.hasClass("pauseState")?W:N)()}),"mouseover"==X.trigger?Z.hover(function(){var e=Z.index(this);h=setTimeout(function(){ie=e,L(),D()},X.triggerTime)},function(){clearTimeout(h)}):Z.click(function(){ie=Z.index(this),L(),D()}),y?(K.mousedown(F),J.mousedown(E),a&&(H=function(){A=setTimeout(function(){clearInterval(d),B(0^oe/10)},150)},U=function(){clearTimeout(A),clearInterval(d),B()},K.mousedown(H),K.mouseup(U),J.mousedown(H),J.mouseup(U)),"mouseover"==X.trigger&&(K.hover(F,function(){}),J.hover(E,function(){}))):(K.click(F),J.click(E)),"auto"!=X.vis||1!=s||"left"!=G&&"leftLoop"!=G||(R=function(){r&&(ee.width("auto"),ee.children().width("auto")),ee.parent().width("auto"),l=ee.parent().width(),r&&ee.parent().width(l),ee.children().width(l),"left"==G?(ee.width(l*te),ee.stop(!0,!1).animate({left:-ie*l},0)):(ee.width(l*(te+2)),ee.stop(!0,!1).animate({left:-(ie+1)*l},0)),r||l==ee.parent().width()||R()},ue(window).resize(function(){clearTimeout(z),z=setTimeout(R,100)}),R())})}}(jQuery),jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,t,n,a,i){return jQuery.easing[jQuery.easing.def](e,t,n,a,i)},easeInQuad:function(e,t,n,a,i){return a*(t/=i)*t+n},easeOutQuad:function(e,t,n,a,i){return-a*(t/=i)*(t-2)+n},easeInOutQuad:function(e,t,n,a,i){return(t/=i/2)<1?a/2*t*t+n:-a/2*(--t*(t-2)-1)+n},easeInCubic:function(e,t,n,a,i){return a*(t/=i)*t*t+n},easeOutCubic:function(e,t,n,a,i){return a*((t=t/i-1)*t*t+1)+n},easeInOutCubic:function(e,t,n,a,i){return(t/=i/2)<1?a/2*t*t*t+n:a/2*((t-=2)*t*t+2)+n},easeInQuart:function(e,t,n,a,i){return a*(t/=i)*t*t*t+n},easeOutQuart:function(e,t,n,a,i){return-a*((t=t/i-1)*t*t*t-1)+n},easeInOutQuart:function(e,t,n,a,i){return(t/=i/2)<1?a/2*t*t*t*t+n:-a/2*((t-=2)*t*t*t-2)+n},easeInQuint:function(e,t,n,a,i){return a*(t/=i)*t*t*t*t+n},easeOutQuint:function(e,t,n,a,i){return a*((t=t/i-1)*t*t*t*t+1)+n},easeInOutQuint:function(e,t,n,a,i){return(t/=i/2)<1?a/2*t*t*t*t*t+n:a/2*((t-=2)*t*t*t*t+2)+n},easeInSine:function(e,t,n,a,i){return-a*Math.cos(t/i*(Math.PI/2))+a+n},easeOutSine:function(e,t,n,a,i){return a*Math.sin(t/i*(Math.PI/2))+n},easeInOutSine:function(e,t,n,a,i){return-a/2*(Math.cos(Math.PI*t/i)-1)+n},easeInExpo:function(e,t,n,a,i){return 0==t?n:a*Math.pow(2,10*(t/i-1))+n},easeOutExpo:function(e,t,n,a,i){return t==i?n+a:a*(1-Math.pow(2,-10*t/i))+n},easeInOutExpo:function(e,t,n,a,i){return 0==t?n:t==i?n+a:(t/=i/2)<1?a/2*Math.pow(2,10*(t-1))+n:a/2*(2-Math.pow(2,-10*--t))+n},easeInCirc:function(e,t,n,a,i){return-a*(Math.sqrt(1-(t/=i)*t)-1)+n},easeOutCirc:function(e,t,n,a,i){return a*Math.sqrt(1-(t=t/i-1)*t)+n},easeInOutCirc:function(e,t,n,a,i){return(t/=i/2)<1?-a/2*(Math.sqrt(1-t*t)-1)+n:a/2*(Math.sqrt(1-(t-=2)*t)+1)+n},easeInElastic:function(e,t,n,a,i){var s=1.70158,o=0,r=a;return 0==t?n:1==(t/=i)?n+a:(o=o||.3*i,s=r<Math.abs(a)?(r=a,o/4):o/(2*Math.PI)*Math.asin(a/r),-(r*Math.pow(2,10*--t)*Math.sin(2*(t*i-s)*Math.PI/o))+n)},easeOutElastic:function(e,t,n,a,i){var s=1.70158,o=0,r=a;return 0==t?n:1==(t/=i)?n+a:(o=o||.3*i,s=r<Math.abs(a)?(r=a,o/4):o/(2*Math.PI)*Math.asin(a/r),r*Math.pow(2,-10*t)*Math.sin(2*(t*i-s)*Math.PI/o)+a+n)},easeInOutElastic:function(e,t,n,a,i){var s=1.70158,o=0,r=a;return 0==t?n:2==(t/=i/2)?n+a:(o=o||.3*i*1.5,s=r<Math.abs(a)?(r=a,o/4):o/(2*Math.PI)*Math.asin(a/r),t<1?-.5*r*Math.pow(2,10*--t)*Math.sin(2*(t*i-s)*Math.PI/o)+n:.5*r*Math.pow(2,-10*--t)*Math.sin(2*(t*i-s)*Math.PI/o)+a+n)},easeInBack:function(e,t,n,a,i,s){return a*(t/=i)*t*(((s=null==s?1.70158:s)+1)*t-s)+n},easeOutBack:function(e,t,n,a,i,s){return a*((t=t/i-1)*t*(((s=null==s?1.70158:s)+1)*t+s)+1)+n},easeInOutBack:function(e,t,n,a,i,s){return null==s&&(s=1.70158),(t/=i/2)<1?a/2*t*t*((1+(s*=1.525))*t-s)+n:a/2*((t-=2)*t*((1+(s*=1.525))*t+s)+2)+n},easeInBounce:function(e,t,n,a,i){return a-jQuery.easing.easeOutBounce(e,i-t,0,a,i)+n},easeOutBounce:function(e,t,n,a,i){return(t/=i)<1/2.75?7.5625*a*t*t+n:t<2/2.75?a*(7.5625*(t-=1.5/2.75)*t+.75)+n:t<2.5/2.75?a*(7.5625*(t-=2.25/2.75)*t+.9375)+n:a*(7.5625*(t-=2.625/2.75)*t+.984375)+n},easeInOutBounce:function(e,t,n,a,i){return t<i/2?.5*jQuery.easing.easeInBounce(e,2*t,0,a,i)+n:.5*jQuery.easing.easeOutBounce(e,2*t-i,0,a,i)+.5*a+n}});