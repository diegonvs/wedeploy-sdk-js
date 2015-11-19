(function(){this.launchpad=this.launchpad||{},this.launchpadNamed=this.launchpadNamed||{};var e={};e["typeof"]=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},e.classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),e.inherits=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},e.possibleConstructorReturn=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},e.toConsumableArray=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},function(){var t=function(){function t(){e.classCallCheck(this,t)}return e.createClass(t,null,[{key:"abstractMethod",value:function(){throw Error("Unimplemented abstract method")}},{key:"collectSuperClassesProperty",value:function(e,t){for(var n=[e[t]];e.__proto__&&!e.__proto__.isPrototypeOf(Function);)e=e.__proto__,n.push(e[t]);return n}},{key:"getFunctionName",value:function(e){if(!e.name){var t=e.toString();e.name=t.substring(9,t.indexOf("("))}return e.name}},{key:"getUid",value:function(e){return e?e[t.UID_PROPERTY]||(e[t.UID_PROPERTY]=t.uniqueIdCounter_++):t.uniqueIdCounter_++}},{key:"identityFunction",value:function(e){return e}},{key:"isBoolean",value:function(e){return"boolean"==typeof e}},{key:"isDef",value:function(e){return void 0!==e}},{key:"isDefAndNotNull",value:function(e){return t.isDef(e)&&!t.isNull(e)}},{key:"isDocument",value:function(t){return t&&"object"===("undefined"==typeof t?"undefined":e["typeof"](t))&&9===t.nodeType}},{key:"isElement",value:function(t){return t&&"object"===("undefined"==typeof t?"undefined":e["typeof"](t))&&1===t.nodeType}},{key:"isFunction",value:function(e){return"function"==typeof e}},{key:"isNull",value:function(e){return null===e}},{key:"isNumber",value:function(e){return"number"==typeof e}},{key:"isWindow",value:function(e){return null!==e&&e===e.window}},{key:"isObject",value:function(t){var n="undefined"==typeof t?"undefined":e["typeof"](t);return"object"===n&&null!==t||"function"===n}},{key:"isString",value:function(e){return"string"==typeof e}},{key:"mergeSuperClassesProperty",value:function(e,n,r){var a=n+"_MERGED";if(e.hasOwnProperty(a))return!1;var i=t.collectSuperClassesProperty(e,n);return r&&(i=r(i)),e[a]=i,!0}},{key:"nullFunction",value:function(){}}]),t}();t.UID_PROPERTY="core_"+(1e9*Math.random()>>>0),t.uniqueIdCounter_=1,this.launchpad.core=t}.call(this),function(){var t=function(){function t(){e.classCallCheck(this,t)}return e.createClass(t,[{key:"send",value:function(){}}]),t}();this.launchpad.Transport=t}.call(this),function(){var t=function(){function t(){e.classCallCheck(this,t)}return e.createClass(t,null,[{key:"addParametersToUrlQueryString",value:function(e,t){var n="";return t.names().forEach(function(e){t.getAll(e).forEach(function(t){n+=e+"="+encodeURIComponent(t)+"&"})}),n=n.slice(0,-1),n&&(e+=e.indexOf("?")>-1?"&":"?",e+=n),e}},{key:"parseUrl",value:function(e){var t,n,r,a=e.indexOf("//");a>-1&&(e=e.substring(a+2));var i=e.indexOf("/");-1===i&&(e+="/",i=e.length-1),t=e.substring(0,i),n=e.substring(i);var u=n.indexOf("?");return u>-1?(r=n.substring(u,n.length),n=n.substring(0,u)):r="",[t,n,r]}},{key:"joinPaths",value:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;t>r;r++)n[r-1]=arguments[r];return"/"===e.charAt(e.length-1)&&(e=e.substring(0,e.length-1)),n=n.map(function(e){return"/"===e.charAt(0)?e.substring(1):e}),[e].concat(n).join("/").replace(/\/$/,"")}},{key:"parseResponseHeaders",value:function(e){var t=[];if(!e)return t;for(var n=e.split("\r\n"),r=0;r<n.length;r++){var a=n[r].indexOf(": ");if(a>0){var i=n[r].substring(0,a),u=n[r].substring(a+2);t.push({name:i,value:u})}}return t}}]),t}();this.launchpad.Util=t}.call(this),function(){var t=function(){function t(){e.classCallCheck(this,t),this.disposed_=!1}return e.createClass(t,[{key:"dispose",value:function(){this.disposed_||(this.disposeInternal(),this.disposed_=!0)}},{key:"disposeInternal",value:function(){}},{key:"isDisposed",value:function(){return this.disposed_}}]),t}();this.launchpad.Disposable=t}.call(this),function(){var t=this.launchpad.Disposable,n=function(t){function n(){e.classCallCheck(this,n);var t=e.possibleConstructorReturn(this,Object.getPrototypeOf(n).call(this));return t.keys={},t.values={},t}return e.inherits(n,t),e.createClass(n,[{key:"add",value:function(e,t){return this.keys[e.toLowerCase()]=e,this.values[e.toLowerCase()]=this.values[e.toLowerCase()]||[],this.values[e.toLowerCase()].push(t),this}},{key:"clear",value:function(){return this.keys={},this.values={},this}},{key:"contains",value:function(e){return e.toLowerCase()in this.values}},{key:"disposeInternal",value:function(){this.values=null}},{key:"get",value:function(e){var t=this.values[e.toLowerCase()];return t?t[0]:void 0}},{key:"getAll",value:function(e){return this.values[e.toLowerCase()]}},{key:"isEmpty",value:function(){return 0===this.size()}},{key:"names",value:function(){var e=this;return Object.keys(this.values).map(function(t){return e.keys[t]})}},{key:"remove",value:function(e){return delete this.keys[e.toLowerCase()],delete this.values[e.toLowerCase()],this}},{key:"set",value:function(e,t){return this.keys[e.toLowerCase()]=e,this.values[e.toLowerCase()]=[t],this}},{key:"size",value:function(){return this.names().length}},{key:"toString",value:function(){return JSON.stringify(this.values)}}]),n}(t);this.launchpad.MultiMap=n}.call(this),function(){var t=this.launchpad.core,n=this.launchpad.MultiMap,r=function(){function r(){e.classCallCheck(this,r),this.headers_=new n}return e.createClass(r,[{key:"body",value:function(e){return t.isDef(e)?(this.body_=e,this):this.body_}},{key:"header",value:function(e,t){if(2!==arguments.length)throw new Error("Invalid arguments");return this.headers_.set(e,t),this}},{key:"headers",value:function(e){return t.isDef(e)?(e instanceof n?this.headers_=e:this.headers_.values=e,e):this.headers_}},{key:"removeBody",value:function(){this.body_=void 0}}]),r}();this.launchpad.ClientMessage=r}.call(this),function(){var t=this.launchpad.core,n=this.launchpad.ClientMessage,r=function(n){function r(t){e.classCallCheck(this,r);var n=e.possibleConstructorReturn(this,Object.getPrototypeOf(r).call(this));if(!t)throw new Error("Can't create response without request");return n.clientRequest_=t,n}return e.inherits(r,n),e.createClass(r,[{key:"request",value:function(){return this.clientRequest_}},{key:"statusCode",value:function(e){return t.isDef(e)?(this.statusCode_=e,this):this.statusCode_}},{key:"statusText",value:function(e){return t.isDef(e)?(this.statusText_=e,this):this.statusText_}},{key:"succeeded",value:function(){return this.statusCode()>=200&&this.statusCode()<=399}}]),r}(n);this.launchpad.ClientResponse=r}.call(this),function(){var t=this.launchpad.core,n=function(){};n.prototype.then=function(){},n.IMPLEMENTED_BY_PROP="$goog_Thenable",n.addImplementation=function(e){e.prototype.then=e.prototype.then,e.prototype.$goog_Thenable=!0},n.isImplementedBy=function(e){if(!e)return!1;try{return!!e.$goog_Thenable}catch(t){return!1}};var r=function(e){var t=Array.prototype.slice.call(arguments,1);return function(){var n=t.slice();return n.push.apply(n,arguments),e.apply(this,n)}},a={};a.throwException=function(e){a.nextTick(function(){throw e})},a.run=function(e,t){a.run.workQueueScheduled_||(a.nextTick(a.run.processWorkQueue),a.run.workQueueScheduled_=!0),a.run.workQueue_.push(new a.run.WorkItem_(e,t))},a.run.workQueueScheduled_=!1,a.run.workQueue_=[],a.run.processWorkQueue=function(){for(;a.run.workQueue_.length;){var e=a.run.workQueue_;a.run.workQueue_=[];for(var t=0;t<e.length;t++){var n=e[t];try{n.fn.call(n.scope)}catch(r){a.throwException(r)}}}a.run.workQueueScheduled_=!1},a.run.WorkItem_=function(e,t){this.fn=e,this.scope=t},a.nextTick=function(e,n){var r=e;return n&&(r=e.bind(n)),r=a.nextTick.wrapCallback_(r),t.isFunction(window.setImmediate)?void window.setImmediate(r):(a.nextTick.setImmediate_||(a.nextTick.setImmediate_=a.nextTick.getSetImmediateEmulator_()),void a.nextTick.setImmediate_(r))},a.nextTick.setImmediate_=null,a.nextTick.getSetImmediateEmulator_=function(){var e=window.MessageChannel;if("undefined"==typeof e&&"undefined"!=typeof window&&window.postMessage&&window.addEventListener&&(e=function(){var e=document.createElement("iframe");e.style.display="none",e.src="",document.documentElement.appendChild(e);var t=e.contentWindow,n=t.document;n.open(),n.write(""),n.close();var r="callImmediate"+Math.random(),a=t.location.protocol+"//"+t.location.host,i=function(e){(e.origin===a||e.data===r)&&this.port1.onmessage()}.bind(this);t.addEventListener("message",i,!1),this.port1={},this.port2={postMessage:function(){t.postMessage(r,a)}}}),"undefined"!=typeof e){var t=new e,n={},r=n;return t.port1.onmessage=function(){n=n.next;var e=n.cb;n.cb=null,e()},function(e){r.next={cb:e},r=r.next,t.port2.postMessage(0)}}return"undefined"!=typeof document&&"onreadystatechange"in document.createElement("script")?function(e){var t=document.createElement("script");t.onreadystatechange=function(){t.onreadystatechange=null,t.parentNode.removeChild(t),t=null,e(),e=null},document.documentElement.appendChild(t)}:function(e){setTimeout(e,0)}},a.nextTick.wrapCallback_=function(e){return e};var i=function u(e,t){this.state_=u.State_.PENDING,this.result_=void 0,this.parent_=null,this.callbackEntries_=null,this.executing_=!1,u.UNHANDLED_REJECTION_DELAY>0?this.unhandledRejectionId_=0:0===u.UNHANDLED_REJECTION_DELAY&&(this.hadUnhandledRejection_=!1);try{var n=this;e.call(t,function(e){n.resolve_(u.State_.FULFILLED,e)},function(e){n.resolve_(u.State_.REJECTED,e)})}catch(r){this.resolve_(u.State_.REJECTED,r)}};i.UNHANDLED_REJECTION_DELAY=0,i.State_={PENDING:0,BLOCKED:1,FULFILLED:2,REJECTED:3},i.CallbackEntry_=null,i.resolve=function(e){return new i(function(t){t(e)})},i.reject=function(e){return new i(function(t,n){n(e)})},i.race=function(e){return new i(function(t,n){e.length||t(void 0);for(var r,a=0;r=e[a];a++)r.then(t,n)})},i.all=function(e){return new i(function(t,n){var a=e.length,i=[];if(!a)return void t(i);for(var u,o=function(e,n){a--,i[e]=n,0===a&&t(i)},s=function(e){n(e)},l=0;u=e[l];l++)u.then(r(o,l),s)})},i.firstFulfilled=function(e){return new i(function(t,n){var a=e.length,i=[];if(!a)return void t(void 0);for(var u,o=function(e){t(e)},s=function(e,t){a--,i[e]=t,0===a&&n(i)},l=0;u=e[l];l++)u.then(o,r(s,l))})},i.prototype.then=function(e,n,r){return this.addChildPromise_(t.isFunction(e)?e:null,t.isFunction(n)?n:null,r)},n.addImplementation(i),i.prototype.thenAlways=function(e,t){var n=function(){try{e.call(t)}catch(n){i.handleRejection_.call(null,n)}};return this.addCallbackEntry_({child:null,onRejected:n,onFulfilled:n}),this},i.prototype.thenCatch=function(e,t){return this.addChildPromise_(null,e,t)},i.prototype["catch"]=i.prototype.thenCatch,i.prototype.cancel=function(e){this.state_===i.State_.PENDING&&a.run(function(){var t=new i.CancellationError(e);this.cancelInternal_(t)},this)},i.prototype.cancelInternal_=function(e){this.state_===i.State_.PENDING&&(this.parent_?this.parent_.cancelChild_(this,e):this.resolve_(i.State_.REJECTED,e))},i.prototype.cancelChild_=function(e,t){if(this.callbackEntries_){for(var n,r=0,a=-1,u=0;n=this.callbackEntries_[u];u++){var o=n.child;if(o&&(r++,o===e&&(a=u),a>=0&&r>1))break}if(a>=0)if(this.state_===i.State_.PENDING&&1===r)this.cancelInternal_(t);else{var s=this.callbackEntries_.splice(a,1)[0];this.executeCallback_(s,i.State_.REJECTED,t)}}},i.prototype.addCallbackEntry_=function(e){this.callbackEntries_&&this.callbackEntries_.length||this.state_!==i.State_.FULFILLED&&this.state_!==i.State_.REJECTED||this.scheduleCallbacks_(),this.callbackEntries_||(this.callbackEntries_=[]),this.callbackEntries_.push(e)},i.prototype.addChildPromise_=function(e,n,r){var a={child:null,onFulfilled:null,onRejected:null};return a.child=new i(function(u,o){a.onFulfilled=e?function(t){try{var n=e.call(r,t);u(n)}catch(a){o(a)}}:u,a.onRejected=n?function(e){try{var a=n.call(r,e);!t.isDef(a)&&e instanceof i.CancellationError?o(e):u(a)}catch(s){o(s)}}:o}),a.child.parent_=this,this.addCallbackEntry_(a),a.child},i.prototype.unblockAndFulfill_=function(e){if(this.state_!==i.State_.BLOCKED)throw new Error("CancellablePromise is not blocked.");this.state_=i.State_.PENDING,this.resolve_(i.State_.FULFILLED,e)},i.prototype.unblockAndReject_=function(e){if(this.state_!==i.State_.BLOCKED)throw new Error("CancellablePromise is not blocked.");this.state_=i.State_.PENDING,this.resolve_(i.State_.REJECTED,e)},i.prototype.resolve_=function(e,r){if(this.state_===i.State_.PENDING){if(this===r)e=i.State_.REJECTED,r=new TypeError("CancellablePromise cannot resolve to itself");else{if(n.isImplementedBy(r))return r=r,this.state_=i.State_.BLOCKED,void r.then(this.unblockAndFulfill_,this.unblockAndReject_,this);if(t.isObject(r))try{var a=r.then;if(t.isFunction(a))return void this.tryThen_(r,a)}catch(u){e=i.State_.REJECTED,r=u}}this.result_=r,this.state_=e,this.scheduleCallbacks_(),e!==i.State_.REJECTED||r instanceof i.CancellationError||i.addUnhandledRejection_(this,r)}},i.prototype.tryThen_=function(e,t){this.state_=i.State_.BLOCKED;var n=this,r=!1,a=function(e){r||(r=!0,n.unblockAndFulfill_(e))},u=function(e){r||(r=!0,n.unblockAndReject_(e))};try{t.call(e,a,u)}catch(o){u(o)}},i.prototype.scheduleCallbacks_=function(){this.executing_||(this.executing_=!0,a.run(this.executeCallbacks_,this))},i.prototype.executeCallbacks_=function(){for(;this.callbackEntries_&&this.callbackEntries_.length;){var e=this.callbackEntries_;this.callbackEntries_=[];for(var t=0;t<e.length;t++)this.executeCallback_(e[t],this.state_,this.result_)}this.executing_=!1},i.prototype.executeCallback_=function(e,t,n){t===i.State_.FULFILLED?e.onFulfilled(n):(this.removeUnhandledRejection_(),e.onRejected(n))},i.prototype.removeUnhandledRejection_=function(){var e;if(i.UNHANDLED_REJECTION_DELAY>0)for(e=this;e&&e.unhandledRejectionId_;e=e.parent_)clearTimeout(e.unhandledRejectionId_),e.unhandledRejectionId_=0;else if(0===i.UNHANDLED_REJECTION_DELAY)for(e=this;e&&e.hadUnhandledRejection_;e=e.parent_)e.hadUnhandledRejection_=!1},i.addUnhandledRejection_=function(e,t){i.UNHANDLED_REJECTION_DELAY>0?e.unhandledRejectionId_=setTimeout(function(){i.handleRejection_.call(null,t)},i.UNHANDLED_REJECTION_DELAY):0===i.UNHANDLED_REJECTION_DELAY&&(e.hadUnhandledRejection_=!0,a.run(function(){e.hadUnhandledRejection_&&i.handleRejection_.call(null,t)}))},i.handleRejection_=a.throwException,i.setUnhandledRejectionHandler=function(e){i.handleRejection_=e},i.CancellationError=function(t){function n(t){e.classCallCheck(this,n);var r=e.possibleConstructorReturn(this,Object.getPrototypeOf(n).call(this,t));return t&&(r.message=t),r}return e.inherits(n,t),n}(Error),i.CancellationError.prototype.name="cancel","undefined"==typeof window.Promise&&(window.Promise=i),this.launchpadNamed.Promise={},this.launchpadNamed.Promise.CancellablePromise=i,this.launchpadNamed.Promise.async=a}.call(this),function(){var t=this.launchpad.core,n=this.launchpad.Transport,r=this.launchpad.Util,a=this.launchpad.ClientResponse,i=this.launchpadNamed.Promise.CancellablePromise,u=function(n){function u(){return e.classCallCheck(this,u),e.possibleConstructorReturn(this,Object.getPrototypeOf(u).apply(this,arguments))}return e.inherits(u,n),e.createClass(u,[{key:"send",value:function(e){var t=this.request(e.url(),e.method(),e.body(),e.headers(),e.params(),null,!1);return t.then(function(t){var n=new a(e);return n.body(t.responseText),n.statusCode(t.status),n.statusText(t.statusText),r.parseResponseHeaders(t.getAllResponseHeaders()).forEach(function(e){n.header(e.name,e.value)}),n})}},{key:"request",value:function o(e,n,a,u,s,l,c){var o=new XMLHttpRequest,h=new i(function(e,t){o.onload=function(){return o.aborted?void o.onerror():void e(o)},o.onerror=function(){var e=new Error("Request error");e.request=o,t(e)}}).thenCatch(function(e){throw o.abort(),e}).thenAlways(function(){clearTimeout(f)});if(s&&(e=r.addParametersToUrlQueryString(e,s)),o.open(n,e,!c),u&&u.names().forEach(function(e){o.setRequestHeader(e,u.getAll(e).join(", "))}),o.send(t.isDef(a)?a:null),t.isDefAndNotNull(l))var f=setTimeout(function(){h.cancel("Request timeout")},l);return h}}]),u}(n);this.launchpad.AjaxTransport=u}.call(this),function(){var t=this.launchpad.core,n=function(){function n(r){var a=arguments.length<=1||void 0===arguments[1]?null:arguments[1];e.classCallCheck(this,n),this.token_=t.isString(a)?null:r,this.username_=t.isString(a)?r:null,this.password_=a}return e.createClass(n,[{key:"hasPassword",value:function(){return null!==this.password_}},{key:"hasToken",value:function(){return null!==this.token_}},{key:"hasUsername",value:function(){return null!==this.username_}},{key:"password",value:function(){return this.password_}},{key:"token",value:function(){return this.token_}},{key:"username",value:function(){return this.username_}}],[{key:"create",value:function(e,t){return new n(e,t)}}]),n}();this.launchpad.Auth=n}.call(this),function(){var t=this.launchpad.core,n=this.launchpad.ClientMessage,r=this.launchpad.MultiMap,a=function(n){function a(){e.classCallCheck(this,a);var t=e.possibleConstructorReturn(this,Object.getPrototypeOf(a).call(this));return t.params_=new r,t}return e.inherits(a,n),e.createClass(a,[{key:"method",value:function(e){return t.isDef(e)?(this.method_=e,this):this.method_||a.DEFAULT_METHOD}},{key:"param",value:function(e,t){if(2!==arguments.length)throw new Error("Invalid arguments");return this.params_.set(e,t),this}},{key:"params",value:function(e){return t.isDef(e)?(e instanceof r?this.params_=e:this.params_.values=e,e):this.params_}},{key:"url",value:function(e){return t.isDef(e)?(this.url_=e,this):this.url_}}]),a}(n);a.DEFAULT_METHOD="GET",this.launchpad.ClientRequest=a}.call(this),function(){var t=function(){function t(){e.classCallCheck(this,t),this.body_={}}return e.createClass(t,[{key:"body",value:function(){return this.body_}},{key:"toString",value:function(){return JSON.stringify(this.body())}}],[{key:"toBody",value:function(e){return e instanceof t?e.body():e}}]),t}();this.launchpad.Embodied=t}.call(this),function(){var t=this.launchpad.core,n=this.launchpad.Embodied,r=function(){function r(a,i,u){e.classCallCheck(this,r);var o={operator:t.isDef(u)?i:"="},s=t.isDef(u)?u:i;t.isDefAndNotNull(s)&&(s instanceof n&&(s=s.body()),o.value=s),this.createBody_(a,o)}return e.createClass(r,[{key:"add",value:function(e,t){t?this.addArrayOperator_(e,t):this.createBody_(e,this.body_)}},{key:"addArrayOperator_",value:function(e,t){this.body_[e]instanceof Array||this.createBody_(e,[this.body_]),this.body_[e].push(t.body())}},{key:"addMany",value:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;t>r;r++)n[r-1]=arguments[r];for(var a=0;a<n.length;a++)this.add(e,n[a])}},{key:"createBody_",value:function(e,t){this.body_={},this.body_[e]=t}},{key:"getObject",value:function(){return this.body_}}]),r}();this.launchpad.FilterBody=r}.call(this),function(){var t=this.launchpad.Embodied,n=function(){function t(){e.classCallCheck(this,t)}return e.createClass(t,null,[{key:"boundingBox",value:function(e,n){return new t.BoundingBox(e,n)}},{key:"circle",value:function(e,n){return new t.Circle(e,n)}},{key:"line",value:function(){for(var e=arguments.length,n=Array(e),r=0;e>r;r++)n[r]=arguments[r];return new(Function.prototype.bind.apply(t.Line,[null].concat(n)))}},{key:"point",value:function(e,n){return new t.Point(e,n)}},{key:"polygon",value:function(){for(var e=arguments.length,n=Array(e),r=0;e>r;r++)n[r]=arguments[r];return new(Function.prototype.bind.apply(t.Polygon,[null].concat(n)))}}]),t}(),r=function(t){function n(t,r){e.classCallCheck(this,n);var a=e.possibleConstructorReturn(this,Object.getPrototypeOf(n).call(this));return a.body_=[t,r],a}return e.inherits(n,t),n}(t);n.Point=r;var a=function(n){function r(){e.classCallCheck(this,r);for(var n=e.possibleConstructorReturn(this,Object.getPrototypeOf(r).call(this)),a=arguments.length,i=Array(a),u=0;a>u;u++)i[u]=arguments[u];return n.body_={type:"linestring",coordinates:i.map(function(e){return t.toBody(e)})},n}return e.inherits(r,n),r}(t);n.Line=a;var i=function(n){function r(n,a){e.classCallCheck(this,r);var i=e.possibleConstructorReturn(this,Object.getPrototypeOf(r).call(this));return i.body_={type:"envelope",coordinates:[t.toBody(n),t.toBody(a)]},i}return e.inherits(r,n),e.createClass(r,[{key:"getPoints",value:function(){return this.body_.coordinates}}]),r}(t);n.BoundingBox=i;var u=function(n){function r(n,a){e.classCallCheck(this,r);var i=e.possibleConstructorReturn(this,Object.getPrototypeOf(r).call(this));return i.body_={type:"circle",coordinates:t.toBody(n),radius:a},i}return e.inherits(r,n),e.createClass(r,[{key:"getCenter",value:function(){return this.body_.coordinates}},{key:"getRadius",value:function(){return this.body_.radius}}]),r}(t);n.Circle=u;var o=function(n){function r(){e.classCallCheck(this,r);var t=e.possibleConstructorReturn(this,Object.getPrototypeOf(r).call(this));return t.body_={type:"polygon",coordinates:[]},t.addCoordinates_.apply(t,arguments),t}return e.inherits(r,n),e.createClass(r,[{key:"addCoordinates_",value:function(){for(var e=arguments.length,n=Array(e),r=0;e>r;r++)n[r]=arguments[r];this.body_.coordinates.push(n.map(function(e){return t.toBody(e)}))}},{key:"hole",value:function(){return this.addCoordinates_.apply(this,arguments),this}}]),r}(t);n.Polygon=o,this.launchpad.Geo=n}.call(this),function(){var t=this.launchpad.core,n=this.launchpad.Embodied,r=function(n){function r(n,a){e.classCallCheck(this,r);var i=e.possibleConstructorReturn(this,Object.getPrototypeOf(r).call(this));return t.isDefAndNotNull(n)&&(i.body_.from=n),t.isDefAndNotNull(a)&&(i.body_.to=a),i}return e.inherits(r,n),e.createClass(r,null,[{key:"from",value:function(e){return new r(e)}},{key:"range",value:function(e,t){return new r(e,t)}},{key:"to",value:function(e){return new r(null,e)}}]),r}(n);this.launchpad.Range=r}.call(this),function(){var t=this.launchpad.core,n=this.launchpad.Embodied,r=this.launchpad.FilterBody,a=this.launchpad.Geo,i=this.launchpad.Range,u=function(u){function o(t,n,a){e.classCallCheck(this,o);var i=e.possibleConstructorReturn(this,Object.getPrototypeOf(o).call(this));return i.body_=new r(t,n,a),i}return e.inherits(o,u),e.createClass(o,[{key:"add",value:function(e,t,n,r){var a=t?o.toFilter(t,n,r):null;return this.body_.add(e,a),this}},{key:"addMany",value:function(e){for(var t,n=arguments.length,r=Array(n>1?n-1:0),a=1;n>a;a++)r[a-1]=arguments[a];return(t=this.body_).addMany.apply(t,[e].concat(r)),this}},{key:"and",value:function(e,t,n){return this.add("and",e,t,n)}},{key:"body",value:function(){return this.body_.getObject()}},{key:"or",value:function(e,t,n){return this.add("or",e,t,n)}}],[{key:"any",value:function(e){var t=Array.prototype.slice.call(arguments,1);return 1===t.length&&t[0]instanceof Array&&(t=t[0]),new o(e,"any",t)}},{key:"boundingBox",value:function(t,n,r){return n instanceof a.BoundingBox?o.polygon.apply(o,[t].concat(e.toConsumableArray(n.getPoints()))):o.polygon(t,n,r)}},{key:"distance",value:function(e,t,n){var r=t,u=n;return t instanceof a.Circle?(r=t.getCenter(),u=i.to(t.getRadius())):n instanceof i||(u=i.to(n)),o.distanceInternal_(e,r,u)}},{key:"distanceInternal_",value:function(e,t,r){var a={location:n.toBody(t)};return r=r.body(),r.from&&(a.min=r.from),r.to&&(a.max=r.to),o.field(e,"gd",a)}},{key:"equal",value:function(e,t){return new o(e,"=",t)}},{key:"exists",value:function(e){return o.field(e,"exists",null)}},{key:"fuzzy",value:function(e,t,n){return o.fuzzyInternal_("fuzzy",e,t,n)}},{key:"fuzzyInternal_",value:function(e,n,r,a){var i=t.isString(r),u={query:i?r:n},s=i?a:r;s&&(u.fuzziness=s);var l=i?n:o.ALL;return o.field(l,e,u)}},{key:"gt",value:function(e,t){return new o(e,">",t)}},{key:"gte",value:function(e,t){return new o(e,">=",t)}},{key:"match",value:function(e,n){var r=t.isString(n)?e:o.ALL,a=t.isString(n)?n:e;return o.field(r,"match",a)}},{key:"missing",value:function(e){return o.field(e,"missing",null)}},{key:"phrase",value:function(e,n){var r=t.isString(n)?e:o.ALL,a=t.isString(n)?n:e;return o.field(r,"phrase",a)}},{key:"polygon",value:function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),a=1;t>a;a++)r[a-1]=arguments[a];return r=r.map(function(e){return n.toBody(e)}),o.field(e,"gp",r)}},{key:"prefix",value:function(e,t){var n=t?e:o.ALL,r=t?t:e;return o.field(n,"prefix",r)}},{key:"range",value:function s(e,t,n){var s=t;return s instanceof i||(s=i.range(t,n)),o.field(e,"range",s)}},{key:"regex",value:function(e,t){return new o(e,"~",t)}},{key:"shape",value:function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),a=1;t>a;a++)r[a-1]=arguments[a];r=r.map(function(e){return n.toBody(e)});var i={type:"geometrycollection",geometries:r};return o.field(e,"gs",i)}},{key:"similar",value:function(e,n){var r=t.isString(n)?e:o.ALL,a={query:t.isString(n)?n:e};return o.field(r,"similar",a)}},{key:"lt",value:function(e,t){return new o(e,"<",t)}},{key:"lte",value:function(e,t){return new o(e,"<=",t)}},{key:"none",value:function(e){var t=Array.prototype.slice.call(arguments,1);return 1===t.length&&t[0]instanceof Array&&(t=t[0]),new o(e,"none",t)}},{key:"notEqual",value:function(e,t){return new o(e,"!=",t)}},{key:"not",value:function(e,t,n){return o.toFilter(e,t,n).add("not")}},{key:"field",value:function(e,t,n){return new o(e,t,n)}},{key:"toFilter",value:function(e,t,n){var r=e;return r instanceof o||(r=o.field(e,t,n)),r}}]),o}(n);u.ALL="*",this.launchpad.Filter=u}.call(this),function(){var t=this.launchpad.Embodied,n=this.launchpad.Range,r=function(){function t(n,r,a){e.classCallCheck(this,t),this.field_=n,this.operator_=r,this.value_=a}return e.createClass(t,[{key:"getField",value:function(){return this.field_}},{key:"getOperator",value:function(){return this.operator_}},{key:"getValue",value:function(){return this.value_}}],[{key:"avg",value:function(e){return t.field(e,"avg")}},{key:"count",value:function(e){return t.field(e,"count")}},{key:"distance",value:function(e,n){for(var r=arguments.length,a=Array(r>2?r-2:0),i=2;r>i;i++)a[i-2]=arguments[i];return new(Function.prototype.bind.apply(t.DistanceAggregation,[null].concat([e,n],a)))}},{key:"extendedStats",value:function(e){return t.field(e,"extendedStats")}},{key:"histogram",value:function(e,n){return new t(e,"histogram",n)}},{key:"max",value:function(e){return t.field(e,"max")}},{key:"min",value:function(e){return t.field(e,"min")}},{key:"missing",value:function(e){return t.field(e,"missing")}},{key:"field",value:function(e,n){return new t(e,n)}},{key:"range",value:function(e){for(var n=arguments.length,r=Array(n>1?n-1:0),a=1;n>a;a++)r[a-1]=arguments[a];return new(Function.prototype.bind.apply(t.RangeAggregation,[null].concat([e],r)))}},{key:"stats",value:function(e){return t.field(e,"stats")}},{key:"sum",value:function(e){return t.field(e,"sum")}},{key:"terms",value:function(e){return t.field(e,"terms")}}]),t}(),a=function(r){function a(n,r){e.classCallCheck(this,a);var i=e.possibleConstructorReturn(this,Object.getPrototypeOf(a).call(this,n,"geoDistance",{}));i.value_.location=t.toBody(r);for(var u=arguments.length,o=Array(u>2?u-2:0),s=2;u>s;s++)o[s-2]=arguments[s];return i.value_.ranges=o.map(function(e){return e.body()}),i}return e.inherits(a,r),e.createClass(a,[{key:"range",value:function i(e,t){var i=e;return i instanceof n||(i=n.range(e,t)),this.value_.ranges.push(i.body()),this}},{key:"unit",value:function(e){return this.value_.unit=e,this}}]),a}(r);r.DistanceAggregation=a;var i=function(t){function r(t){e.classCallCheck(this,r);for(var n=e.possibleConstructorReturn(this,Object.getPrototypeOf(r).call(this,t,"range")),a=arguments.length,i=Array(a>1?a-1:0),u=1;a>u;u++)i[u-1]=arguments[u];return n.value_=i.map(function(e){return e.body()}),n}return e.inherits(r,t),e.createClass(r,[{key:"range",value:function a(e,t){var a=e;return a instanceof n||(a=n.range(e,t)),this.value_.push(a.body()),this}}]),r}(r);r.RangeAggregation=i,this.launchpad.Aggregation=r}.call(this),function(){var t=this.launchpad.core,n=this.launchpad.Embodied,r=this.launchpad.Filter,a=this.launchpad.Aggregation,i=function(n){function i(){return e.classCallCheck(this,i),e.possibleConstructorReturn(this,Object.getPrototypeOf(i).apply(this,arguments))}return e.inherits(i,n),e.createClass(i,[{key:"aggregate",value:function(e,n,r){var i=n;i instanceof a||(i=a.field(n,r));var u=i.getField(),o={};return o[u]={name:e,operator:i.getOperator()},t.isDefAndNotNull(i.getValue())&&(o[u].value=i.getValue()),this.body_.aggregation||(this.body_.aggregation=[]),this.body_.aggregation.push(o),this}},{key:"count",value:function(){return this.type("count")}},{key:"fetch",value:function(){return this.type("fetch")}},{key:"filter",value:function u(e,t,n){var u=r.toFilter(e,t,n);return this.body_.filter||(this.body_.filter=[]),this.body_.filter.push(u.body()),this}},{key:"offset",value:function(e){return this.body_.offset=e,this}},{key:"highlight",value:function(e){return this.body_.highlight||(this.body_.highlight=[]),this.body_.highlight.push(e),this}},{key:"limit",value:function(e){return this.body_.limit=e,this}},{key:"search",value:function(e,t,n){var a=e;return n?a=r.field(e,t,n):t?a=r.match(e,t):a instanceof r||(a=r.match(e)),this.body_.search||(this.body_.search=[]),this.body_.search.push(a.body()),this}},{key:"sort",value:function(e,t){this.body_.sort||(this.body_.sort=[]);var n={};return n[e]=t||"asc",this.body_.sort.push(n),this}},{key:"type",value:function(e){return this.body_.type=e,this}}],[{key:"aggregate",value:function(e,t,n){return(new i).aggregate(e,t,n)}},{key:"count",value:function(){return(new i).type("count")}},{key:"fetch",value:function(){return(new i).type("fetch")}},{key:"filter",value:function(e,t,n){return(new i).filter(e,t,n)}},{key:"offset",value:function(e){return(new i).offset(e)}},{key:"highlight",value:function(e){return(new i).highlight(e)}},{key:"limit",value:function(e){return(new i).limit(e)}},{key:"search",value:function(e,t,n){return(new i).search(e,t,n)}},{key:"sort",value:function(e,t){return(new i).sort(e,t)}},{key:"type",value:function(e){return(new i).type(e)}}]),i}(n);this.launchpad.Query=i}.call(this),function(){var t=this.launchpad.AjaxTransport,n=function(){function n(){e.classCallCheck(this,n),this.transports={},this.transports[n.DEFAULT_TRANSPORT_NAME]=t}return e.createClass(n,[{key:"get",value:function(e){var t=this.transports[e];if(!t)throw new Error("Invalid transport name: "+e);try{return new t}catch(n){throw new Error("Can't create transport",n)}}},{key:"getDefault",value:function(){return this.get(n.DEFAULT_TRANSPORT_NAME)}}],[{key:"instance",value:function(){return n.instance_||(n.instance_=new n),n.instance_}}]),n}();n.DEFAULT_TRANSPORT_NAME="default",this.launchpad.TransportFactory=n}.call(this),function(){var t=this.launchpad.core,n=this.launchpad.Auth,r=this.launchpad.Embodied,a=this.launchpad.Filter,i=this.launchpad.Query,u=this.launchpad.TransportFactory,o=this.launchpad.ClientRequest,s=this.launchpad.Util,l=this.launchpad.MultiMap,c=function(){function c(t){for(var n=arguments.length,r=Array(n>1?n-1:0),a=1;n>a;a++)r[a-1]=arguments[a];if(e.classCallCheck(this,c),0===arguments.length)throw new Error("Invalid arguments, try `new Launchpad(baseUrl, url)`");this.auth_=null,this.body_=null,this.url_=s.joinPaths.apply(s,[t||""].concat(r)),
this.headers_=new l,this.params_=new l,this.header("Content-Type","application/json"),this.header("X-PJAX","true"),this.header("X-Requested-With","XMLHttpRequest")}return e.createClass(c,[{key:"aggregate",value:function(e,t,n){return this.getOrCreateQuery_().aggregate(e,t,n),this}},{key:"auth",value:function(e,t){return this.auth_=e,this.auth_ instanceof n||(this.auth_=n.create(e,t)),this}},{key:"body",value:function(e){return this.body_=e,this}},{key:"convertBodyToParams_",value:function(e,n){t.isString(n)?n={body:n}:n instanceof r&&(n=n.body()),Object.keys(n||{}).forEach(function(t){return e.param(t,n[t])})}},{key:"count",value:function(){return this.getOrCreateQuery_().type("count"),this}},{key:"createClientRequest_",value:function(e,n){var r=new o;return r.body(n||this.body_),t.isDefAndNotNull(r.body())||(this.query_?r.body(this.query_.body()):this.formData_&&r.body(this.formData_)),r.method(e),r.headers(this.headers()),r.params(this.params()),r.url(this.url()),this.encode(r),r}},{key:"decode",value:function(e){if(c.isContentTypeJson(e))try{e.body(JSON.parse(e.body()))}catch(t){}return e}},{key:"delete",value:function(e){return this.sendAsync("DELETE",e)}},{key:"encode",value:function(e){var n=e.body();return t.isElement(n)&&(n=new FormData(n),e.body(n)),n=this.wrapWithQuery_(n),"GET"===e.method()&&(this.convertBodyToParams_(e,n),e.removeBody(),n=null),n instanceof FormData?e.headers().remove("content-type"):n instanceof r?e.body(n.toString()):c.isContentTypeJson(e)&&e.body(JSON.stringify(e.body())),this.encodeParams_(e),this.resolveAuthentication_(e),e}},{key:"encodeParams_",value:function(e){var n=e.params();n.names().forEach(function(e){var a=n.getAll(e);a.forEach(function(e,n){e instanceof r?e=e.toString():(t.isObject(e)||e instanceof Array)&&(e=JSON.stringify(e)),a[n]=e})})}},{key:"filter",value:function(e,t,n){return this.getOrCreateQuery_().filter(e,t,n),this}},{key:"form",value:function(e,t){return this.formData_||(this.formData_=new FormData),this.formData_.append(e,t),this}},{key:"get",value:function(e){return this.sendAsync("GET",e)}},{key:"getOrCreateQuery_",value:function(){return this.query_||(this.query_=new i),this.query_}},{key:"header",value:function(e,t){if(2!==arguments.length)throw new Error("Invalid arguments");return this.headers_.set(e,t),this}},{key:"headers",value:function(){return this.headers_}},{key:"highlight",value:function(e){return this.getOrCreateQuery_().highlight(e),this}},{key:"limit",value:function(e){return this.getOrCreateQuery_().limit(e),this}},{key:"offset",value:function(e){return this.getOrCreateQuery_().offset(e),this}},{key:"param",value:function(e,t){if(2!==arguments.length)throw new Error("Invalid arguments");return this.params_.set(e,t),this}},{key:"params",value:function(){return this.params_}},{key:"patch",value:function(e){return this.sendAsync("PATCH",e)}},{key:"path",value:function(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return(new(Function.prototype.bind.apply(c,[null].concat([this.url()],t)))).use(this.customTransport_)}},{key:"post",value:function(e){return this.sendAsync("POST",e)}},{key:"put",value:function(e){return this.sendAsync("PUT",e)}},{key:"resolveAuthentication_",value:function(e){if(this.auth_)if(this.auth_.hasToken())e.header("Authorization","Bearer "+this.auth_.token());else{var t=this.auth_.username()+":"+this.auth_.password();e.header("Authorization","Basic "+btoa(t))}}},{key:"search",value:function(e,t,n){return this.getOrCreateQuery_().search(e,t,n),this}},{key:"sendAsync",value:function(e,t){var n=this.customTransport_||u.instance().getDefault(),r=this.createClientRequest_(e,t);return n.send(r).then(this.decode)}},{key:"sort",value:function(e,t){return this.getOrCreateQuery_().sort(e,t),this}},{key:"url",value:function(){return this.url_}},{key:"use",value:function(e){return this.customTransport_=e,this}},{key:"watch",value:function(e,t){if("undefined"==typeof io)throw new Error("Socket.io client not loaded");var n=this.createClientRequest_("GET",e),r=s.parseUrl(s.addParametersToUrlQueryString(n.url(),n.params()));return t=t||{forceNew:!0},t.path=t.path||r[1],io(r[0]+"?url="+encodeURIComponent(r[1]+r[2]),t)}},{key:"wrapWithQuery_",value:function(e){return e instanceof a&&(e=i.filter(e)),e}}],[{key:"url",value:function(e){return new c(e).use(this.customTransport_)}}]),c}();c.isContentTypeJson=function(e){var t=e.headers().get("content-type")||"";return 0===t.indexOf("application/json")},this.launchpad.Launchpad=c}.call(this),function(){var t=this.launchpad.Launchpad;void 0!==("undefined"==typeof window?"undefined":e["typeof"](window))&&(window.Launchpad=t)}.call(this),function(){var t=this.launchpad.Filter,n=this.launchpad.Geo,r=this.launchpad.Query,a=this.launchpad.Range;void 0!==("undefined"==typeof window?"undefined":e["typeof"](window))&&(window.Filter=t,window.Geo=n,window.Query=r,window.Range=a)}.call(this)}).call(this);