import { ActivatedRoute } from '@angular/router';
import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";


@Component({
    selector: "ns-chat",
    templateUrl: "chat/chat.component.html",
    styleUrls: ["chat/chat.listado.component.css"]
})

export class ChatComponent {
    id: number;
    mockChat: Array<any>;

    constructor(private route: ActivatedRoute) {
      this.route.params.subscribe(
           (params) => {
               this.id  = +params['id'];
            }
        );
    }

    ngOnInit(){
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
            "dialogo":[ 
            {
                "date": "10/09/2017",
                "texto": "Hola alguien vio la clase?",
                "usuario": "jorgeucano",
                "recibio": {
                    "usuario_1": "jorgeucano",
                    "usuario_2": "jorgeucano3"
                }
            },
            {
                "date": "10/09/2017",
                "texto": "Si, fue un mojon",
                "usuario": "jorgeucano2",
                 "recibio": {
                    "usuario_1": "jorgeucano",
                    "usuario_2": "jorgeucano3"
                }
            },
            {
                "date": "10/09/2017",
                "texto": "Dos horas peleandose con los arrays xD",
                "usuario": "jorgeucano2",
                 "recibio": {
                    "usuario_1": "jorgeucano",
                    "usuario_2": "jorgeucano3"
                }
            }
        ]
        }];
    }
    
 }
