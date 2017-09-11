import { RouterExtensions } from 'nativescript-angular/router';
import { Component, NgZone } from "@angular/core";
import firebase = require("nativescript-plugin-firebase");




@Component({
    selector: "ns-chatListado",
    templateUrl: "chat/chat.listado.component.html",
    styleUrls: ["chat/chat.listado.component.css"]
})
export class ChatListadoComponent {

    mockChat: Array<any>;

    constructor(private routerExt: RouterExtensions, private ngZone: NgZone) { 
        firebase.addValueEventListener((result:any)=>{
            this.ngZone.run(()=>{
                this.onQueryEvent(result);
            });
        }, "/chats");
    }

    ngOnInit() {
        this.mockChat = [];
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


     onQueryEvent(result){
        console.log("hit");
        if(result){
            if(result.error){
                console.dir("error", result.error);
            }
            else if (result.value){
                console.dir(result.value);
                this.mockChat = this.generateArray(result.value);
                
               console.dir(this.mockChat);
            }
      }
    }

    generateArray(obj){
        return Object.keys(obj).map((key)=>{return obj[key]});
    }

     newChat(){
        firebase.push(
            '/chats',
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
            }
            
        ).then(
            function (result) {
                console.log("created key: " + result.key);
            }
        );
    }
}

