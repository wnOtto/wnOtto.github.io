<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\assets\js\Meting.min.js"></script>(function(i,e,g){var o={beforeShow:b,move:b,change:b,show:b,hide:b,color:false,flat:false,showInput:false,allowEmpty:false,showButtons:true,clickoutFiresChange:false,showInitial:false,showPalette:false,showPaletteOnly:false,showSelectionPalette:true,localStorageKey:false,appendTo:"body",maxSelectionSize:7,cancelText:"cancel",chooseText:"choose",preferredFormat:false,className:"",showAlpha:false,theme:"sp-light",palette:["fff","000"],selectionPalette:[],disabled:false},d=[],j=!!/msie/i.exec(i.navigator.userAgent),m=(function(){function w(A,z){return !!~(""+A).indexOf(z)}var y=document.createElement("div");var x=y.style;x.cssText="background-color:rgba(0,0,0,.5)";return w(x.backgroundColor,"rgba")||w(x.backgroundColor,"hsla")})(),n=(function(){var w=e("<input type='color' value='!' />")[0];return w.type==="color"&&w.value!=="!"})(),s=["<div class='sp-replacer'>","<div class='sp-preview'><div class='sp-preview-inner'></div></div>","<div class='sp-dd'>&#9660;</div>","</div>"].join(""),r=(function(){var w="";if(j){for(var x=1;x<=6;x++){w+="<div class='sp-"+x+"'></div>"}}return["<div class='sp-container sp-hidden'>","<div class='sp-palette-container'>","<div class='sp-palette sp-thumb sp-cf'></div>","</div>","<div class='sp-picker-container'>","<div class='sp-top sp-cf'>","<div class='sp-fill'></div>","<div class='sp-top-inner'>","<div class='sp-color'>","<div class='sp-sat'>","<div class='sp-val'>","<div class='sp-dragger'></div>","</div>","</div>","</div>","<div class='sp-clear sp-clear-display' title='Clear Color Selection'>","</div>","<div class='sp-hue'>","<div class='sp-slider'></div>",w,"</div>","</div>","<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>","</div>","<div class='sp-input-container sp-cf'>","<input class='sp-input' type='text' spellcheck='false'  />","</div>","<div class='sp-initial sp-thumb sp-cf'></div>","<div class='sp-button-container sp-cf'>","<a class='sp-cancel' href='#'></a>","<button class='sp-choose'></button>","</div>","</div>","</div>"].join("")})();function v(x,z,D){var B=[];for(var A=0;A<x.length;A++){var C=x[A];if(C){var w=tinycolor(C);var E=w.toHsl().l<0.5?"sp-thumb-el sp-thumb-dark":"sp-thumb-el sp-thumb-light";E+=(tinycolor.equals(z,C))?" sp-thumb-active":"";var y=m?("background-color:"+w.toRgbString()):"filter:"+w.toFilter();B.push('<span title="'+w.toRgbString()+'" data-color="'+w.toRgbString()+'" class="'+E+'"><span class="sp-thumb-inner" style="'+y+';" /></span>')}else{var F="sp-clear-display";B.push('<span title="No Color Selected" data-color="" style="background-color:transparent;" class="'+F+'"></span>')}}return"<div class='sp-cf "+D+"'>"+B.join("")+"</div>"}function q(){for(var w=0;w<d.length;w++){if(d[w]){d[w].hide()}}}function p(y,w){var x=e.extend({},o,y);x.callbacks={"move":u(x.move,w),"change":u(x.change,w),"show":u(x.show,w),"hide":u(x.hide,w),"beforeShow":u(x.beforeShow,w)};return x}function t(a2,ah){var a1=p(ah,a2),aY=a1.flat,X=a1.showSelectionPalette,x=a1.localStorageKey,aj=a1.theme,S=a1.callbacks,F=f(ad,10),P=false,aJ=0,af=0,aK=0,aw=0,M=0,av=0,aT=0,ao=0,Z=0,Q=0,az=0,aU=1,ai=a1.palette.slice(0),ak=e.isArray(ai[0])?ai:[ai],aF=a1.selectionPalette.slice(0),aE=a1.maxSelectionSize,y="sp-dragging",H=null;var Y=a2.ownerDocument,O=Y.body,E=e(a2),aR=false,aL=e(r,Y).addClass(aj),J=aL.find(".sp-color"),aI=aL.find(".sp-dragger"),N=aL.find(".sp-hue"),aX=aL.find(".sp-slider"),aB=aL.find(".sp-alpha-inner"),aa=aL.find(".sp-alpha"),aC=aL.find(".sp-alpha-handle"),L=aL.find(".sp-input"),R=aL.find(".sp-palette"),a0=aL.find(".sp-initial"),an=aL.find(".sp-cancel"),al=aL.find(".sp-clear"),I=aL.find(".sp-choose"),T=E.is("input"),C=T&&n&&E.attr("type")==="color",ay=T&&!aY,aP=(ay)?e(s).addClass(aj).addClass(a1.className):e([]),at=(ay)?aP:E,K=aP.find(".sp-preview-inner"),U=a1.color||(T&&E.val()),aM=false,W=a1.preferredFormat,aq=W,G=!a1.showButtons||a1.clickoutFiresChange,D=!U,aZ=a1.allowEmpty&&!C;function w(){if(a1.showPaletteOnly){a1.showPalette=true}aL.toggleClass("sp-flat",aY);aL.toggleClass("sp-input-disabled",!a1.showInput);aL.toggleClass("sp-alpha-enabled",a1.showAlpha);aL.toggleClass("sp-clear-enabled",aZ);aL.toggleClass("sp-buttons-disabled",!a1.showButtons);aL.toggleClass("sp-palette-disabled",!a1.showPalette);aL.toggleClass("sp-palette-only",a1.showPaletteOnly);aL.toggleClass("sp-initial-disabled",!a1.showInitial);aL.addClass(a1.className);ad()}function aG(){if(j){aL.find("*:not(input)").attr("unselectable","on")}w();if(ay){E.after(aP).hide()}if(!aZ){al.hide()}if(aY){E.after(aL).hide()}else{var a7=a1.appendTo==="parent"?E.parent():e(a1.appendTo);if(a7.length!==1){a7=e("body")}a7.append(aL)}if(x&&i.localStorage){try{var a5=i.localStorage[x].split(",#");if(a5.length>1){delete i.localStorage[x];e.each(a5,function(a9,ba){aQ(ba)})}}catch(a8){}try{aF=i.localStorage[x].split(";")}catch(a8){}}at.bind("click.spectrum touchstart.spectrum",function(a9){if(!aR){au()}a9.stopPropagation();if(!e(a9.target).is("input")){a9.preventDefault()}});if(E.is(":disabled")||(a1.disabled===true)){V()
}aL.click(l);L.change(aN);L.bind("paste",function(){setTimeout(aN,1)});L.keydown(function(a9){if(a9.keyCode==13){aN()}});an.text(a1.cancelText);an.bind("click.spectrum",function(a9){a9.stopPropagation();a9.preventDefault();aD("cancel")});al.bind("click.spectrum",function(a9){a9.stopPropagation();a9.preventDefault();D=true;aH();if(aY){am(true)}});I.text(a1.chooseText);I.bind("click.spectrum",function(a9){a9.stopPropagation();a9.preventDefault();if(ax()){am(true);aD()}});c(aa,function(bb,ba,a9){aU=(bb/av);D=false;if(a9.shiftKey){aU=Math.round(aU*10)/10}aH()});c(N,function(ba,a9){Z=parseFloat(a9/aw);D=false;aH()},B,a3);c(J,function(bg,be,bd){if(!bd.shiftKey){H=null}else{if(!H){var bb=Q*aJ;var a9=af-(az*af);var ba=Math.abs(bg-bb)>Math.abs(be-a9);H=ba?"x":"y"}}var bc=!H||H==="x";var bf=!H||H==="y";if(bc){Q=parseFloat(bg/aJ)}if(bf){az=parseFloat((af-be)/af)}D=false;aH()},B,a3);if(!!U){ac(U);aA();aq=W||tinycolor(U).format;aQ(U)}else{aA()}if(aY){A()}function a6(a9){if(a9.data&&a9.data.ignore){ac(e(this).data("color"));aH()}else{ac(e(this).data("color"));am(true);aH();aD()}return false}var a4=j?"mousedown.spectrum":"click.spectrum touchstart.spectrum";R.delegate(".sp-thumb-el",a4,a6);a0.delegate(".sp-thumb-el:nth-child(1)",a4,{ignore:true},a6)}function aQ(a4){if(X){var a6=tinycolor(a4).toRgbString();if(e.inArray(a6,aF)===-1){aF.push(a6);while(aF.length>aE){aF.shift()}}if(x&&i.localStorage){try{i.localStorage[x]=aF.join(";")}catch(a5){}}}}function aS(){var a9=[];var a8=aF;var a7={};var a5;if(a1.showPalette){for(var a6=0;a6<ak.length;a6++){for(var a4=0;a4<ak[a6].length;a4++){a5=tinycolor(ak[a6][a4]).toRgbString();a7[a5]=true}}for(a6=0;a6<a8.length;a6++){a5=tinycolor(a8[a6]).toRgbString();if(!a7.hasOwnProperty(a5)){a9.push(a8[a6]);a7[a5]=true}}}return a9.reverse().slice(0,a1.maxSelectionSize)}function aV(){var a4=aO();var a5=e.map(ak,function(a6,a7){return v(a6,a4,"sp-palette-row sp-palette-row-"+a7)});if(aF){a5.push(v(aS(),a4,"sp-palette-row sp-palette-row-selection"))}R.html(a5.join(""))}function ap(){if(a1.showInitial){var a4=aM;var a5=aO();a0.html(v([a4,a5],a5,"sp-palette-row-initial"))}}function B(){if(af<=0||aJ<=0||aw<=0){ad()}aL.addClass(y);H=null}function a3(){aL.removeClass(y)}function aN(){var a5=L.val();if((a5===null||a5==="")&&aZ){ac(null)}else{var a4=tinycolor(a5);if(a4.ok){ac(a4)}else{L.addClass("sp-validation-error")}}}function au(){if(P){aD()}else{A()}}function A(){var a4=e.Event("beforeShow.spectrum");if(P){ad();return}E.trigger(a4,[aO()]);if(S.beforeShow(aO())===false||a4.isDefaultPrevented()){return}q();P=true;e(Y).bind("click.spectrum",aD);e(i).bind("resize.spectrum",F);aP.addClass("sp-active");aL.removeClass("sp-hidden");if(a1.showPalette){aV()}ad();aA();aM=aO();ap();S.show(aM);E.trigger("show.spectrum",[aM])}function aD(a5){if(a5&&a5.type=="click"&&a5.button==2){return}if(!P||aY){return}P=false;e(Y).unbind("click.spectrum",aD);e(i).unbind("resize.spectrum",F);aP.removeClass("sp-active");aL.addClass("sp-hidden");var a4=!tinycolor.equals(aO(),aM);if(a4){if(G&&a5!=="cancel"){am(true)}else{ar()}}S.hide(aO());E.trigger("hide.spectrum",[aO()])}function ar(){ac(aM,true)}function ac(a4,a6){if(tinycolor.equals(a4,aO())){return}var a5;if(!a4&&aZ){D=true}else{D=false;a5=tinycolor(a4);var a7=a5.toHsv();Z=(a7.h%360)/360;Q=a7.s;az=a7.v;aU=a7.a}aA();if(a5&&a5.ok&&!a6){aq=W||a5.format}}function aO(a4){a4=a4||{};if(aZ&&D){return null}return tinycolor.fromRatio({h:Z,s:Q,v:az,a:Math.round(aU*100)/100},{format:a4.format||aq})}function ax(){return !L.hasClass("sp-validation-error")}function aH(){aA();S.move(aO());E.trigger("move.spectrum",[aO()])}function aA(){L.removeClass("sp-validation-error");aW();var a6=tinycolor.fromRatio({h:Z,s:1,v:1});J.css("background-color",a6.toHexString());var bb=aq;if(aU<1){if(bb==="hex"||bb==="hex3"||bb==="hex6"||bb==="name"){bb="rgb"}}var a4=aO({format:bb}),a7="";K.removeClass("sp-clear-display");K.css("background-color","transparent");if(!a4&&aZ){K.addClass("sp-clear-display")}else{var a8=a4.toHexString(),bc=a4.toRgbString();if(m||a4.alpha===1){K.css("background-color",bc)}else{K.css("background-color","transparent");K.css("filter",a4.toFilter())}if(a1.showAlpha){var a9=a4.toRgb();a9.a=0;var a5=tinycolor(a9).toRgbString();var ba="linear-gradient(left, "+a5+", "+a8+")";if(j){aB.css("filter",tinycolor(a5).toFilter({gradientType:1},a8))}else{aB.css("background","-webkit-"+ba);aB.css("background","-moz-"+ba);aB.css("background","-ms-"+ba);aB.css("background",ba)}}a7=a4.toString(bb)}if(a1.showInput){L.val(a7)}if(a1.showPalette){aV()}ap()}function aW(){var a6=Q;var a4=az;if(aZ&&D){aC.hide();aX.hide();aI.hide()}else{aC.show();aX.show();aI.show();var a9=a6*aJ;var a7=af-(a4*af);a9=Math.max(-aK,Math.min(aJ-aK,a9-aK));a7=Math.max(-aK,Math.min(af-aK,a7-aK));aI.css({"top":a7,"left":a9});var a5=aU*av;aC.css({"left":a5-(aT/2)});var a8=(Z)*aw;aX.css({"top":a8-ao})}}function am(a5){var a4=aO(),a7="",a6=!tinycolor.equals(a4,aM);if(a4){a7=a4.toString(aq);aQ(a4)}if(T){E.val(a7)}aM=a4;if(a5&&a6){S.change(a4);
E.trigger("change",[a4])}}function ad(){aJ=J.width();af=J.height();aK=aI.height();M=N.width();aw=N.height();ao=aX.height();av=aa.width();aT=aC.width();if(!aY){aL.css("position","absolute");aL.offset(a(aL,at))}aW()}function z(){E.show();at.unbind("click.spectrum touchstart.spectrum");aL.remove();aP.remove();d[ae.id]=null}function ab(a4,a5){if(a4===g){return e.extend({},a1)}if(a5===g){return a1[a4]}a1[a4]=a5;w()}function ag(){aR=false;E.attr("disabled",false);at.removeClass("sp-disabled")}function V(){aD();aR=true;E.attr("disabled",true);at.addClass("sp-disabled")}aG();var ae={show:A,hide:aD,toggle:au,reflow:ad,option:ab,enable:ag,disable:V,set:function(a4){ac(a4);am()},get:aO,destroy:z,container:aL};ae.id=d.push(ae)-1;return ae}function a(D,E){var C=0;var A=D.outerWidth();var G=D.outerHeight();var w=E.outerHeight();var F=D[0].ownerDocument;var x=F.documentElement;var B=x.clientWidth+e(F).scrollLeft();var y=x.clientHeight+e(F).scrollTop();var z=E.offset();z.top+=w;z.left-=Math.min(z.left,(z.left+A>B&&B>A)?Math.abs(z.left+A-B):0);z.top-=Math.min(z.top,((z.top+G>y&&y>G)?Math.abs(G+w-C):C));return z}function b(){}function l(w){w.stopPropagation()}function u(x,y){var z=Array.prototype.slice;var w=z.call(arguments,2);return function(){return x.apply(y,w.concat(z.call(arguments)))}}function c(B,G,x,y){G=G||function(){};x=x||function(){};y=y||function(){};var H=B.ownerDocument||document;var J=false;var A={};var K=0;var I=0;var D=("ontouchstart" in i);var C={};C["selectstart"]=F;C["dragstart"]=F;C["touchmove mousemove"]=z;C["touchend mouseup"]=E;function F(L){if(L.stopPropagation){L.stopPropagation()}if(L.preventDefault){L.preventDefault()}L.returnValue=false}function z(P){if(J){if(j&&document.documentMode<9&&!P.button){return E()}var O=P.originalEvent.touches;var M=O?O[0].pageX:P.pageX;var L=O?O[0].pageY:P.pageY;var Q=Math.max(0,Math.min(M-A.left,I));var N=Math.max(0,Math.min(L-A.top,K));if(D){F(P)}G.apply(B,[Q,N,P])}}function w(N){var L=(N.which)?(N.which==3):(N.button==2);var M=N.originalEvent.touches;if(!L&&!J){if(x.apply(B,arguments)!==false){J=true;K=e(B).height();I=e(B).width();A=e(B).offset();e(H).bind(C);e(H.body).addClass("sp-dragging");if(!D){z(N)}F(N)}}}function E(){if(J){e(H).unbind(C);e(H.body).removeClass("sp-dragging");y.apply(B,arguments)}J=false}e(B).bind("touchstart mousedown",w)}function f(x,z,w){var y;return function(){var B=this,A=arguments;var C=function(){y=null;x.apply(B,A)};if(w){clearTimeout(y)}if(w||!y){y=setTimeout(C,z)}}}function h(){if(i.console){if(Function.prototype.bind){h=Function.prototype.bind.call(console.log,console)}else{h=function(){Function.prototype.apply.call(console.log,console,arguments)}}h.apply(this,arguments)}}var k="spectrum.id";e.fn.spectrum=function(z,w){if(typeof z=="string"){var y=this;var x=Array.prototype.slice.call(arguments,1);this.each(function(){var A=d[e(this).data(k)];if(A){var B=A[z];if(!B){throw new Error("Spectrum: no such method: '"+z+"'")}if(z=="get"){y=A.get()}else{if(z=="container"){y=A.container}else{if(z=="option"){y=A.option.apply(A,x)}else{if(z=="destroy"){A.destroy();e(this).removeData(k)}else{B.apply(A,x)}}}}}});return y}return this.spectrum("destroy").each(function(){var A=t(this,z);e(this).data(k,A.id)})};e.fn.spectrum.load=true;e.fn.spectrum.loadOpts={};e.fn.spectrum.draggable=c;e.fn.spectrum.defaults=o;e.spectrum={};e.spectrum.localization={};e.spectrum.palettes={};e.fn.spectrum.processNativeColorInputs=function(){if(!n){e("input[type=color]").spectrum({preferredFormat:"hex6"})}};(function(){var N=/^[\s,#]+/,H=/\s+$/,I=0,w=Math,T=w.round,B=w.min,E=w.max,D=w.random;function R(ac,Z){ac=(ac)?ac:"";Z=Z||{};if(typeof ac=="object"&&ac.hasOwnProperty("_tc_id")){return ac}var ae=J(ac);var aa=ae.r,ad=ae.g,af=ae.b,ag=ae.a,ab=T(100*ag)/100,ah=Z.format||ae.format;if(aa<1){aa=T(aa)}if(ad<1){ad=T(ad)}if(af<1){af=T(af)}return{ok:ae.ok,format:ah,_tc_id:I++,alpha:ag,getAlpha:function(){return ag},setAlpha:function(ai){ag=K(ai);ab=T(100*ag)/100},toHsv:function(){var ai=M(aa,ad,af);return{h:ai.h*360,s:ai.s,v:ai.v,a:ag}},toHsvString:function(){var aj=M(aa,ad,af);var al=T(aj.h*360),ak=T(aj.s*100),ai=T(aj.v*100);return(ag==1)?"hsv("+al+", "+ak+"%, "+ai+"%)":"hsva("+al+", "+ak+"%, "+ai+"%, "+ab+")"},toHsl:function(){var ai=U(aa,ad,af);return{h:ai.h*360,s:ai.s,l:ai.l,a:ag}},toHslString:function(){var aj=U(aa,ad,af);var al=T(aj.h*360),ak=T(aj.s*100),ai=T(aj.l*100);return(ag==1)?"hsl("+al+", "+ak+"%, "+ai+"%)":"hsla("+al+", "+ak+"%, "+ai+"%, "+ab+")"},toHex:function(ai){return S(aa,ad,af,ai)},toHexString:function(ai){return"#"+S(aa,ad,af,ai)},toRgb:function(){return{r:T(aa),g:T(ad),b:T(af),a:ag}},toRgbString:function(){return(ag==1)?"rgb("+T(aa)+", "+T(ad)+", "+T(af)+")":"rgba("+T(aa)+", "+T(ad)+", "+T(af)+", "+ab+")"},toPercentageRgb:function(){return{r:T(W(aa,255)*100)+"%",g:T(W(ad,255)*100)+"%",b:T(W(af,255)*100)+"%",a:ag}},toPercentageRgbString:function(){return(ag==1)?"rgb("+T(W(aa,255)*100)+"%, "+T(W(ad,255)*100)+"%, "+T(W(af,255)*100)+"%)":"rgba("+T(W(aa,255)*100)+"%, "+T(W(ad,255)*100)+"%, "+T(W(af,255)*100)+"%, "+ab+")"
},toName:function(){if(ag===0){return"transparent"}return Y[S(aa,ad,af,true)]||false},toFilter:function(al){var am=S(aa,ad,af);var ao=am;var an=Math.round(parseFloat(ag)*255).toString(16);var aj=an;var ai=Z&&Z.gradientType?"GradientType = 1, ":"";if(al){var ak=R(al);ao=ak.toHex();aj=Math.round(parseFloat(ak.alpha)*255).toString(16)}return"progid:DXImageTransform.Microsoft.gradient("+ai+"startColorstr=#"+z(an)+am+",endColorstr=#"+z(aj)+ao+")"},toString:function(am){var aj=!!am;am=am||this.format;var al=false;var ai=!aj&&ag<1&&ag>0;var ak=ai&&(am==="hex"||am==="hex6"||am==="hex3"||am==="name");if(am==="rgb"){al=this.toRgbString()}if(am==="prgb"){al=this.toPercentageRgbString()}if(am==="hex"||am==="hex6"){al=this.toHexString()}if(am==="hex3"){al=this.toHexString(true)}if(am==="name"){al=this.toName()}if(am==="hsl"){al=this.toHslString()}if(am==="hsv"){al=this.toHsvString()}if(ak){return this.toRgbString()}return al||this.toHexString()}}}R.fromRatio=function(Z,ac){if(typeof Z=="object"){var aa={};for(var ab in Z){if(Z.hasOwnProperty(ab)){if(ab==="a"){aa[ab]=Z[ab]}else{aa[ab]=A(Z[ab])}}}Z=aa}return R(Z,ac)};function J(aa){var ab={r:0,g:0,b:0};var Z=1;var ac=false;var ad=false;if(typeof aa=="string"){aa=C(aa)}if(typeof aa=="object"){if(aa.hasOwnProperty("r")&&aa.hasOwnProperty("g")&&aa.hasOwnProperty("b")){ab=F(aa.r,aa.g,aa.b);ac=true;ad=String(aa.r).substr(-1)==="%"?"prgb":"rgb"}else{if(aa.hasOwnProperty("h")&&aa.hasOwnProperty("s")&&aa.hasOwnProperty("v")){aa.s=A(aa.s);aa.v=A(aa.v);ab=Q(aa.h,aa.s,aa.v);ac=true;ad="hsv"}else{if(aa.hasOwnProperty("h")&&aa.hasOwnProperty("s")&&aa.hasOwnProperty("l")){aa.s=A(aa.s);aa.l=A(aa.l);ab=G(aa.h,aa.s,aa.l);ac=true;ad="hsl"}}}if(aa.hasOwnProperty("a")){Z=aa.a}}Z=K(Z);return{ok:ac,format:aa.format||ad,r:B(255,E(ab.r,0)),g:B(255,E(ab.g,0)),b:B(255,E(ab.b,0)),a:Z}}function F(ab,aa,Z){return{r:W(ab,255)*255,g:W(aa,255)*255,b:W(Z,255)*255}}function U(Z,ad,af){Z=W(Z,255);ad=W(ad,255);af=W(af,255);var ag=E(Z,ad,af),ab=B(Z,ad,af);var ac,ah,aa=(ag+ab)/2;if(ag==ab){ac=ah=0}else{var ae=ag-ab;ah=aa>0.5?ae/(2-ag-ab):ae/(ag+ab);switch(ag){case Z:ac=(ad-af)/ae+(ad<af?6:0);break;case ad:ac=(af-Z)/ae+2;break;case af:ac=(Z-ad)/ae+4;break}ac/=6}return{h:ac,s:ah,l:aa}}function G(ae,ah,ad){var Z,af,ag;ae=W(ae,360);ah=W(ah,100);ad=W(ad,100);function ac(ak,aj,ai){if(ai<0){ai+=1}if(ai>1){ai-=1}if(ai<1/6){return ak+(aj-ak)*6*ai}if(ai<1/2){return aj}if(ai<2/3){return ak+(aj-ak)*(2/3-ai)*6}return ak}if(ah===0){Z=af=ag=ad}else{var aa=ad<0.5?ad*(1+ah):ad+ah-ad*ah;var ab=2*ad-aa;Z=ac(ab,aa,ae+1/3);af=ac(ab,aa,ae);ag=ac(ab,aa,ae-1/3)}return{r:Z*255,g:af*255,b:ag*255}}function M(Z,ac,ae){Z=W(Z,255);ac=W(ac,255);ae=W(ae,255);var af=E(Z,ac,ae),aa=B(Z,ac,ae);var ab,ah,ag=af;var ad=af-aa;ah=af===0?0:ad/af;if(af==aa){ab=0}else{switch(af){case Z:ab=(ac-ae)/ad+(ac<ae?6:0);break;case ac:ab=(ae-Z)/ad+2;break;case ae:ab=(Z-ac)/ad+4;break}ab/=6}return{h:ab,s:ah,v:ag}}function Q(ad,ak,ai){ad=W(ad,360)*6;ak=W(ak,100);ai=W(ai,100);var ac=w.floor(ad),af=ad-ac,ab=ai*(1-ak),aa=ai*(1-af*ak),aj=ai*(1-(1-af)*ak),ah=ac%6,Z=[ai,aa,ab,ab,aj,ai][ah],ae=[aj,ai,ai,aa,ab,ab][ah],ag=[ab,ab,aj,ai,ai,aa][ah];return{r:Z*255,g:ae*255,b:ag*255}}function S(ac,ab,Z,ad){var aa=[z(T(ac).toString(16)),z(T(ab).toString(16)),z(T(Z).toString(16))];if(ad&&aa[0].charAt(0)==aa[0].charAt(1)&&aa[1].charAt(0)==aa[1].charAt(1)&&aa[2].charAt(0)==aa[2].charAt(1)){return aa[0].charAt(0)+aa[1].charAt(0)+aa[2].charAt(0)}return aa.join("")}R.equals=function(aa,Z){if(!aa||!Z){return false}return R(aa).toRgbString()==R(Z).toRgbString()};R.random=function(){return R.fromRatio({r:D(),g:D(),b:D()})};R.desaturate=function(aa,ab){ab=(ab===0)?0:(ab||10);var Z=R(aa).toHsl();Z.s-=ab/100;Z.s=P(Z.s);return R(Z)};R.saturate=function(aa,ab){ab=(ab===0)?0:(ab||10);var Z=R(aa).toHsl();Z.s+=ab/100;Z.s=P(Z.s);return R(Z)};R.greyscale=function(Z){return R.desaturate(Z,100)};R.lighten=function(aa,ab){ab=(ab===0)?0:(ab||10);var Z=R(aa).toHsl();Z.l+=ab/100;Z.l=P(Z.l);return R(Z)};R.darken=function(aa,ab){ab=(ab===0)?0:(ab||10);var Z=R(aa).toHsl();Z.l-=ab/100;Z.l=P(Z.l);return R(Z)};R.complement=function(aa){var Z=R(aa).toHsl();Z.h=(Z.h+180)%360;return R(Z)};R.triad=function(aa){var Z=R(aa).toHsl();var ab=Z.h;return[R(aa),R({h:(ab+120)%360,s:Z.s,l:Z.l}),R({h:(ab+240)%360,s:Z.s,l:Z.l})]};R.tetrad=function(aa){var Z=R(aa).toHsl();var ab=Z.h;return[R(aa),R({h:(ab+90)%360,s:Z.s,l:Z.l}),R({h:(ab+180)%360,s:Z.s,l:Z.l}),R({h:(ab+270)%360,s:Z.s,l:Z.l})]};R.splitcomplement=function(aa){var Z=R(aa).toHsl();var ab=Z.h;return[R(aa),R({h:(ab+72)%360,s:Z.s,l:Z.l}),R({h:(ab+216)%360,s:Z.s,l:Z.l})]};R.analogous=function(aa,ad,ae){ad=ad||6;ae=ae||30;var Z=R(aa).toHsl();var ac=360/ae;var ab=[R(aa)];for(Z.h=((Z.h-(ac*ad>>1))+720)%360;--ad;){Z.h=(Z.h+ac)%360;ab.push(R(Z))}return ab};R.monochromatic=function(ab,ae){ae=ae||6;var ad=R(ab).toHsv();var ag=ad.h,af=ad.s,aa=ad.v;var ac=[];var Z=1/ae;while(ae--){ac.push(R({h:ag,s:af,v:aa}));aa=(aa+Z)%1}return ac};R.readability=function(ad,ab){var ac=R(ad).toRgb();
var aa=R(ab).toRgb();var Z=(ac.r*299+ac.g*587+ac.b*114)/1000;var af=(aa.r*299+aa.g*587+aa.b*114)/1000;var ae=(Math.max(ac.r,aa.r)-Math.min(ac.r,aa.r)+Math.max(ac.g,aa.g)-Math.min(ac.g,aa.g)+Math.max(ac.b,aa.b)-Math.min(ac.b,aa.b));return{brightness:Math.abs(Z-af),color:ae}};R.readable=function(aa,Z){var ab=R.readability(aa,Z);return ab.brightness>125&&ab.color>500};R.mostReadable=function(ag,af){var ac=null;var aa=0;var ah=false;for(var ae=0;ae<af.length;ae++){var ab=R.readability(ag,af[ae]);var ad=ab.brightness>125&&ab.color>500;var Z=3*(ab.brightness/125)+(ab.color/500);if((ad&&!ah)||(ad&&ah&&Z>aa)||((!ad)&&(!ah)&&Z>aa)){ah=ad;aa=Z;ac=R(af[ae])}}return ac};var L=R.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};var Y=R.hexNames=y(L);function y(ab){var aa={};for(var Z in ab){if(ab.hasOwnProperty(Z)){aa[ab[Z]]=Z}}return aa}function K(Z){Z=parseFloat(Z);if(isNaN(Z)||Z<0||Z>1){Z=1}return Z}function W(ab,Z){if(O(ab)){ab="100%"}var aa=X(ab);ab=B(Z,E(0,parseFloat(ab)));if(aa){ab=parseInt(ab*Z,10)/100}if((w.abs(ab-Z)<0.000001)){return 1}return(ab%Z)/parseFloat(Z)}function P(Z){return B(1,E(0,Z))}function V(Z){return parseInt(Z,16)}function O(Z){return typeof Z=="string"&&Z.indexOf(".")!=-1&&parseFloat(Z)===1}function X(Z){return typeof Z==="string"&&Z.indexOf("%")!=-1}function z(Z){return Z.length==1?"0"+Z:""+Z}function A(Z){if(Z<=1){Z=(Z*100)+"%"}return Z}var x=(function(){var ad="[-\\+]?\\d+%?";var ac="[-\\+]?\\d*\\.\\d+%?";var Z="(?:"+ac+")|(?:"+ad+")";var ab="[\\s|\\(]+("+Z+")[,|\\s]+("+Z+")[,|\\s]+("+Z+")\\s*\\)?";var aa="[\\s|\\(]+("+Z+")[,|\\s]+("+Z+")[,|\\s]+("+Z+")[,|\\s]+("+Z+")\\s*\\)?";return{rgb:new RegExp("rgb"+ab),rgba:new RegExp("rgba"+aa),hsl:new RegExp("hsl"+ab),hsla:new RegExp("hsla"+aa),hsv:new RegExp("hsv"+ab),hex3:/^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}})();function C(aa){aa=aa.replace(N,"").replace(H,"").toLowerCase();var Z=false;if(L[aa]){aa=L[aa];Z=true}else{if(aa=="transparent"){return{r:0,g:0,b:0,a:0,format:"name"}}}var ab;if((ab=x.rgb.exec(aa))){return{r:ab[1],g:ab[2],b:ab[3]}}if((ab=x.rgba.exec(aa))){return{r:ab[1],g:ab[2],b:ab[3],a:ab[4]}}if((ab=x.hsl.exec(aa))){return{h:ab[1],s:ab[2],l:ab[3]}}if((ab=x.hsla.exec(aa))){return{h:ab[1],s:ab[2],l:ab[3],a:ab[4]}
}if((ab=x.hsv.exec(aa))){return{h:ab[1],s:ab[2],v:ab[3]}}if((ab=x.hex6.exec(aa))){return{r:V(ab[1]),g:V(ab[2]),b:V(ab[3]),format:Z?"name":"hex"}}if((ab=x.hex3.exec(aa))){return{r:V(ab[1]+""+ab[1]),g:V(ab[2]+""+ab[2]),b:V(ab[3]+""+ab[3]),format:Z?"name":"hex"}}return false}i.tinycolor=R})();e(function(){if(e.fn.spectrum.load){e.fn.spectrum.processNativeColorInputs()}})})(window,jQuery);