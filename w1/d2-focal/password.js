
const array= process.argv;
const array1= array.slice(2);

var array2=[];
const password= function(array1){
      for(var i=0; i < array1.length; i ++){
        if(array1[i]==="a"){
          array2.push(4);
        }
        else if(array1[i]==="e"){
          array2.push(6)
        }
        else if (array1[i]==="o"){
          array2.push(0)
        }
        else if( array1[i]==="l"){
          array2.push(1);
        }
        else{array2.push(array1[i])}
}return array2;
}

console.log(password(array1)); 

/*const input = process.argv.slice(2)[0];

const password = function() {
  let temp = "";
  for (let i = 0; i < input.length; ++i) {
    input[i] === "a" ? temp += "4" : input[i] === "e" ? temp += "3" : input[i] === "o" ? temp += "0" : input[i] === "l" ? temp += "1" : temp += input[i];
  }
  return temp;
};

console.log(password());*/