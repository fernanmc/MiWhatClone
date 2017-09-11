import { RouterExtensions } from 'nativescript-angular/router';
import { Component } from "@angular/core";




@Component({
    selector: "ns-chatListado",
    templateUrl: "chat/chat.listado.component.html",
    styleUrls: ["chat/chat.listado.component.css"]
})
export class ChatListadoComponent {

    mockChat: Array<any>;

    constructor(private routerExt: RouterExtensions) { }

    ngOnInit() {
        this.mockChat = [
            {
                "id":1,
                "nombre": "Grupo de chat de nativeScript",
                "usuarios": {
                    "usuario_1": "jorgeucano",
                    "usuario_2": "jorgeucano2",
                    "usuario_3": "jorgeucano3"
                },
                "creacion": "10/09/2017",
                "dialogo": {
                    "date": "10/09/2017",
                    "texto": "Hola alguien vio la clase?",
                    "usuario": "jorgeucano",
                    "recibio": {
                        "usuario_1": "jorgeucano",
                        "usuario_2": "jorgeucano3"
                    }
                }
            },
            {
                "id":2,
                "nombre": "Grupo de chat de nativeScript 2",
                "usuarios": {
                    "usuario_1": "jorgeucano",
                    "usuario_2": "jorgeucano2",
                    "usuario_3": "jorgeucano3"
                },
                "creacion": "10/09/2017",
                "dialogo": {
                    "date": "10/09/2017",
                    "texto": "Hola alguien vio la clase?",
                    "usuario": "jorgeucano",
                    "recibio": {
                        "usuario_1": "jorgeucano",
                        "usuario_2": "jorgeucano3"
                    }
                }
            }

        ];
    }

    elegirChat(id:number){
        console.log("ID-----",id);
        this.routerExt.navigate(["/chat",id],{
            transition:{
                 name: "flip",
                 duration: 250,
                 curve:"linear"} 
         });
     }
}

