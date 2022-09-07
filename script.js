console.log("Hello World");

console.log(new Object()); // {}object就是对象，就比如衣服，汽车，房子，这些都是对象
console.log(new Array()); // []
console.log(new Set()); //集合，里面的东西不能重复 set(0)
console.log(new Map()); // map(0)
console.log(new WeakSet()); // WeakSet {}
console.log(new WeakMap()); // WeakMap {}

const object = new Object(); //()里面有参数的意思
const array = new Array();
const set = new Set();
const map = new Map();
const weakMap = new WeakMap();
const weakSet = new WeakSet();

// Object;基于对象
// Object.assign() 分配，里面的东西拼合使用的
// Object.create()
// Object.keys()
// Object.values()
// Object.hasOwn() 检查自己的属性

{
  const target = { a: 1, b: 2 };
  const source = { b: 4, c: 5 };

  const returnedTarget = Object.assign(target, source);
  //用assign 后面覆盖前面并且合并放到前面的变量（target 被破坏被后面的覆盖）

  console.log(returnedTarget);
  console.log(target); //target也变了，破坏了原来的数据
  console.log(source); //source没变
}

{
  const target = { a: 1, b: 2 };
  const source = { b: 4, c: 5 };

  const returnedTarget = { ...target, ...source }; // 用...未破坏原来的数据
  console.log(returnedTarget);
  console.log(target);
  console.log(source);
}

{
  const obj1 = {
    name: "kristy",
    age: 1,
  };
  const obj2 = new Object({
    name: "Kristy",
    age: 18,
    draw: function () {
      console.log(`Name: ${this.name}, Age:${this.age}`);
    }, //function 添加最新的数据
  });

  console.log(obj1);
  console.log(obj2);

  const obj3 = Object.create(obj2); // create衍生出来的原型链，无自己的东西会往上追溯直到可复制到为止
  console.log(obj3);
  obj3.draw();
  console.log(obj3.name, obj3.age);
  (obj3.name = "chen"), (obj3.age = 1);
  console.log(obj3); //obj3整体
  console.log(obj3.name, obj3.age); //name是什么，age是什么。着重.后的野
  obj3.draw();
}

{
  const user = {
    name: "Kristy",
    age: 18,
    profile: {
      address: "x.xxx.xx",
      email: "yyy@yy.com",
    },

    draw: function () {
      console.log(`Name: ${this.name}, Age:${this.age}`);
    },
  };

  const key = Object.keys(user); //keys选取前缀关键字
  console.log(key);
  const value = Object.values(user); //values 选取关键字里面的内容
  console.log(value);
}

{
  const obj = { a: 1, name: "Kristy", age: 30 };
  const obj2 = { ...obj };
  console.log(obj);
  console.log(obj2);
  const obj3 = new Object(obj); //就是复制的意思
  console.log(obj3);
  obj3.a = 2;
  console.log(obj);
  console.log(obj2);
  console.log(obj3);
  const obj4 = Object.create(obj);
  console.log(obj4);
  obj4.a = 3;

  console.log(obj);
  console.log(obj2);
  console.log(obj3);
  console.log(obj4);

  console.log(Object.hasOwn(obj, "a"));
  console.log(Object.hasOwn(obj, "name"));
  console.log(Object.hasOwn(obj, "age"));
  console.log(Object.hasOwn(obj, "toString")); // hasOWn只能找自己的属性，不能找原型的属性

  console.log(Object.hasOwn(obj4, "a"));
  console.log(Object.hasOwn(obj4, "name"));
  console.log(Object.hasOwn(obj4, "age"));

  console.log(obj4.hasOwnProperty("a")); //直接找obj4自己的，等价于object
  console.log(obj4.hasOwnProperty("name"));
  console.log(obj4.hasOwnProperty("age"));

  console.log(obj4.__proto__); //动用了内部的属性。从内部手段改原型。等于作弊。不建议用
  console.log(obj.isPrototypeOf(obj4)); //查找obj是不是obj4的原型，是显示true，不是显示false
  console.log(obj2.isPrototypeOf(obj4));
  console.log(obj3.isPrototypeOf(obj4));
}

// Array
// Array.from()
//Array.isArray()

{
  const name = "Ethan Zhang";
  const arrayName = Array.from(name); //from 注意有空格也会被分别拆开作为一个元素

  const newArrayName = arrayName.filter((element) => element != " "); //filter用来排除掉是''的元素，即符合不等于''的条件。放的是被留下来的部分

  console.log(arrayName); //字母和空格组成的array，字符串被拆开
  console.log(newArrayName); //空格被去掉的array，不可以直接用set 去重，因为字母a也会被去重

  console.log(Array.isArray(name), typeof name); // false, `string`
  console.log(Array.isArray(arrayName), typeof arrayName); // true,'object';typeof 返回object 所以要这样判断是不是array

  //join用于拆开后再合并
  console.log(arrayName.join()); // 结果会有逗号：E,t,h,a,n,,,Z,h,a,n,g
  console.log(arrayName.join("")); //用''替换逗号，结果和原来name一样：Ethan Zhang
  console.log(arrayName.join("_")); //E_t_h_a_n_ _Z_h_a_n_g 中间包含空格
  console.log(newArrayName.join("")); //EthanZhang 已用filter所以没有空格
  console.log(newArrayName.join("_")); // E_t_h_a_n_Z_h_a_n_g
}

// Array.prototype.concat()所以东西合并在一起，包括重复的部分
// Array.prototype.filter()寻找多个，包含所有符合条件的
// Array.prototype.join()和from一起用的，先加后拆
// Array.prototype.map()所有东西统一做一系列操作
// Array.prototype.find()从头找一个
// Array.prototype.findIndex()从头找，包括标志位
// Array.prototype.findLast()从后找一个
// Array.prototype.findLastIndex()从后找，包括标志位
// Array.prototype.flat()扁平化
// Array.prototype.keys()
// Array.prototype.values()
// Array.prototype.pop()
// Array.prototype.push()
// Array.prototype.shift()
// Array.prototype.unshift()
// Array.prototype.sort()

//拼接
{
  const array1 = ["a", "b", "c"];
  const array2 = ["c", "d", "c", "f"];
  const array3 = array1.concat(array2); //拼合在一块不会覆盖，但要分开添加
  console.log(array3); //'a', 'b', 'c','c', 'd', 'c', 'f',把两个数组拼成一个数组成为一个全新的数组
  console.log(array1);
  const array4 = array1 + array2;
  console.log(array4);
  console.log(array4, typeof array4); //a,b,cc,d,e,f string

  const string1 = array1.join("") + array2.join("");
  console.log(string1); //abccdef，把数组里面的元素链接起来成为一个字符串
  console.log(Array.from(string1)); //'a', 'b', 'c','c', 'd', 'c', 'f'//可以无限连加，一次性添加。from 先join再拆开。
}

{
  const array1 = [5, 12, 8, 130, 71, 55];
  const found = array1.find((element) => element > 40); //寻找超过40的元素
  console.log(found); //130，find只能找到从头开始第一个满足条件的元素

  const foundIndex = array1.findIndex((element) => element > 40);
  console.log(foundIndex, array1[foundIndex]); //3,130,也就是130的标志位3

  const foundLast = array1.findLast((element) => element > 40);
  console.log(foundLast); //55,从后往前找

  const foundLastIndex = array1.findLastIndex((element) => element > 40);
  console.log(foundLastIndex, array1[foundLastIndex]); //5,55，也就是55的标志位5

  const filter = array1.filter((element) => element > 40);
  console.log(filter); //【130,71,55】，所以符合条件的元素组成的数组

  const map = array1.map((element) => element * 10);
  console.log(map); // [50, 120, 80, 1300, 710, 550]
} //map 用来做group操作

const string = "Hello World I'm Kristy";

const allWords = string.split(" ");
console.log(allWords);

console.log(string.split("")); //Array.from(string)

console.log(allWords.slice(1, 3)); // World I'm 左臂右开原则；1,2 要（左边要右边的不要）。如果只有一个数字，从包含那个数字开始往后数（1）=1,2,3 （2）=2,3

{
  const list = [1, 2, [3, 4, 5, [6, [(7, 8, 9)]]]];
  console.log(list);

  const newList = list.flat(); // list.flat(1)
  console.log(newList);

  const newList2 = list.flat(2);
  console.log(newList2);

  const newList3 = list.flat(3);
  console.log(newList3);

  const newList4 = list.flat(Infinity); // infinity 表示打碎无限层，完全撑平
  console.log(newList4);
}

{
  const obj = {
    1: "A",
    2: "B",
    3: "c",
  };
  console.log(Object.keys(obj)); //Object自带属性，冒号前的前缀
  console.log(Object.values(obj)); //ABC，冒号后的关键字

  const list = ["A", "B", "C"];
  console.log(list.keys()); // list实体原型链的属性，迭代器012
  const iter = list.keys();
  console.log(iter.next().value); //0
  console.log(iter.next().value); //1
  console.log(iter.next().value); //2
  const iter2 = list.values();
  console.log(iter2.next().value); //A
  console.log(iter2.next().value); //B
  console.log(iter2.next().value); //C
}

{
  const list = ["A", "B", "C"];

  console.log(list);
  list.push("D");
  console.log(list);
  list.push("E");
  console.log(list);

  list.pop();
  console.log(list);

  list.unshift("F");
  console.log(list);

  list.shift();
  console.log(list);

  /**
   * list.push()//push 在列尾塞东西
   * list.pop()//pop后进先出,后尾的先拿出来
   *
   * list.unshift()//从头列塞进去
   * list.shift()//从头列拿出来
   *
   * list.push()//尾进
   * list.shift()//头出
   */
}

//sort 大小排序
{
  const list = [374, 435, 23, 343, 7843, 85];
  const list2 = [...list]; //一层的情况下保留list的结构

  const newList = list.sort((a, b) => a - b); //从小到大排
  console.log(list);
  console.log(newList);

  const newList2 = list.sort((a, b) => b - a); //从大到小排
  console.log(list);
  console.log(newList2);

  console.log(list2);

  //掺杂了字符串后就无法排序
  const list3 = [374, 435, "a", 23, 343, "Kristy", 7843, 85];

  const newList3 = list3.sort((a, b) => b - a);
  console.log(newList3);
}

{
  const list = [374, 435, "a", 23, 343, "Kristy", 7843, 85];
  function isNumber(sth) {
    //const result = (sth === +sth)
    //console.log(result);
    //return result
    return sth === +sth; //=== 用来作比较
  }
  function A() {
    return "a";
  }
//function（）里面的是参数，需要设置一个参数并且使用它就在括号里面加上，如果括号是空的就是不需要这个参数

  const content = A();
  console.log(content); //A()你这个不需要用到任何参数，那就空着

  function B(sth) {
    console.log(sth);
  }

  B(list);
  isNumber(0);
  const filterList = list.filter((element) => isNumber(element));

  console.log(filterList);

  const sortList = filterList.sort((a, b) => a - b);
  console.log(sortList);
}

{
  const list = [374, [435, "a", [23, 343], "Kristy"], 7843, 85, 435];
  console.log(list);

  const flatList = list.flat(Infinity);

  function isNumber(something) {
    return something === +something;//===返回的是boolean值
  }

  const filterList = flatList.filter((element) => isNumber(element));
  console.log(filterList);

  const setList = [...new Set(filterList)];
  console.log(setList);

  const sortList = setList.sort((a, b) => a - b);
  console.log(sortList);
}

{
  const a = "2323";
  const b = 2323;

  console.log(a, typeof a);
  console.log(b, typeof b);
  console.log(+a, typeof +a);
  console.log(a === +a); //三个等号，严格相等;两个等号，不严格
  console.log(b === +a); // 加 + 可将string变为number，string是字符串可以加在一起，加引号的都是string字符串
}
