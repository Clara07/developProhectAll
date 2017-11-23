/**
 * BASE SDK v0.0.1
 * @module BASE
 * @author luchao
 */
(function(root){
	var BASE = root.BASE = root.BASE || {};


	// BASE版本号
    BASE._VERSION = '0.0.1';

    // 数据类型检查
    BASE._isType = function (val) {
        return Object.prototype.toString.call(val).slice(8, -1);
    };
    // 是否为字符串
    BASE._isString = function (val) {
        return BASE._isType(val) === 'String';
    };
    // 是否为数字
    BASE._isNumber = function (val) {
        return BASE._isType(val) === 'Number';
    };
    // 是否为布尔值
    BASE._isBoolean = function (val) {
        return BASE._isType(val) === 'Boolean';
    };
    // 是否为Undefined
    BASE._isUndefined = function (val) {
        return BASE._isType(val) === 'Undefined';
    };
    // 是否为Null
    BASE._isNull = function (val) {
        return BASE._isType(val) === 'Null';
    };
    // 是否为对象
    BASE._isObject = function (val) {
        return BASE._isType(val) === 'Object';
    };
    // 是否为数组
    BASE._isArray = function (val) {
        return BASE._isType(val) === 'Array';
    };
    // 是否为函数
    BASE._isFunction = function (val) {
        return BASE._isType(val) === 'Function';
    };
    // 是否为Null或Undefined
    BASE._isNullOrUndefined = function (val) {
        return BASE._isNull(val) || BASE._isUndefined(val);
    };
    // 是否为空
    BASE._isEmpty = function (val) {
        if (BASE._isObject(val)) {
            for (var key in val) {
                if (val.hasOwnProperty(key)) {
                    return false;
                }
            }
            return true;
        } else if (BASE._isArray(val)) {
            return val.length === 0;
        } else {
            return !val;
        }
    };

    // 对象扩展
    BASE._extend = function (dest, src) {
        if (BASE._isObject(dest) || BASE._isFunction(dest) && BASE._isObject(src)) {
            for (var key in src) {
                if (src.hasOwnProperty(key)) {
                    if (BASE._isObject(src[key])) {
                        dest[key] = BASE._extend({}, src[key]);
                    } else if (BASE._isArray(src[key])) {
                        dest[key] = BASE._extend([], src[key]);
                    } else {
                        dest[key] = src[key];
                    }
                }
            }
        } else if (BASE._isArray(dest) && BASE._isArray(src)) {
            for (var i = 0, len = src.length; i < len; i++) {
                dest.push(src[i]);
            }
        }
        return dest;
    };
    // 对象复制
    BASE._clone = function (src) {
        if (BASE._isObject(src)) {
            return BASE._extend({}, src);
        } else if (BASE._isArray(src)) {
            return BASE._extend([], src);
        } else {
            return src;
        }
    };

    // JSON引用
    BASE._JSON = root.JSON || null;
    // 序列化JSON对象
    BASE._toJSON = function (obj) {
        if (BASE._JSON) {
            return BASE._JSON.stringify(obj);
        } else {
            throw new Error('您的浏览器不支持JSON！');
        }
    };
    // 反序列化JSON字符串
    BASE._fromJSON = function (str) {
        if (BASE._JSON) {
            return BASE._JSON.parse(str);
        } else {
            throw new Error('您的浏览器不支持JSON！');
        }
    };

    // sessionStorage引用
    BASE._Storage = root.sessionStorage || null;
    // 添加sessionStorage条目
    BASE._setItem = function (key, value) {
        if (BASE._Storage) {
            BASE._Storage.setItem(key || '', value ? BASE._toJSON(value) : '');
        } else {
            throw new Error('您的浏览器不支持sessionStorage！');
        }
    };
    // 移除sessionStorage条目
    BASE._removeItem = function (key) {
        if (BASE._Storage) {
            BASE._Storage.removeItem(key || '');
        } else {
            throw new Error('您的浏览器不支持sessionStorage！');
        }
    };
    // 获取sessionStorage条目
    BASE._getItem = function (key) {
        if (BASE._Storage) {
            return BASE._fromJSON(BASE._Storage.getItem(key || ''));
        } else {
            throw new Error('您的浏览器不支持sessionStorage！');
        }
    };

    // encodeURIComponent引用
    BASE._encodeURIComponent = root.encodeURIComponent || null;
    // decodeURIComponent引用
    BASE._decodeURIComponent = root.decodeURIComponent || null;
    // 查询参数格式化
    BASE._getQuery = function (obj) {
        var query = '';
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                var value = obj[key], child = {};
                if (BASE._isObject(value)) {
                    for (var item in value) {
                        if (value.hasOwnProperty(item)) {
                            child = {};
                            child[key + '[' + item + ']'] = value[item];
                            query += BASE._getQuery(child) + '&';
                        }
                    }
                } else if (BASE._isArray(value)) {
                    for (var i = 0, len = value.length; i < len; i++) {
                        child = {};
                        child[key + '[' + i + ']'] = value[i];
                        query += BASE._getQuery(child) + '&';
                    }
                } else if (!BASE._isNullOrUndefined(value)) {
                    if (BASE._encodeURIComponent) {
                        query += BASE._encodeURIComponent(key) + '=' + BASE._encodeURIComponent(value) + '&';
                    } else {
                        throw new Error('您的浏览器不支持encodeURIComponent');
                    }
                }
            }
        }
        return query.length ? '&' + query.slice(0, -1) : query;
    };

    // Promise类
    BASE._Promise = function () {
        this._resolved = false;
        this._rejected = false;
        this._resolvedCallbacks = [];
        this._rejectedCallbacks = [];
        this._result = null;
        this._error = null;
    };
    BASE._extend(BASE._Promise, {
        // 是否为Promise实例
        _is: function (val) {
            return BASE._isObject(val) && BASE._isFunction(val.then)
                && BASE._isFunction(val._resolve) && BASE._isFunction(val._reject);
        }
    });
    BASE._extend(BASE._Promise.prototype, {
        // resolve方法
        _resolve: function () {
            this._resolved = true;
            this._result = arguments;
            for (var i = 0, len = this._resolvedCallbacks.length; i < len; i++) {
                this._resolvedCallbacks[i].apply(this, this._result);
            }
            this._resolvedCallbacks = [];
            this._rejectedCallbacks = [];
        },
        // reject方法
        _reject: function () {
            this._rejected = true;
            this._error = arguments;
            for (var i = 0, len = this._rejectedCallbacks.length; i < len; i++) {
                this._rejectedCallbacks[i].apply(this, this._error);
            }
            this._resolvedCallbacks = [];
            this._rejectedCallbacks = [];
        },

        // then方法
        then: function (resolvedCallback, rejectedCallback) {
            var promise = new BASE._Promise();

            var wrappedResolvedCallback = function () {
                var result = arguments;
                if (resolvedCallback) {
                    result = [resolvedCallback.apply(this, result)];
                }
                if (result.length === 1 && BASE._Promise._is(result[0])) {
                    result[0].then(function () {
                        promise._resolve.apply(promise, arguments);
                    }, function () {
                        promise._reject.apply(promise, arguments);
                    });
                } else {
                    promise._resolve.apply(promise, result);
                }
            };

            var wrappedRejectedCallback = function () {
                var error = arguments;
                if (rejectedCallback) {
                    error = [rejectedCallback.apply(this, error)];
                }
                if (error.length === 1 && BASE._Promise._is(error[0])) {
                    error[0].then(function () {
                        promise._resolve.apply(promise, arguments);
                    }, function () {
                        promise._reject.apply(promise, arguments);
                    });
                } else {
                    promise._reject.apply(promise, error);
                }
            };

            if (this._resolved) {
                wrappedResolvedCallback.apply(this, this._result);
            } else if (this._rejected) {
                wrappedRejectedCallback.apply(this, this._error);
            } else {
                this._resolvedCallbacks.push(wrappedResolvedCallback);
                this._rejectedCallbacks.push(wrappedRejectedCallback);
            }

            return promise;
        },
        // success方法
        success: function (resolvedCallback) {
            var rejectedCallback = null;

            var promise = new BASE._Promise();

            var wrappedResolvedCallback = function () {
                var result = arguments;
                if (resolvedCallback) {
                    resolvedCallback.apply(this, result);
                }
                promise._resolve.apply(promise, result);
            };

            var wrappedRejectedCallback = function () {
                var error = arguments;
                if (rejectedCallback) {
                    rejectedCallback.apply(this, error);
                }
                promise._reject.apply(promise, error);
            };

            if (this._resolved) {
                wrappedResolvedCallback.apply(this, this._result);
            } else if (this._rejected) {
                wrappedRejectedCallback.apply(this, this._error);
            } else {
                this._resolvedCallbacks.push(wrappedResolvedCallback);
                this._rejectedCallbacks.push(wrappedRejectedCallback);
            }

            return promise;
        },
        // error方法
        error: function (rejectedCallback) {
            var resolvedCallback = null;

            var promise = new BASE._Promise();

            var wrappedResolvedCallback = function () {
                var result = arguments;
                if (resolvedCallback) {
                    resolvedCallback.apply(this, result);
                }
                promise._resolve.apply(promise, result);
            };

            var wrappedRejectedCallback = function () {
                var error = arguments;
                if (rejectedCallback) {
                    rejectedCallback.apply(this, error);
                }
                promise._reject.apply(promise, error);
            };

            if (this._resolved) {
                wrappedResolvedCallback.apply(this, this._result);
            } else if (this._rejected) {
                wrappedRejectedCallback.apply(this, this._error);
            } else {
                this._resolvedCallbacks.push(wrappedResolvedCallback);
                this._rejectedCallbacks.push(wrappedRejectedCallback);
            }

            return promise;
        }
    });

    // XMLHttpRequest引用
    BASE._XMLHttpRequest = root.XMLHttpRequest || null;
    // XDomainRequest引用
    BASE._XDomainRequest = root.XDomainRequest || null;
    // AJAX封装
    BASE._ajax = function (opt) {
        var method = typeof opt.method === 'string' ? opt.method : '';
        var url = typeof opt.url === 'string' ? opt.url : '';
        var data = typeof opt.data === 'string' ? opt.data : '';
        var file = typeof opt.file === 'object' ? opt.file : null;
        var async = typeof opt.async === 'boolean' ? opt.async : true;

        var promise = new BASE._Promise();

        if (BASE._XMLHttpRequest) {
            var xhr = new BASE._XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        var response = '';
                        try {
                            response = BASE._fromJSON(xhr.responseText);
                        } catch (err) {
                            promise._reject(err.message, xhr.status, xhr);
                        }
                        if (response) {
                            promise._resolve(response, xhr.status, xhr);
                        }
                    } else {
                        promise._reject(xhr.statusText, xhr.status, xhr);
                    }
                }
            };
            xhr.ontimeout = function () {
                promise._reject(xhr.statusText, xhr.status, xhr);
            };
            //console.log(async);
            xhr.open(method, url, async);
            xhr.withCredentials = true;
            if (file) {
                xhr.send(file);
            } else {
                xhr.setRequestHeader('Content-Type', 'text/plain');
                xhr.send(data);
            }
        } else if (BASE._XDomainRequest) {
            var xdr = new BASE._XDomainRequest();
            xdr.onload = function () {
                var response = '';
                try {
                    response = BASE._fromJSON(xdr.responseText);
                } catch (err) {
                    promise._reject(err.message, 400, xdr);
                }
                if (response) {
                    promise._resolve(response, 200, xdr);
                }
            };
            xdr.onerror = function () {
                promise._reject('Bad Request', 400, xdr);
            };
            xdr.ontimeout = function () {
                promise._reject('Request Timeout', 408, xdr);
            };
            xdr.onprogress = function () {
            };
            xdr.open(method, url);
            if (file) {
                xdr.send(file);
            } else {
                xdr.send(data);
            }
        } else {
            throw new Error('您的浏览器不支持AJAX！');
        }

        return promise;
    };

    BASE._App = function () {

    };
    BASE._extend(BASE._App, {
        // 是否为BASE._App实例
        _is: function (val) {
            return BASE._isObject(val) && BASE._isFunction(val._request);
        }
    });
    BASE._extend(BASE._App.prototype, {
    	/**
         * 数据请求
         * @method _request
         * @param {Object} opt 请求参数对象
         * @param {Object} opt.method 请求方法，GET或POST
         * @param {Object} opt.uri 请求路径
         * @param {Object} opt.cache 是否缓存
         * @param {Object} opt.version 数据接口版本
         * @param {Object} opt.data 请求数据
         * @param {Object} opt.file 请求文件（FormData对象）
         * @param {Object} opt.success 成功回调
         * @param {Object} opt.error 失败回调
         * @return {BASE._Promise} Promise对象
         */
        _request: function (opt) {
            var method = typeof opt.method === 'string' ? opt.method : '';
            var async = typeof opt.async === 'boolean' ? opt.async : true;
            var url = typeof opt.uri === 'string' ? opt.uri : '';
            var cache = typeof opt.cache === 'boolean' ? opt.cache : false;
            var version = typeof opt.version === 'number' ? opt.version : this._apiVersion;
            var data = typeof opt.data === 'object' ? opt.data : null;
            var file = typeof opt.file === 'object' ? opt.file : null;
            var success = typeof opt.success === 'function' ? opt.success : function () {
                };
            var error = typeof opt.error === 'function' ? opt.error : function () {
                };

            if (file) {
                return BASE._ajax({
                    method: 'POST',
                    url: url,
                    file: file,
                    async : async
                }).success(success).error(error);
            } else if (method === 'GET') {
                return BASE._ajax({
                    method: method,
                    url: url,
                    async : async
                }).success(success).error(error);
            } else {
                return BASE._ajax({
                    method: method,
                    url: url,
                    data: data,
                    async : async
                }).success(success).error(error);
            }
            
        }
    });

    BASE.App = new BASE._App();

})(window);



/**
 * Forms
 * @module Forms
 * @author luchao
 */
(function(root){
    var BASE = root.BASE = root.BASE || {};
   	
   	BASE.Forms = function(formItems, sbObj){
   		this.errorList = [];
   		this.formItems = formItems;
   		this.sbObj = sbObj;
   		this.validity = true;
   		var _this = this;
   		// bind click
   		sbObj.click(function(){
   			_this.ckSubmit();
   			return _this.validity;
   		});
   		// bind focus
   		formItems.blur(function(){
   			_this._showErrorMsg(this, _this);
   		});

   		formItems.focus(function(){
   			$(this).next().hide();
   		});
   	};
   	BASE._extend(BASE.Forms.prototype, {
   		printErrorList : function(){
   			console.log(this.errorList);
   		},
   		ckSubmit : function(){
   			var that = this;
   			this.formItems.each(function(){
   				that._showErrorMsg(this, that);
   			});
   		},
   		_showErrorMsg : function(cthis, cthat){
			var _this = $(cthis),
				regs = _this.attr('reg').split('0x11'),
				msgs = _this.attr('msg').split('0x11'),
				xhr = _this.attr('xhr').split('0x11'),
				errorMsg = '',
				that = cthat,
				errorFlg = 1;

			for(var i = 0; i < regs.length; i++){
				var reg = new RegExp(regs[i]);
				if(!reg.test(_this.val())){
					errorMsg += msgs[i] + ',';
					that._setErrorObj(cthis, cthat);
					errorFlg = 0;
				}
			}
		
			for(var j = 0; j < xhr.length; j++){
				var url = xhr[j];
				(function(k){
					BASE.App._request({uri : url, method:'GET', async : false}).then(function(res){
						if(res.status != 0){
							that._setErrorObj(cthis, cthat);
							errorMsg += msgs[k] + ',';
							errorFlg = 0;
						}
					},function(res){
						alert('接口异常');
						that._setErrorObj(cthis, cthat);
					});	
				})(i+j);
			}

			errorMsg = errorMsg.substring(0, errorMsg.length-1);

			that._createErrorMsg(_this, errorMsg);

			if(errorFlg){
				that.validity = true;
			}
   		},
   		_setErrorObj : function(cthis, cthat){
   			var _this = $(cthis),
   				that = cthat;
   			that.errorList[_this.attr('name')] = _this;
			that.validity = false;
   		},
   		_createErrorMsg : function(obj, errorMsg){
   			var next = obj.next(); 

   			if(errorMsg){
   				
   				obj.next().text(errorMsg);

	   			if(!next.length){
	   				var em = $('<em class="wring"></em>');
	   				em.text(errorMsg);
	   				obj.after(em);
	   			}else{
	   				next.show();
	   			}
   			}else{
   				next.hide();
   			}
   		}
   	});
   	// console.log(BASE);

})(window);