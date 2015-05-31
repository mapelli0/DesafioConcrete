var DesafioApp;
(function (DesafioApp) {
    var Models;
    (function (Models) {
        "use restrict";
        var Session = (function () {
            function Session() {
                this.Paginas = new Array();
                this.erros = new Array();
            }
            return Session;
        })();
        Models.Session = Session;
    })(Models = DesafioApp.Models || (DesafioApp.Models = {}));
})(DesafioApp || (DesafioApp = {}));
//# sourceMappingURL=Sessao.js.map