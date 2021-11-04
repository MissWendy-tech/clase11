var marks = [30,40,45,35,8,30,48,79,80,96,100];

console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log("todos los elementos");
console.log(marks);
function promedio(){
  var suma=0;
  var prom=0;
  console.log("ciclo for");
    for(var i=0; i<marks.length; i++){
      console.log(marks[i]);
      suma=suma+marks[i];
    }

  console.log("suma: "+suma);
  prom=suma/marks.length;
  console.log("promedio: "+prom);
}



function setup() {
  createCanvas(400, 400);
  promedio();
}

function draw() {
  
  background(150);
}