const fs = require('fs')

fs.writeFile('./archivo1.txt', 'Ponte a chambear', error => {
  if (error)
    console.log(error)
  else
    console.log('El archivo fue creado')
})

console.log('última línea del programa')