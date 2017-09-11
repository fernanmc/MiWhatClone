import { RouterExtensions } from 'nativescript-angular/router';
import { Component } from "@angular/core";
import { TextView } from "ui/text-view";
import { TextField } from "ui/text-field";
import firebase = require("nativescript-plugin-firebase");
import { TNSFancyAlert, TNSFancyAlertButton } from 'nativescript-fancyalert';

import * as camera from "nativescript-camera";
import { Image } from "ui/image";
import { isEnabled, enableLocationRequest, getCurrentLocation, watchLocation, distance, clearWatch } from "nativescript-geolocation";
import * as dialogs from "tns-core-modules/ui/dialogs";


@Component({
    selector: "ns-login",
    templateUrl: "login/login.component.html",
    styleUrls: ["login/login.component.css"]
})
export class LoginComponent {
    email:string;
    password: string;

    constructor(private routerExt: RouterExtensions){
      //  this.email="";
    }
    
    login(){
      //  alert("login email "+ this.email + " pass "+ this.password );
      console.log("email", this.email);
      firebase.login({
        type:firebase.LoginType.PASSWORD,
        passwordOptions: {
            email: this.email,
            password: this.password
        }
    }).then(
        (result)=>{
            TNSFancyAlert.showSuccess('Login!', 'Bienvenido de nuevo', 'Entrar!');
            
            this.routerExt.navigate(["/listChats"],{
                transition:{
                     name: "flip",
                     duration: 250,
                     curve:"linear"} 
             });
        },
        (errorMessage)=>{
            TNSFancyAlert.showError('Error!', 'Wow, ocurrio un error.', 'retry');
          
         } );
      
      
     }

     takePicture(){
        camera.takePicture()
        .then((imageAsset) => {
            console.log("Result is an image asset instance");
            let image = new Image();
            image.src = imageAsset;
        }).catch((err) => {
            console.log("Error -> " + err.message);
        });
    }

    enableLocationTap() { 
        if (!isEnabled()) {
            enableLocationRequest();
            alert("Localización confirmada");
        }else{
            alert("Permiso ya confirmado");
        }

       var  watchId = watchLocation(
            function (loc) {
                if (loc) {
                    console.log("Received location: " + loc.latitude);
                }
            }, 
            function(e){
                console.log("Error: " + e.message);
            }, 
            {desiredAccuracy: 3, updateDistance: 10, minimumUpdateTime : 1000 * 20}); // Should update every 20 seconds according to Googe documentation. Not verified.
    }
}

    
