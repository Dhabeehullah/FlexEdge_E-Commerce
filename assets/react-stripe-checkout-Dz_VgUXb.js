import{r as y}from"./react-CJP9YpS5.js";import{p as w}from"./prop-types-BKNjMPK8.js";var m={};Object.defineProperty(m,"__esModule",{value:!0});var d=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(r[e]=a[e])}return r},C=function(){function r(t,a){for(var e=0;e<a.length;e++){var o=a[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,a,e){return a&&r(t.prototype,a),e&&r(t,e),t}}(),M=y,s=D(M),O=w,n=D(O);function D(r){return r&&r.__esModule?r:{default:r}}function g(r,t,a){return t in r?Object.defineProperty(r,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[t]=a,r}function R(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function L(r,t){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:r}function P(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(r,t):r.__proto__=t)}var p=!1,b=!1,S=!1,h=function(r){P(t,r);function t(a){R(this,t);var e=L(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,a));return e.onScriptLoaded=function(){t.stripeHandler||(t.stripeHandler=StripeCheckout.configure({key:e.props.stripeKey}),e.hasPendingClick&&e.showStripeDialog())},e.onScriptError=function(){for(var o=arguments.length,i=Array(o),l=0;l<o;l++)i[l]=arguments[l];e.hideLoadingDialog(),e.props.onScriptError&&e.props.onScriptError.apply(e,i)},e.onClosed=function(){for(var o=arguments.length,i=Array(o),l=0;l<o;l++)i[l]=arguments[l];e._isMounted&&e.setState({open:!1}),e.props.closed&&e.props.closed.apply(e,i)},e.onOpened=function(){for(var o=arguments.length,i=Array(o),l=0;l<o;l++)i[l]=arguments[l];e.setState({open:!0}),e.props.opened&&e.props.opened.apply(e,i)},e.getConfig=function(){return["token","image","name","description","amount","locale","currency","panelLabel","zipCode","shippingAddress","billingAddress","email","allowRememberMe","bitcoin","alipay","alipayReusable"].reduce(function(o,i){return d({},o,e.props.hasOwnProperty(i)&&g({},i,e.props[i]))},{opened:e.onOpened,closed:e.onClosed})},e.onClick=function(){if(!e.props.disabled)if(S)try{throw new Error("Tried to call onClick, but StripeCheckout failed to load")}catch{}else t.stripeHandler?e.showStripeDialog():(e.showLoadingDialog(),e.hasPendingClick=!0)},e.handleOnMouseDown=function(){e.setState({buttonActive:!0})},e.handleOnMouseUp=function(){e.setState({buttonActive:!1})},e.state={open:!1,buttonActive:!1},e}return C(t,[{key:"componentDidMount",value:function(){var e=this;if(this._isMounted=!0,!b&&!p){p=!0;var o=document.createElement("script");typeof this.props.onScriptTagCreated=="function"&&this.props.onScriptTagCreated(o),o.src="https://checkout.stripe.com/checkout.js",o.async=1,this.loadPromise=function(){var i=!1,l=new Promise(function(c,u){o.onload=function(){b=!0,p=!1,c(),e.onScriptLoaded()},o.onerror=function(f){S=!0,p=!1,u(f),e.onScriptError(f)}}),v=new Promise(function(c,u){l.then(function(){return i?u({isCanceled:!0}):c()}),l.catch(function(f){return u(i?{isCanceled:!0}:f)})});return{promise:v,cancel:function(){i=!0}}}(),this.loadPromise.promise.then(this.onScriptLoaded).catch(this.onScriptError),document.body.appendChild(o)}}},{key:"componentDidUpdate",value:function(){p||this.updateStripeHandler()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.loadPromise&&this.loadPromise.cancel(),t.stripeHandler&&this.state.open&&t.stripeHandler.close()}},{key:"updateStripeHandler",value:function(){(!t.stripeHandler||this.props.reconfigureOnUpdate)&&(t.stripeHandler=StripeCheckout.configure({key:this.props.stripeKey}))}},{key:"showLoadingDialog",value:function(){if(this.props.showLoadingDialog){for(var e=arguments.length,o=Array(e),i=0;i<e;i++)o[i]=arguments[i];this.props.showLoadingDialog.apply(this,o)}}},{key:"hideLoadingDialog",value:function(){if(this.props.hideLoadingDialog){for(var e=arguments.length,o=Array(e),i=0;i<e;i++)o[i]=arguments[i];this.props.hideLoadingDialog.apply(this,o)}}},{key:"showStripeDialog",value:function(){this.hideLoadingDialog(),t.stripeHandler.open(this.getConfig())}},{key:"renderDefaultStripeButton",value:function(){return s.default.createElement("button",d({},g({},this.props.triggerEvent,this.onClick),{className:this.props.className,onMouseDown:this.handleOnMouseDown,onFocus:this.handleOnMouseDown,onMouseUp:this.handleOnMouseUp,onMouseOut:this.handleOnMouseUp,onBlur:this.handleOnMouseUp,style:d({},{overflow:"hidden",display:"inline-block",background:"linear-gradient(#28a0e5,#015e94)",border:0,padding:1,textDecoration:"none",borderRadius:5,boxShadow:"0 1px 0 rgba(0,0,0,0.2)",cursor:"pointer",visibility:"visible",userSelect:"none"},this.state.buttonActive&&{background:"#005d93"},this.props.style)}),s.default.createElement("span",{style:d({},{backgroundImage:"linear-gradient(#7dc5ee,#008cdd 85%,#30a2e4)",fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif',fontSize:14,position:"relative",padding:"0 12px",display:"block",height:30,lineHeight:"30px",color:"#fff",fontWeight:"bold",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.25)",textShadow:"0 -1px 0 rgba(0,0,0,0.25)",borderRadius:4},this.state.buttonActive&&{color:"#eee",boxShadow:"inset 0 1px 0 rgba(0,0,0,0.1)",backgroundImage:"linear-gradient(#008cdd,#008cdd 85%,#239adf)"},this.props.textStyle)},this.props.label))}},{key:"renderDisabledButton",value:function(){return s.default.createElement("button",{disabled:!0,style:{background:"rgba(0,0,0,0.2)",overflow:"hidden",display:"inline-block",border:0,padding:1,textDecoration:"none",borderRadius:5,userSelect:"none"}},s.default.createElement("span",{style:{boxShadow:"inset 0 1px 0 rgba(255,255,255,0.25)",fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif',fontSize:14,position:"relative",padding:"0 12px",display:"block",height:30,lineHeight:"30px",borderRadius:4,color:"#999",background:"#f8f9fa",textShadow:"0 1px 0 rgba(255,255,255,0.5)"}},this.props.label))}},{key:"render",value:function(){this.props.desktopShowModal===!0&&!this.state.open?this.onClick():this.props.desktopShowModal===!1&&this.state.open&&t.stripeHandler.close();var e=this.props.ComponentClass;return this.props.children?s.default.createElement(e,d({},g({},this.props.triggerEvent,this.onClick),{children:this.props.children})):this.props.disabled?this.renderDisabledButton():this.renderDefaultStripeButton()}}]),t}(s.default.Component);h.defaultProps={className:"StripeCheckout",label:"Pay With Card",locale:"auto",ComponentClass:"span",reconfigureOnUpdate:!1,triggerEvent:"onClick"};h.propTypes={desktopShowModal:n.default.bool,triggerEvent:n.default.oneOf(["onClick","onTouchTap","onTouchStart"]),label:n.default.string,style:n.default.object,textStyle:n.default.object,disabled:n.default.bool,ComponentClass:n.default.string,showLoadingDialog:n.default.func,hideLoadingDialog:n.default.func,onScriptError:n.default.func,onScriptTagCreated:n.default.func,reconfigureOnUpdate:n.default.bool,stripeKey:n.default.string.isRequired,token:n.default.func.isRequired,name:n.default.string,description:n.default.string,image:n.default.string,amount:n.default.number,locale:n.default.oneOf(["auto","zh","da","nl","en","fr","de","it","ja","no","es","sv"]),currency:n.default.oneOf(["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BIF","BMD","BND","BOB","BRL","BSD","BWP","BZD","CAD","CDF","CHF","CLP","CNY","COP","CRC","CVE","CZK","DJF","DKK","DOP","DZD","EEK","EGP","ETB","EUR","FJD","FKP","GBP","GEL","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","ISK","JMD","JPY","KES","KGS","KHR","KMF","KRW","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","MAD","MDL","MGA","MKD","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SEK","SGD","SHP","SLL","SOS","SRD","STD","SVC","SZL","THB","TJS","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","UYU","UZS","VND","VUV","WST","XAF","XCD","XOF","XPF","YER","ZAR","ZMW"]),panelLabel:n.default.string,zipCode:n.default.bool,billingAddress:n.default.bool,shippingAddress:n.default.bool,email:n.default.string,allowRememberMe:n.default.bool,bitcoin:n.default.bool,alipay:n.default.oneOf(["auto",!0,!1]),alipayReusable:n.default.bool,opened:n.default.func,closed:n.default.func};h._isMounted=!1;var T=m.default=h;export{T as _};