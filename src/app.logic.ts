import fs from 'fs';
import { yarg } from './config/plugins/args.plugin';

// const base: number= yarg.b;
// const limit: number = yarg.l;
// const show : boolean = yarg.s;
const {b:base,l:limit,s:showTable} = yarg;

let tabla:string='';
const header:string = `
----------------------
    tabla del ${base}
-----------------------\n`;
for (let index = 1; index <= limit; index++) {
    tabla += `${base}x${index} = ${base*index} \n`;

}

tabla = header + tabla;
if (showTable) console.log(tabla);

const outputPath = 'outputs';
fs.mkdirSync(outputPath,{recursive:true});
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`,tabla)
console.log('file created!!!')
