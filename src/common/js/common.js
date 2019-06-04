var SIGN_REGEXP = /([yMdhsm])(\1*)/g;
var DEFAULT_PATTERN = 'yyyy-MM-dd';
function padding(s, len) {
    var len = len - (s + '').length;
    for (var i = 0; i < len; i++) { s = '0' + s; }
    return s;
};

let common = {
    FormatMoney: function(s, n) {//数字格式化 s - 需要格式化的数字 n - 小数点保留的位数
    	n = n > 0 && n <= 20 ? n : 2;
    	s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
    	let l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];
    	let t = "";
    	for (let i = 0; i < l.length; i++) {
    		t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
    	}
    	return t.split("").reverse().join("") + "." + r;
    },
    md5seri: function(obj){//MD5加密参数序列号;
        let str = 'HLJFZZRSDDBBGZDDJYJY';
        for(let i in obj){
            str+= ';'+ i + ':' +obj[i];
        }
        return str;
    },
    mobileCheck: function (str){//手机号码规则验证
        let reg = /^1[1-9]\d{9}$/;
        return reg.test(str);
    },
    SMSCodeCheck: function (str){//短信验证码 规则验证 必须6位且不为空
        return /^[0-9]{4,6}$/.test(str);
    },
    checkPasswd: function (str){//检验登录密码的合法性 只能输入数字跟字母
        return /^[a-zA-Z0-9]+$/.test(str);
    },
    checkSecurCode: function (str){//检验安全码密码的合法性 只能输入数字且必须是6位
        return /^[0-9]{6}$/.test(str);
    },
    checkCarNumber: function (str){//检验车牌号的合法性
    	let reg = /^[\u4e00-\u9fa5]{1}[A-Z]{1}[A-Z_0-9]{5}$/;
    	if (reg.test(str)) return true;
    	return false;
    },
    checkIDCard: function (str){
        let reg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$)/
        if (reg.test(str)) return true;
    	return false;
    },
    getQueryStringByName: function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        var context = "";
        if (r != null)
            context = r[2];
        reg = null;
        r = null;
        return context == null || context == "" || context == "undefined" ? "" : context;
    },
    formatDate: {
        format: function ( timestamp, pattern) {
            let date = new Date(timestamp);
            pattern = pattern || DEFAULT_PATTERN;
            return pattern.replace(SIGN_REGEXP, function ($0) {
                switch ($0.charAt(0)) {
                    case 'y': return padding(date.getFullYear(), $0.length);
                    case 'M': return padding(date.getMonth() + 1, $0.length);
                    case 'd': return padding(date.getDate(), $0.length);
                    case 'w': return date.getDay() + 1;
                    case 'h': return padding(date.getHours(), $0.length);
                    case 'm': return padding(date.getMinutes(), $0.length);
                    case 's': return padding(date.getSeconds(), $0.length);
                }
            });
        },
        parse: function (dateString, pattern) {
            var matchs1 = pattern.match(SIGN_REGEXP);
            var matchs2 = dateString.match(/(\d)+/g);
            if (matchs1.length == matchs2.length) {
                var _date = new Date(1970, 0, 1);
                for (var i = 0; i < matchs1.length; i++) {
                    var _int = parseInt(matchs2[i]);
                    var sign = matchs1[i];
                    switch (sign.charAt(0)) {
                        case 'y': _date.setFullYear(_int); break;
                        case 'M': _date.setMonth(_int - 1); break;
                        case 'd': _date.setDate(_int); break;
                        case 'h': _date.setHours(_int); break;
                        case 'm': _date.setMinutes(_int); break;
                        case 's': _date.setSeconds(_int); break;
                    }
                }
                return _date;
            }
            return null;
        }
    }
};
module.exports = common;
