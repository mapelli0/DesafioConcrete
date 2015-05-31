module DesafioApp.Models {
    "use restrict";
    export class Pagina {
        public numero: number;
        public Shots: Array<Shot> = new Array<Shot>();
        public erros: Array<string> = Array<string>();
    }
} 