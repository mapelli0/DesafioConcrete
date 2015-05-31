module DesafioApp.Models {
    "use restrict";
    export class Player {
        public id: number;
        public name: string;
        public username: string;        
        public avatar_url: string;


        constructor(id: number, name: string, username: string, avatarurl: string) {
            this.id = id;
            this.name = name;
            this.username = username;            
            this.avatar_url = avatarurl;
        }

    }
} 