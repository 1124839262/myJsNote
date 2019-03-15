//用命名规范来区别私有和公有
function Person(name,age,email) {
    //定义私有变量
    this._name;//私有
    this.setName(name);//只是方法的调用，方法中有验证，而不是在类中验证

    this._age;//私有
    this.setAge(age);
    this.email=email;//公有的
}

Person.prototype={//直接扩展至原型上，可以在本类的内部使用this调用
    setName:function (name) {
        this._name=name;
    },
    setAge:function (age) {
        //需要做判断符号实际情况
        // if(age>0&&age<150){//验证不在类中，类不会变的臃肿
        //     this._age=age;
        // }else {
        //     throw  new Error("年龄必须是在0到150范围内")
        // }
    },
    alert:function (data) {
        alert(data)
    }

}
var text1=new Person();
text1.alert(2222)//-10 程序会报错 这是我们想要的（说明验证是对的）
