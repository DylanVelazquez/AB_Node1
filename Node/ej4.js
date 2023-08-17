const os = require('os')
console.log('Memoria libre: ' + os.freemem())
const vec = []
for(let v = 0; v < 1000000; v++){
    vec.push(v);
}
console.log('Memoria libre del vector: ' + os.freemem())