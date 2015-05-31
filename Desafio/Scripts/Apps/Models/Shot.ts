module DesafioApp.Models {
    "use restrict";
    export class Shot {
        public id: number;
        public title: string;
        public description: string;
        public likes_count: number;
        public image_url: string;
        public player: Player;


        constructor(id: number, title: string, description: string, likes_count: number, image_url : string, player: Player) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.likes_count = likes_count;
            this.image_url = image_url;
            this.player = player;
        }

    }
} 