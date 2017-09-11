"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var firebase = require("nativescript-plugin-firebase");
var nativescript_fancyalert_1 = require("nativescript-fancyalert");
var CreateUserComponent = (function () {
    function CreateUserComponent(routerExt) {
        this.routerExt = routerExt;
    }
    CreateUserComponent.prototype.create = function () {
        var _this = this;
        /// alert("create");
        console.log("email --------------", this.email, this.password);
        firebase.createUser({
            email: this.email,
            password: this.password
        }).then(function (result) {
            nativescript_fancyalert_1.TNSFancyAlert.showSuccess('Usuario creado!', 'Bienvenido de nuevo', 'Entrar!');
            _this.routerExt.navigate(["/listChats"], {
                transition: {
                    name: "flip",
                    duration: 250,
                    curve: "linear"
                }
            });
        }, function (errorMessage) {
            nativescript_fancyalert_1.TNSFancyAlert.showError('Error!', 'No se ha podido crear el usuario.', 'retry');
            console.log(errorMessage);
        });
    };
    CreateUserComponent = __decorate([
        core_1.Component({
            selector: "ns-createUser",
            templateUrl: "login/create.user.component.html",
            styleUrls: ["login/login.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], CreateUserComponent);
    return CreateUserComponent;
}());
exports.CreateUserComponent = CreateUserComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLnVzZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlLnVzZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLHNEQUErRDtBQUMvRCx1REFBMEQ7QUFDMUQsbUVBQTZFO0FBUzdFO0lBSUksNkJBQW9CLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBRS9DLENBQUM7SUFDRCxvQ0FBTSxHQUFOO1FBQUEsaUJBdUJDO1FBdEJFLG9CQUFvQjtRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdELFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFDaEIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUMxQixDQUFDLENBQUMsSUFBSSxDQUNILFVBQUMsTUFBTTtZQUNILHVDQUFhLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLHFCQUFxQixFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQy9FLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUM7Z0JBQ25DLFVBQVUsRUFBQztvQkFDTixJQUFJLEVBQUUsTUFBTTtvQkFDWixRQUFRLEVBQUUsR0FBRztvQkFDYixLQUFLLEVBQUMsUUFBUTtpQkFBQzthQUN0QixDQUFDLENBQUM7UUFDUixDQUFDLEVBQ0QsVUFBQyxZQUFZO1lBQ1QsdUNBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLG1DQUFtQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ2hGLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUVMLENBQUM7SUFFTixDQUFDO0lBOUJRLG1CQUFtQjtRQU4vQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLGtDQUFrQztZQUMvQyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztTQUMzQyxDQUFDO3lDQU1pQyx5QkFBZ0I7T0FKdEMsbUJBQW1CLENBK0I5QjtJQUFELDBCQUFDO0NBQUEsQUEvQkYsSUErQkU7QUEvQlcsa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbmltcG9ydCB7IFROU0ZhbmN5QWxlcnQsIFROU0ZhbmN5QWxlcnRCdXR0b24gfSBmcm9tICduYXRpdmVzY3JpcHQtZmFuY3lhbGVydCc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1jcmVhdGVVc2VyXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJsb2dpbi9jcmVhdGUudXNlci5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJsb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ3JlYXRlVXNlckNvbXBvbmVudCB7XHJcbiAgICBlbWFpbDpzdHJpbmc7XHJcbiAgICBwYXNzd29yZDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0OiBSb3V0ZXJFeHRlbnNpb25zKXtcclxuXHJcbiAgICB9XHJcbiAgICBjcmVhdGUoKXtcclxuICAgICAgIC8vLyBhbGVydChcImNyZWF0ZVwiKTtcclxuICAgICAgIGNvbnNvbGUubG9nKFwiZW1haWwgLS0tLS0tLS0tLS0tLS1cIix0aGlzLmVtYWlsLCB0aGlzLnBhc3N3b3JkKTtcclxuICAgICAgICBmaXJlYmFzZS5jcmVhdGVVc2VyKHtcclxuICAgICAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkXHJcbiAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgKHJlc3VsdCk9PntcclxuICAgICAgICAgICAgICAgIFROU0ZhbmN5QWxlcnQuc2hvd1N1Y2Nlc3MoJ1VzdWFyaW8gY3JlYWRvIScsICdCaWVudmVuaWRvIGRlIG51ZXZvJywgJ0VudHJhciEnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0Lm5hdmlnYXRlKFtcIi9saXN0Q2hhdHNcIl0se1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJmbGlwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjUwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY3VydmU6XCJsaW5lYXJcIn0gXHJcbiAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnJvck1lc3NhZ2UpPT57XHJcbiAgICAgICAgICAgICAgICBUTlNGYW5jeUFsZXJ0LnNob3dFcnJvcignRXJyb3IhJywgJ05vIHNlIGhhIHBvZGlkbyBjcmVhciBlbCB1c3VhcmlvLicsICdyZXRyeScpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgIH0gXHJcblxyXG4gICAgICAgICk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gfVxyXG4iXX0=