"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("nativescript-angular/router");
var core_1 = require("@angular/core");
var ChatListadoComponent = (function () {
    function ChatListadoComponent(routerExt) {
        this.routerExt = routerExt;
    }
    ChatListadoComponent.prototype.ngOnInit = function () {
        this.mockChat = [
            {
                "id": 1,
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
                "id": 2,
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
    };
    ChatListadoComponent.prototype.elegirChat = function (id) {
        console.log("ID-----", id);
        this.routerExt.navigate(["/chat", id], {
            transition: {
                name: "flip",
                duration: 250,
                curve: "linear"
            }
        });
    };
    ChatListadoComponent = __decorate([
        core_1.Component({
            selector: "ns-chatListado",
            templateUrl: "chat/chat.listado.component.html",
            styleUrls: ["chat/chat.listado.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], ChatListadoComponent);
    return ChatListadoComponent;
}());
exports.ChatListadoComponent = ChatListadoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5saXN0YWRvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoYXQubGlzdGFkby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzREFBK0Q7QUFDL0Qsc0NBQTBDO0FBVTFDO0lBSUksOEJBQW9CLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQUksQ0FBQztJQUVwRCx1Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRztZQUNaO2dCQUNJLElBQUksRUFBQyxDQUFDO2dCQUNOLFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLFVBQVUsRUFBRTtvQkFDUixXQUFXLEVBQUUsWUFBWTtvQkFDekIsV0FBVyxFQUFFLGFBQWE7b0JBQzFCLFdBQVcsRUFBRSxhQUFhO2lCQUM3QjtnQkFDRCxVQUFVLEVBQUUsWUFBWTtnQkFDeEIsU0FBUyxFQUFFO29CQUNQLE1BQU0sRUFBRSxZQUFZO29CQUNwQixPQUFPLEVBQUUsNEJBQTRCO29CQUNyQyxTQUFTLEVBQUUsWUFBWTtvQkFDdkIsU0FBUyxFQUFFO3dCQUNQLFdBQVcsRUFBRSxZQUFZO3dCQUN6QixXQUFXLEVBQUUsYUFBYTtxQkFDN0I7aUJBQ0o7YUFDSjtZQUNEO2dCQUNJLElBQUksRUFBQyxDQUFDO2dCQUNOLFFBQVEsRUFBRSxpQ0FBaUM7Z0JBQzNDLFVBQVUsRUFBRTtvQkFDUixXQUFXLEVBQUUsWUFBWTtvQkFDekIsV0FBVyxFQUFFLGFBQWE7b0JBQzFCLFdBQVcsRUFBRSxhQUFhO2lCQUM3QjtnQkFDRCxVQUFVLEVBQUUsWUFBWTtnQkFDeEIsU0FBUyxFQUFFO29CQUNQLE1BQU0sRUFBRSxZQUFZO29CQUNwQixPQUFPLEVBQUUsNEJBQTRCO29CQUNyQyxTQUFTLEVBQUUsWUFBWTtvQkFDdkIsU0FBUyxFQUFFO3dCQUNQLFdBQVcsRUFBRSxZQUFZO3dCQUN6QixXQUFXLEVBQUUsYUFBYTtxQkFDN0I7aUJBQ0o7YUFDSjtTQUVKLENBQUM7SUFDTixDQUFDO0lBRUQseUNBQVUsR0FBVixVQUFXLEVBQVM7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUMsRUFBRSxDQUFDLEVBQUM7WUFDakMsVUFBVSxFQUFDO2dCQUNOLElBQUksRUFBRSxNQUFNO2dCQUNaLFFBQVEsRUFBRSxHQUFHO2dCQUNiLEtBQUssRUFBQyxRQUFRO2FBQUM7U0FDdEIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQTFETyxvQkFBb0I7UUFMaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLGtDQUFrQztZQUMvQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztTQUNqRCxDQUFDO3lDQUtpQyx5QkFBZ0I7T0FKdEMsb0JBQW9CLENBMkRoQztJQUFELDJCQUFDO0NBQUEsQUEzREQsSUEyREM7QUEzRFksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLWNoYXRMaXN0YWRvXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJjaGF0L2NoYXQubGlzdGFkby5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJjaGF0L2NoYXQubGlzdGFkby5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGF0TGlzdGFkb0NvbXBvbmVudCB7XHJcblxyXG4gICAgbW9ja0NoYXQ6IEFycmF5PGFueT47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHQ6IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMubW9ja0NoYXQgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjoxLFxyXG4gICAgICAgICAgICAgICAgXCJub21icmVcIjogXCJHcnVwbyBkZSBjaGF0IGRlIG5hdGl2ZVNjcmlwdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1c3Vhcmlvc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ1c3VhcmlvXzFcIjogXCJqb3JnZXVjYW5vXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ1c3VhcmlvXzJcIjogXCJqb3JnZXVjYW5vMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidXN1YXJpb18zXCI6IFwiam9yZ2V1Y2FubzNcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwiY3JlYWNpb25cIjogXCIxMC8wOS8yMDE3XCIsXHJcbiAgICAgICAgICAgICAgICBcImRpYWxvZ29cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIjEwLzA5LzIwMTdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInRleHRvXCI6IFwiSG9sYSBhbGd1aWVuIHZpbyBsYSBjbGFzZT9cIixcclxuICAgICAgICAgICAgICAgICAgICBcInVzdWFyaW9cIjogXCJqb3JnZXVjYW5vXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJyZWNpYmlvXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1c3VhcmlvXzFcIjogXCJqb3JnZXVjYW5vXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidXN1YXJpb18yXCI6IFwiam9yZ2V1Y2FubzNcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOjIsXHJcbiAgICAgICAgICAgICAgICBcIm5vbWJyZVwiOiBcIkdydXBvIGRlIGNoYXQgZGUgbmF0aXZlU2NyaXB0IDJcIixcclxuICAgICAgICAgICAgICAgIFwidXN1YXJpb3NcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwidXN1YXJpb18xXCI6IFwiam9yZ2V1Y2Fub1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidXN1YXJpb18yXCI6IFwiam9yZ2V1Y2FubzJcIixcclxuICAgICAgICAgICAgICAgICAgICBcInVzdWFyaW9fM1wiOiBcImpvcmdldWNhbm8zXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcImNyZWFjaW9uXCI6IFwiMTAvMDkvMjAxN1wiLFxyXG4gICAgICAgICAgICAgICAgXCJkaWFsb2dvXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCIxMC8wOS8yMDE3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0b1wiOiBcIkhvbGEgYWxndWllbiB2aW8gbGEgY2xhc2U/XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ1c3VhcmlvXCI6IFwiam9yZ2V1Y2Fub1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicmVjaWJpb1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidXN1YXJpb18xXCI6IFwiam9yZ2V1Y2Fub1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVzdWFyaW9fMlwiOiBcImpvcmdldWNhbm8zXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBlbGVnaXJDaGF0KGlkOm51bWJlcil7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJRC0tLS0tXCIsaWQpO1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0Lm5hdmlnYXRlKFtcIi9jaGF0XCIsaWRdLHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjp7XHJcbiAgICAgICAgICAgICAgICAgbmFtZTogXCJmbGlwXCIsXHJcbiAgICAgICAgICAgICAgICAgZHVyYXRpb246IDI1MCxcclxuICAgICAgICAgICAgICAgICBjdXJ2ZTpcImxpbmVhclwifSBcclxuICAgICAgICAgfSk7XHJcbiAgICAgfVxyXG59XHJcblxyXG4iXX0=