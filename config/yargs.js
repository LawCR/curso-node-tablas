const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption:true
        })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false
        })    
    .option('h',{
        alias: 'hasta',
        type: 'number',
        demandOption:true
        }) 
        .check( (argv, options) =>{
            if ( isNaN(argv.b) | isNaN(argv.h)){
                throw 'La base y el limite tiene que ser un numero'
            }
            return true;
            }).argv;       

module.exports = argv;