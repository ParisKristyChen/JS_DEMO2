console.log("hello world");

console.log(new Object());
console.log(new Array());
console.log(new Set());
console.log(new Map());

console.log(new WeakSet());
console.log(new WeakMap());

const Object = new Object();
const array = new Array();
const set = new Set();
const map = new Map();
const weakMap =new WeakMap();
const weakSet = new WeakSet();


const target = { a: 1, b: 2 }
const source = { b: 4, c: 5 }

const returnedTarget = Object.assign(target, source)
//后面覆盖前面并且合并放到前面的变量（target 被）

console.log(returnedTarget);
console.log(target);//target也变了，破坏了原来的数据
console.log(source);//source没变

const target = { a: 1, b: 2 }
const source = { b: 4, c: 5 }


const returnedTarget = { ...target, ...source }
console.log(returnedTarget);
console.log(target);//target没变,未破坏原来的数据
console.log(source);//source没变

{
const obj1 = {
    name:"kristy",
    age: 18
}
const obj2 = new Object({
    name: "Kristy",
    age: 18
})

console.log(obj1);
console.log(boj2);

const obj_23 = Object.create(obj2)
console.log(obj3);
obj3.draw();
console.log(obj3.name,boj3.age);
obj3.name = "chen", obj3.age =99
console.log(obj3);
console.log(obj3.name,obj3.age);
obj3.draw();
}

{
  const user = {
    name: "Kristy",
    age: 18,
    profile: {
        address:"x.xxx.xx",
        email:"yyy@yy.com",
    },

    draw: function() {
   console.log(`Name:${this.name},age: ${this.age}`);
    },
  };


const key = Object.keys(user)
console.log(key);
const value = Object.values(user)
console.log(value);
}

{
  const obj  = { a:1, name: "Kristy", age: 99}
  const ovj2 = { ...obj}
  console.log(obj);
  console.log(obj2);
  const obj3 = new Object(obj)
  console.log(obj3);
  obj3.a = 2
  console.log(obj);
  console.log(obj2);
  console.log(obj3);
  const obj4 = Object.create(obj)
  console.log(obj4);
  obj4.a = 3

  console.log(obj);
  console.log(obj2);
  console.log(obj3);
  console.log(obj4);

  console.log(Object.hasOwn(obj, "a"));
  console.log(Object.hasOwn(obj, "name"));
  console.log(Object.hasOwn(obj, "age"));
  console.log(Object.hasOwn(obj, "toString"));

  console.log(object).hasOwn(obj4, "a");
  console.log(object).hasOwn(obj4, "name");
  console.log(object).hasOwn(obj4, "age");
 
}

{
  const name =" John Smith";
  const arrayName = Array.from(name);//注意有空格也会被分别拆开作为一个元素

  const newArrayName = arrayName.filter((element) => element != " ");//排除掉是` `的元素，即不等于` `的留下
  console.log(arrayName);//返回字母和空格组成的array，字符串被拆开
  console.log(newArrayName);//空格被去掉的array，不可以直接用set 去重，因为字母a也会被去重

  console.log(Array.isArray(name), typeof name);// false, `string`
  console.log(Arrahy.isArray(arrayName), typeof arrayName);// true,'object';typeof 返回object 所以要这样判断是不是array

  console.log(arrayname.join());// 返回结果会有逗号：E,t,h,a,n,,,z,h,a,n,g
  console.log(arrayName.join(""));//用`` 替换逗号，返回的结果和原来name一样：John Smith
  console.log(arrayName.join("_"));
  console.log(newarrayName.join(""));//返回John Smith
  console.log(newarrayName.join("_"));// 返回J_o_h_n_S_m_i_t_h
  
}


//拼接
{
  const array1 = ['a', 'b', 'c']
  const array2 = ['c', 'd', 'c', 'f']
  const array3 = array1.concat(array2)
  console.log(array3);
  
  console.log(array1);
  const array4 = array1 + array2
  console.log(array4);
  console.log(array4,typeof array4);

  const string1 = array1.join('') + array2.join('')
  console.log(string1);
  console.log(Array.from(string1));
}

{
  const array1 = [5, 12, 8, 130, 71, 55]
  const found = array1.find(element => element > 40)//寻找超过40的元素
  console.log(found);//130，find只能找到从头开始第一个满足条件的元素

  const foundIndex = array1.findIndex(element => element > 40)
  console.log(foundIndex,array1[foundIndex]);//3,130,也就是130的标志位3

  const foundLast = array1.findLast(element => element > 40)
  console.log(foundLast);//55,从后往前找

  const foundLastIndex = array1.findLastIndex(element => element > 40)
  console.log(foundLastIndex,array1[foundLastIndex]);//5,55，也就是55的标志位5

  const filter = array1.filter(element => element > 40)
  console.log(filter);//【130,71,55】，也就是所以符合条件的元素组成的数组

  const map = array1.map(element => element * 10)
  console.log(map);// [50, 120, 80, 1300, 710, 550]
}//map 用来做group操作

const string = "Hello World I'm Kristy";

const allWords = string.split(" ");
console.log(allWords);

console.log(string.split(""));

console.log(allWords.splice(1,3));

{
  const list = [1,2,[3,4,5,[6,[(7, 8, 9)]]]];
  console.log(list);

  const newList = list.flat();
  console.log(newList);

  const newList2 = list.flat(2);
  console.log(newList2);
  const newList3 = list.flat(3);
  console.log(newList3);

  const newList4 = list.flat(Infinity);
  console.log(newList4);
}

{
  const obj = {
    1: 'A',
    2: 'B',
    3: 'c'
  }  
  console.log(Object.keys(obj));

  const list = ['A', 'B', 'C']
  console.log(list.keys());
  const iter = list.keys()
  console.log(iter.next().value);
  console.log(iter.next().value);
  console.log(iter.next().value);
  const iter2 = list.values()
  console.log(iter2.next().value);
  console.log(iter2.next().value);
  console.log(iter2.next().value);
}

{
  const list = ['A', 'B', 'C']
  
  console.log(list);
  list.push("D")
  console.log(list);
  list.push("E")
  console.log(list);

  list.pop()
  console.log(list);
  
  list.unshift("F")
  console.log(list);

  list.shift()
  console.log(list);

  /**
   * list.push()
   * list.pop()
   * 
   * list.unshift()
   * list.shift()
   * 
   * list.push()
   * list.shift()
   */
}

//sort 大小排序
{
  const list = [374, 435, 34, 434, 78, 234]
  const list2 = [...list] 
  
  const newList = list.sort((a, b) => a - b)
  console.log(list);
  console.log(newList);

  const newList2 = list.sort((a, b) => b - a)
  console.log(list);
  console.log(newList2);

  console.log(list2);

//掺杂了字符串后就无法排序
  const list3 = [374,435, 'a', 23, 343, 'Krsity' 7843, 85]

  const newList3 = list3.sort((a ,b) => a - b)
  console.log(newlist3);
}


{
  const list = [374, 434, 'a', 23, 343, 'kristy']
  function isNumber(sth) {
    const result = (sth === +sth)
    console.log(result);
    return result
  } 
  function A (){
    return 'a';
  }
  const content = A();
  console.log(content);

  function B(sth){
    console.log(sth);
  }
  B(list)
  isNumber(0)
  const filterlist = list.filter(Elemnet => isNumber(Element))

  console.log(filterlist);

  const sortList = filterList.sort((a, b) => a - b)
  console.log(sortList);
}

{
  const list = [125, 568, ['a', [561, 658], 'b'], 2188, 1557, 2188]
  const flatList = list.flat(Infinity)

  function isNumber(something) {
    return something === +something

  }
  const filterList = flatList.filter(element => isNumber(element))
  console.log(filterList);

  const setList = [...new Set(filterList)]
  console.log(setList);

  const sortList = setList.sort((a, b) => a - b)
  console.log(sortList);

}


