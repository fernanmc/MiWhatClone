import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";


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
        alert("create");
        this.routerExt.navigate(["/login"],{
           transition:{
                name: "flip",
                duration: 250,
                curve:"linear"} 
        });
    }
 }
