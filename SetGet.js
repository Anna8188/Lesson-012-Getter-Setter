"use strict";
const obj = {
    _nameProp: [],
    set Prop(name) {
      const Arr = name.split(", ");
      for (let i = 0; i < Arr.length; i++) {
        this._nameProp.push([Arr[i], Arr[i].length]);
      }
    },
    get Prop() {
      let strToReturn = "";
      for (let i = 0; i < this._nameProp.length; i++) {
        strToReturn = strToReturn + this._nameProp[i][0] + ", ";
      }
      return this._nameProp;
    },
  };
  
  obj.Prop = "Hovhannes, Sona";
  console.log(obj.Prop);
  obj.Prop;