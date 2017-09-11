import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import firebase = require("nativescript-plugin-firebase");
import { TNSFancyAlert, TNSFancyAlertButton } from 'nativescript-fancyalert';


@Component({
    selector: "ns-createUser",
    templateUrl: "login/create.user.component.html",
    styleUrls: ["login/login.component.css"]
})

export class CreateUserComponent {
    email:string;
    password: string;

    constructor(private routerExt: RouterExtensions){

    }
    create(){
       /// alert("create");
       console.log("email --------------",this.email, this.password);
        firebase.createUser({
            email: this.email,
            password: this.password
        }).then(
            (result)=>{
                TNSFancyAlert.showSuccess('Usuario creado!', 'Bienvenido de nuevo', 'Entrar!');
                this.routerExt.navigate(["/listChats"],{
                    transition:{
                         name: "flip",
                         duration: 250,
                         curve:"linear"} 
                 });
            },
            (errorMessage)=>{
                TNSFancyAlert.showError('Error!', 'No se ha podido crear el usuario.', 'retry');
                console.log(errorMessage);
             } 

        );
      
    }
 }
