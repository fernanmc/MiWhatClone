import { ChatComponent } from './chat/chat.component';
import { ChatListadoComponent } from './chat/chat.listado.component';
import { CreateUserComponent } from './login/create.user.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

/*import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
*/
const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "createUser", component: CreateUserComponent },
    { path: "listChats", component: ChatListadoComponent },
    { path:"chat/:id", component:ChatComponent }
    
    
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }