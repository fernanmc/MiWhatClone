"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("nativescript-angular/router");
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var ChatListadoComponent = (function () {
    function ChatListadoComponent(routerExt, ngZone) {
        var _this = this;
        this.routerExt = routerExt;
        this.ngZone = ngZone;
        firebase.addValueEventListener(function (result) {
            _this.ngZone.run(function () {
                _this.onQueryEvent(result);
            });
        }, "/chats");
    }
    ChatListadoComponent.prototype.ngOnInit = function () {
        this.mockChat = [];
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
    ChatListadoComponent.prototype.onQueryEvent = function (result) {
        console.log("hit");
        if (result) {
            if (result.error) {
                console.dir("error", result.error);
            }
            else if (result.value) {
                console.dir(result.value);
                this.mockChat = this.generateArray(result.value);
                console.dir(this.mockChat);
            }
        }
    };
    ChatListadoComponent.prototype.generateArray = function (obj) {
        return Object.keys(obj).map(function (key) { return obj[key]; });
    };
    ChatListadoComponent.prototype.newChat = function () {
        firebase.push('/chats', {
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
        }).then(function (result) {
            console.log("created key: " + result.key);
        });
    };
    ChatListadoComponent = __decorate([
        core_1.Component({
            selector: "ns-chatListado",
            templateUrl: "chat/chat.listado.component.html",
            styleUrls: ["chat/chat.listado.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, core_1.NgZone])
    ], ChatListadoComponent);
    return ChatListadoComponent;
}());
exports.ChatListadoComponent = ChatListadoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5saXN0YWRvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoYXQubGlzdGFkby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzREFBK0Q7QUFDL0Qsc0NBQWtEO0FBQ2xELHVEQUEwRDtBQVUxRDtJQUlJLDhCQUFvQixTQUEyQixFQUFVLE1BQWM7UUFBdkUsaUJBTUM7UUFObUIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ25FLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxVQUFDLE1BQVU7WUFDdEMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ1osS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCx5Q0FBVSxHQUFWLFVBQVcsRUFBUztRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQyxFQUFFLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBQyxFQUFFLENBQUMsRUFBQztZQUNqQyxVQUFVLEVBQUM7Z0JBQ04sSUFBSSxFQUFFLE1BQU07Z0JBQ1osUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsS0FBSyxFQUFDLFFBQVE7YUFBQztTQUN0QixDQUFDLENBQUM7SUFDUCxDQUFDO0lBR0QsMkNBQVksR0FBWixVQUFhLE1BQU07UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsQ0FBQSxDQUFDO1lBQ1AsRUFBRSxDQUFBLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUM7Z0JBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZDLENBQUM7WUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUM7Z0JBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUVsRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5QixDQUFDO1FBQ1AsQ0FBQztJQUNILENBQUM7SUFFRCw0Q0FBYSxHQUFiLFVBQWMsR0FBRztRQUNiLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUEsQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVBLHNDQUFPLEdBQVA7UUFDRyxRQUFRLENBQUMsSUFBSSxDQUNULFFBQVEsRUFDUjtZQUNJLElBQUksRUFBQyxDQUFDO1lBQ04sUUFBUSxFQUFFLCtCQUErQjtZQUN6QyxVQUFVLEVBQUU7Z0JBQ1IsV0FBVyxFQUFFLFlBQVk7Z0JBQ3pCLFdBQVcsRUFBRSxhQUFhO2dCQUMxQixXQUFXLEVBQUUsYUFBYTthQUM3QjtZQUNELFVBQVUsRUFBRSxZQUFZO1lBQ3hCLFNBQVMsRUFBRTtnQkFDUCxNQUFNLEVBQUUsWUFBWTtnQkFDcEIsT0FBTyxFQUFFLDRCQUE0QjtnQkFDckMsU0FBUyxFQUFFLFlBQVk7Z0JBQ3ZCLFNBQVMsRUFBRTtvQkFDUCxXQUFXLEVBQUUsWUFBWTtvQkFDekIsV0FBVyxFQUFFLGFBQWE7aUJBQzdCO2FBQ0o7U0FDSixDQUVKLENBQUMsSUFBSSxDQUNGLFVBQVUsTUFBTTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUExRVEsb0JBQW9CO1FBTGhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7U0FDakQsQ0FBQzt5Q0FLaUMseUJBQWdCLEVBQWtCLGFBQU07T0FKOUQsb0JBQW9CLENBMkVoQztJQUFELDJCQUFDO0NBQUEsQUEzRUQsSUEyRUM7QUEzRVksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcblxyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLWNoYXRMaXN0YWRvXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJjaGF0L2NoYXQubGlzdGFkby5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJjaGF0L2NoYXQubGlzdGFkby5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGF0TGlzdGFkb0NvbXBvbmVudCB7XHJcblxyXG4gICAgbW9ja0NoYXQ6IEFycmF5PGFueT47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHQ6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHsgXHJcbiAgICAgICAgZmlyZWJhc2UuYWRkVmFsdWVFdmVudExpc3RlbmVyKChyZXN1bHQ6YW55KT0+e1xyXG4gICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCk9PntcclxuICAgICAgICAgICAgICAgIHRoaXMub25RdWVyeUV2ZW50KHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIFwiL2NoYXRzXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMubW9ja0NoYXQgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBlbGVnaXJDaGF0KGlkOm51bWJlcil7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJRC0tLS0tXCIsaWQpO1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0Lm5hdmlnYXRlKFtcIi9jaGF0XCIsaWRdLHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjp7XHJcbiAgICAgICAgICAgICAgICAgbmFtZTogXCJmbGlwXCIsXHJcbiAgICAgICAgICAgICAgICAgZHVyYXRpb246IDI1MCxcclxuICAgICAgICAgICAgICAgICBjdXJ2ZTpcImxpbmVhclwifSBcclxuICAgICAgICAgfSk7XHJcbiAgICAgfVxyXG5cclxuXHJcbiAgICAgb25RdWVyeUV2ZW50KHJlc3VsdCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJoaXRcIik7XHJcbiAgICAgICAgaWYocmVzdWx0KXtcclxuICAgICAgICAgICAgaWYocmVzdWx0LmVycm9yKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGlyKFwiZXJyb3JcIiwgcmVzdWx0LmVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChyZXN1bHQudmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5kaXIocmVzdWx0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9ja0NoYXQgPSB0aGlzLmdlbmVyYXRlQXJyYXkocmVzdWx0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBjb25zb2xlLmRpcih0aGlzLm1vY2tDaGF0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVBcnJheShvYmope1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLm1hcCgoa2V5KT0+e3JldHVybiBvYmpba2V5XX0pO1xyXG4gICAgfVxyXG5cclxuICAgICBuZXdDaGF0KCl7XHJcbiAgICAgICAgZmlyZWJhc2UucHVzaChcclxuICAgICAgICAgICAgJy9jaGF0cycsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjoxLFxyXG4gICAgICAgICAgICAgICAgXCJub21icmVcIjogXCJHcnVwbyBkZSBjaGF0IGRlIG5hdGl2ZVNjcmlwdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1c3Vhcmlvc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ1c3VhcmlvXzFcIjogXCJqb3JnZXVjYW5vXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ1c3VhcmlvXzJcIjogXCJqb3JnZXVjYW5vMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidXN1YXJpb18zXCI6IFwiam9yZ2V1Y2FubzNcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwiY3JlYWNpb25cIjogXCIxMC8wOS8yMDE3XCIsXHJcbiAgICAgICAgICAgICAgICBcImRpYWxvZ29cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIjEwLzA5LzIwMTdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInRleHRvXCI6IFwiSG9sYSBhbGd1aWVuIHZpbyBsYSBjbGFzZT9cIixcclxuICAgICAgICAgICAgICAgICAgICBcInVzdWFyaW9cIjogXCJqb3JnZXVjYW5vXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJyZWNpYmlvXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1c3VhcmlvXzFcIjogXCJqb3JnZXVjYW5vXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidXN1YXJpb18yXCI6IFwiam9yZ2V1Y2FubzNcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICApLnRoZW4oXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlZCBrZXk6IFwiICsgcmVzdWx0LmtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=