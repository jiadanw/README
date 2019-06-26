

const array= process.argv;
const b= array.slice(2);


const array2=[];
function times(b){
  for(var i=0; i < b; i++){
    array2.push(Math.ceil(Math.random()*6))
  }
  return array2.join();
}

console.log(times(b));