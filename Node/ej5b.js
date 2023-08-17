const fs = require('fs/promises')

fs.writeFile('./archivo1b.txt', 'La chamba prometida')
  .then(() => {
    console.log('El archivo de texto fue creado empleando promesas')
  })
  .catch(error => {
    console.log(error)
  })

console.log('última línea del programa')
