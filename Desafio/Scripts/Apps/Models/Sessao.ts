module DesafioApp.Models {
    "use restrict";
    export class Session { 
        public Paginas: Array<Pagina> = new Array<Pagina>();
        public erros: Array<string> = new Array<string>();
    }
} 