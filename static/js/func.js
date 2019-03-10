/*
 请求类 必须加载 jquery
 */
var debug = true; //是否是调试模式
var header = '';//请求头
var is_layer=false;
var Url = {
    update: '',
    delete: '',
    submit: '',
}
var submit_name = '#f_submit'; //form_name is  #f_submit_form
try {
    $(document).ready(function () {
        //通用提交表单数据
        $(submit_name).click(function () {
            var data = $(submit_name + '_form').serialize();
            var url = $(this).attr('url');
            if (!url) {
                func.alert('缺少提交url')
                return false;
            }
            func.post(url, data)
        })
    });
} catch (err) {
    alert('请在func.js前，加载jqeury.js') // 可执行
}
//判断是否加载layer



var func;

func = {
    //param 阐述为：param= {'username':username,'password':password};
    post: (url, param = '') => {
        if (debug) {
            console.log('域名：' + url + '参数：' + param);
        }
        $.post(url, param, function (result, status) {
            if (debug) {
                console.log('结果：' + result);
            }
        }, 'JSON');
    },
    alert: (string) => {
        if(is_layer){
            layer.alert(string)
        }else {
            alert(string);
        }

    },
    //s是否是一个数组
    isArray: (arr) => {
        return Object.prototype.toString.call(arr) === '[object Array]';
    },
    //是否是一个方法
    isFunction: (fn) => {
        return Object.prototype.toString.call(fn) === '[object Function]';
    },
    //去除所有空格
    stim: (string) => {
        return str.replace(/\s/g, '');
    },
    isEmail: (emailStr) => {
        var reg = /^[a-zA-Z0-9]+([._-]*[a-zA-Z0-9]*)*@[a-zA-Z0-9]+.[a-zA-Z0-9{2,5}$]/;
        var result = reg.test(emailStr);
        if (result) {
            return true
        } else {
            return false
        }
    },
    isMobilePhone: (phone) => {
        var reg = /^1\d{10}$/;
        if (reg.test(phone)) {
            return true;
        } else {
            return false
        }
    },
    //获取一段字符串出现的，value 的次数
    getStringCount: (str, value) => {
        var count = 0;
        var pos = str.indexOf(value);
        while (pos !== -1) {
            count++;
            pos = str.indexOf(value, pos + 1);
        }
        return count;
    },
    //搜索数组功能
    // var fruits = ['apple','banana', 'grapes','mango', 'orange'];
    searchArray: (arr, value) => {
        if (!self.func.isArray(arr)) {
            self.func.alert('searchArray方法，传入的必须为数组')
            return false;
        }
        return arr.filter(function (el) {
            return el.toLowerCase().indexOf(value.toLowerCase()) > -1;
        })
    },
    //删除数组中的 键值为index（记住哦）
    removeArray: (arr, indx) => {
        for (var i = 0; i < arr.length; i++) {
            var index = arr.indexOf(arr[i]);
            if (indx == index) {
                arr.splice(index, 1)
            }
        }
        return arr
    }
};
//判断是否加载layer
is_layer =func.isFunction(layer.msg)


