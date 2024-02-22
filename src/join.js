Array.prototype.myJoin=function(separator=","){

    let str="";
    for (let i = 0; i < this.length; i++) {
            str+=this[i];
            if(i!==this.length-1){
            str+=separator;
            }
    }
    return str;

}

let countries=["india", "pakistan", "bhutan"]
console.log(countries.myJoin("|"))