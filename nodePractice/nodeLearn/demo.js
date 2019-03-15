var array = [];

for(var i = 1; i <= 1000; i++) {
    array.push(i);
}

console.time()
array.forEach(data => {
   if( data == 1000) {
       console.log("ForEach loop executed.....");
   }
});
console.timeEnd();

console.time()
for(j = 1; j <= 1000; j ++) {
    if( j == 1000) {
        console.log("For loop executed.....");
    }
}
 console.timeEnd();
 