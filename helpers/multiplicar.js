const fs = require('fs');
const colors = require ('colors');
const crearArchivo = async(base = 5, listar = false) => {
    try {
        let salida = '';
        salida += `Tabla de Multiplicar de base ${base} \n`
        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        if (listar) {
            console.log(salida);
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        return `tabla-${base}.txt creada`;
    } catch (error) {
        throw err
    }
    

}

module.exports = {
    crearArchivo,
}