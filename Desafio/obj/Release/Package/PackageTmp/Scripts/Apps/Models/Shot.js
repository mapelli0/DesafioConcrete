var DesafioApp;
(function (DesafioApp) {
    var Models;
    (function (Models) {
        "use restrict";
        var Shot = (function () {
            function Shot(id, title, description, likes_count, image_url, player) {
                this.id = id;
                this.title = title;
                this.description = description;
                this.likes_count = likes_count;
                this.image_url = image_url;
                this.player = player;
            }
            return Shot;
        })();
        Models.Shot = Shot;
    })(Models = DesafioApp.Models || (DesafioApp.Models = {}));
})(DesafioApp || (DesafioApp = {}));
//# sourceMappingURL=Shot.js.map