var DesafioApp;
(function (DesafioApp) {
    var Models;
    (function (Models) {
        "use restrict";
        var Player = (function () {
            function Player(id, name, username, avatarurl) {
                this.id = id;
                this.name = name;
                this.username = username;
                this.avatar_url = avatarurl;
            }
            return Player;
        })();
        Models.Player = Player;
    })(Models = DesafioApp.Models || (DesafioApp.Models = {}));
})(DesafioApp || (DesafioApp = {}));
//# sourceMappingURL=Player.js.map