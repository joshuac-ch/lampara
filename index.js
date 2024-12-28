import { extract } from '@extractus/article-extractor'
const githhub="https://github.com/extractus/article-extractor"
const entrada=await extract("https://www.ig.com/es/estrategias-de-trading/16-patrones-de-velas-japonesas-que-todo-inversor-deberia-conocer-200529")
console.log(entrada)