const hello = 'hello world!';

console.log(hello);

class expando{
  get(target, name) {
    return `Value for attribute ${target} ${name}`
  }
}

let handler = {
  apply(target, name, data){
    return target._name+"/"+name+"!!!!!!!!!!!!!!!!!!!!!!!"
    console.log("@@@@@@@@@@@@@@",target,name,data)
    target[name] = data
     console.log("@@@ apply",target)

    return target
    
  },
  set(target, name, data){
    console.log("!!!",target,name,data)
    let spc = {"_value":1,"_name":1,"toJSON":1,"nodeType":1,"id":1,"className":1
                 ,"nodeName":1,"parentNode":1,"currentStyle":1,"outerHTML":1, 
                "window":1,"length":1}
    if (name in spc)
    {
      return Reflect.set(target, name, data)
    }
    else
    {
      	if (name in target){
        	target[name]._value = data
        	return target[name]._value
           return target[name]
           return Reflect.set(target, name, data)
        }
        else
        {
    		target[name] = exp(target._name+"/"+name,data,parent=target)
const hello = 'hello world!';

console.log(hello);

class expando{
  get(target, name) {
    return `Value for attribute ${target} ${name}`
  }
}

let handler = {
  apply(target, name, data){
    return target._name+"/"+name+"!!!!!!!!!!!!!!!!!!!!!!!"
    console.log("@@@@@@@@@@@@@@",target,name,data)
    target[name] = data
     console.log("@@@ apply",target)

    return target
    
  },
  set(target, name, data){
    console.log("!!!",target,name,data)
    let spc = {"_value":1,"_name":1,"toJSON":1,"nodeType":1,"id":1,"className":1
                 ,"nodeName":1,"parentNode":1,"currentStyle":1,"outerHTML":1, 
                "window":1,"length":1}
    if (name in spc)
    {
      return Reflect.set(target, name, data)
    }
    else
    {
      	if (name in target){
        	target[name]._value = data
        	return target[name]._value
           return target[name]
           return Reflect.set(target, name, data)
        }
        else
        {
    		target[name] = exp(target._name+"/"+name,data,parent=target)
        	return target[name]._value
        }    
    }
   
     console.log("@@@ set",target)

    return target[name]
    
  },
  get(target, name, reciever) {
    
    if (typeof target[name] === 'function') {
      //return target[name].bind(target);
      return target[name];

    }

    
    if (name in target){
      if (target[name] != null && typeof target[name]._value === 'function') {
        //return target[name]._value.bind(target);
        //return target[name]._value;

      }
      return target[name]
    }
    
    //return Reflect.get(...arguments);
    // console.log("..........2....",name)
    let spc = {"_value":1,"_name":1,"toJSON":1,"nodeType":1,"id":1,"className":1
               ,"nodeName":1,"parentNode":1,"currentStyle":1,"outerHTML":1, 
              "window":1,"length":1}
    if (name in spc)
    {
       return Reflect.get(target, name, reciever)
    }
    else{ target[name] = exp(target._name+"/"+name,null,parent=target)
        }
  
    
    return target[name]
    return `Value for attribute ${target} ${name}`
  },
  
}

function exp(_name = "", value=null, parent = null){
  	let payload = {"_name":_name}
  	if (value != null){
      payload["_value"]=value
    }
	let x = new Proxy({"_name":_name,"_parent":parent, "_value":value}, handler);
	//x._name = name;
	return x
}

let xo = exp("namespace", "Awesome!")
console.log('.......')
// let x = new Proxy({}, expando);
console.log(xo); // produces message: "Value of attribute 'lskdjoau'"

// console.log(x.lskdjoau); // produces message: "Value of attribute 'lskdjoau'"
xo.a.b.c.d.e.f.g.h = 3
xo.a.b.c.d.e = () => {return "EEEEEEEEEEEEEEEEEEE"}
xo.a.b.c = () => {return "CCCCCCCCCCCCC"}

console.log(xo); // produces message: "Value of attribute 'lskdjoau'"
console.log(xo._name); // produces message: "Value of attribute 'lskdjoau'"
console.log(xo.a.b.c._value()); // produces message: "Value of attribute 'lskdjoau'"
console.log(xo.a.b.c.d.e._value()); // produces message: "Value of attribute 'lskdjoau'"
console.log(xo.a.b.c.d.e.f.g.h._value); // produces message: "Value of attribute 'lskdjoau'"

// # TODO: UPNEXT: make this work. call directly
//console.log(xo.a.b.c()); // produces message: "Value of attribute 'lskdjoau'"

// usefull expando materials, Proxy traps, etc
// https://www.digitalocean.com/community/tutorials/js-proxy-traps
// https://stackoverflow.com/questions/1529496/is-there-a-javascript-equivalent-of-pythons-getattr-method
￼Enter        	return target[name]._value
        }    
    }
   
     console.log("@@@ set",target)

    return target[name]
    
  },
  get(target, name, reciever) {
    
    if (typeof target[name] === 'function') {
      //return target[name].bind(target);
      return target[name];

    }

    
    if (name in target){
      if (target[name] != null && typeof target[name]._value === 'function') {
        //return target[name]._value.bind(target);
        //return target[name]._value;

      }
      return target[name]
    }
   //return Reflect.get(...arguments);
    // console.log("..........2....",name)
    let spc = {"_value":1,"_name":1,"toJSON":1,"nodeType":1,"id":1,"className":1
               ,"nodeName":1,"parentNode":1,"currentStyle":1,"outerHTML":1, 
              "window":1,"length":1}
    if (name in spc)
    {
       return Reflect.get(target, name, reciever)
    }
    else{ target[name] = exp(target._name+"/"+name,null,parent=target)
        }
  
    
    return target[name]
    return `Value for attribute ${target} ${name}`
  },
  
}

function exp(_name = "", value=null, parent = null){
  	let payload = {"_name":_name}
  	if (value != null){
      payload["_value"]=value
    }
	let x = new Proxy({"_name":_name,"_parent":parent, "_value":value}, handler);
