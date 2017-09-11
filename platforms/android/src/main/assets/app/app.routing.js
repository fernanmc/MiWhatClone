"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chat_component_1 = require("./chat/chat.component");
var chat_listado_component_1 = require("./chat/chat.listado.component");
var create_user_component_1 = require("./login/create.user.component");
var login_component_1 = require("./login/login.component");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
/*import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
*/
var routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: login_component_1.LoginComponent },
    { path: "createUser", component: create_user_component_1.CreateUserComponent },
    { path: "listChats", component: chat_listado_component_1.ChatListadoComponent },
    { path: "chat/:id", component: chat_component_1.ChatComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdEQUFzRDtBQUN0RCx3RUFBcUU7QUFDckUsdUVBQW9FO0FBQ3BFLDJEQUF5RDtBQUN6RCxzQ0FBeUM7QUFDekMsc0RBQXVFO0FBR3ZFOztFQUVFO0FBQ0YsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUNyRCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7SUFDNUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSwyQ0FBbUIsRUFBRTtJQUN0RCxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLDZDQUFvQixFQUFFO0lBQ3RELEVBQUUsSUFBSSxFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUMsOEJBQWEsRUFBRTtDQUcvQyxDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGF0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGF0L2NoYXQuY29tcG9uZW50JztcbmltcG9ydCB7IENoYXRMaXN0YWRvQ29tcG9uZW50IH0gZnJvbSAnLi9jaGF0L2NoYXQubGlzdGFkby5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3JlYXRlVXNlckNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4vY3JlYXRlLnVzZXIuY29tcG9uZW50JztcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG4vKmltcG9ydCB7IEl0ZW1zQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEl0ZW1EZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW0tZGV0YWlsLmNvbXBvbmVudFwiO1xuKi9cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvbG9naW5cIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuICAgIHsgcGF0aDogXCJsb2dpblwiLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImNyZWF0ZVVzZXJcIiwgY29tcG9uZW50OiBDcmVhdGVVc2VyQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImxpc3RDaGF0c1wiLCBjb21wb25lbnQ6IENoYXRMaXN0YWRvQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOlwiY2hhdC86aWRcIiwgY29tcG9uZW50OkNoYXRDb21wb25lbnQgfVxuICAgIFxuICAgIFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH0iXX0=