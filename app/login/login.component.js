"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("nativescript-angular/router");
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var nativescript_fancyalert_1 = require("nativescript-fancyalert");
var camera = require("nativescript-camera");
var image_1 = require("ui/image");
var nativescript_geolocation_1 = require("nativescript-geolocation");
var LoginComponent = (function () {
    function LoginComponent(routerExt) {
        this.routerExt = routerExt;
        //  this.email="";
    }
    LoginComponent.prototype.ngOnInit = function () {
        /*  firebase.getCurrentUser().then(
              (user)=>{
                //  console.dir(user);
                //  this.routerExt.navigate(["/listChats"]);
              },
              (error)=>{
                 // console.log(error);
                 // TNSFancyAlert.showSuccess('Login!', error, 'Entrar!');
              }
          );*/
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        //  alert("login email "+ this.email + " pass "+ this.password );
        console.log("email", this.email);
        firebase.login({
            type: firebase.LoginType.PASSWORD,
            passwordOptions: {
                email: this.email,
                password: this.password
            }
        }).then(function (result) {
            nativescript_fancyalert_1.TNSFancyAlert.showSuccess('Login!', 'Bienvenido de nuevo', 'Entrar!');
            _this.routerExt.navigate(["/listChats"], {
                transition: {
                    name: "flip",
                    duration: 250,
                    curve: "linear"
                }
            });
        }, function (errorMessage) {
            nativescript_fancyalert_1.TNSFancyAlert.showError('Error!', 'Wow, ocurrio un error.', 'retry');
        });
    };
    LoginComponent.prototype.takePicture = function () {
        camera.takePicture()
            .then(function (imageAsset) {
            console.log("Result is an image asset instance");
            var image = new image_1.Image();
            image.src = imageAsset;
        }).catch(function (err) {
            console.log("Error -> " + err.message);
        });
    };
    LoginComponent.prototype.enableLocationTap = function () {
        if (!nativescript_geolocation_1.isEnabled()) {
            nativescript_geolocation_1.enableLocationRequest();
            alert("Localización confirmada");
        }
        else {
            alert("Permiso ya confirmado");
        }
        var watchId = nativescript_geolocation_1.watchLocation(function (loc) {
            if (loc) {
                console.log("Received location: " + loc.latitude);
            }
        }, function (e) {
            console.log("Error: " + e.message);
        }, { desiredAccuracy: 3, updateDistance: 10, minimumUpdateTime: 1000 * 20 }); // Should update every 20 seconds according to Googe documentation. Not verified.
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "ns-login",
            templateUrl: "login/login.component.html",
            styleUrls: ["login/login.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0RBQStEO0FBQy9ELHNDQUEwQztBQUcxQyx1REFBMEQ7QUFDMUQsbUVBQTZFO0FBRTdFLDRDQUE4QztBQUM5QyxrQ0FBaUM7QUFDakMscUVBQXFJO0FBU3JJO0lBSUksd0JBQW9CLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzdDLGtCQUFrQjtJQUNwQixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNFOzs7Ozs7Ozs7Y0FTTTtJQUNSLENBQUM7SUFFRCw4QkFBSyxHQUFMO1FBQUEsaUJBMEJFO1FBekJBLGlFQUFpRTtRQUNqRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNiLElBQUksRUFBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVE7WUFDaEMsZUFBZSxFQUFFO2dCQUNiLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2FBQzFCO1NBQ0osQ0FBQyxDQUFDLElBQUksQ0FDSCxVQUFDLE1BQU07WUFDSCx1Q0FBYSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUscUJBQXFCLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFFdEUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBQztnQkFDbkMsVUFBVSxFQUFDO29CQUNOLElBQUksRUFBRSxNQUFNO29CQUNaLFFBQVEsRUFBRSxHQUFHO29CQUNiLEtBQUssRUFBQyxRQUFRO2lCQUFDO2FBQ3RCLENBQUMsQ0FBQztRQUNSLENBQUMsRUFDRCxVQUFDLFlBQVk7WUFDVCx1Q0FBYSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsd0JBQXdCLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFeEUsQ0FBQyxDQUFFLENBQUM7SUFHUixDQUFDO0lBRUQsb0NBQVcsR0FBWDtRQUNHLE1BQU0sQ0FBQyxXQUFXLEVBQUU7YUFDbkIsSUFBSSxDQUFDLFVBQUMsVUFBVTtZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQztZQUNqRCxJQUFJLEtBQUssR0FBRyxJQUFJLGFBQUssRUFBRSxDQUFDO1lBQ3hCLEtBQUssQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQUc7WUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsMENBQWlCLEdBQWpCO1FBQ0ksRUFBRSxDQUFDLENBQUMsQ0FBQyxvQ0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2YsZ0RBQXFCLEVBQUUsQ0FBQztZQUN4QixLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUNyQyxDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDRixLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUNuQyxDQUFDO1FBRUYsSUFBSyxPQUFPLEdBQUcsd0NBQWEsQ0FDdkIsVUFBVSxHQUFHO1lBQ1QsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0RCxDQUFDO1FBQ0wsQ0FBQyxFQUNELFVBQVMsQ0FBQztZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QyxDQUFDLEVBQ0QsRUFBQyxlQUFlLEVBQUUsQ0FBQyxFQUFFLGNBQWMsRUFBRSxFQUFFLEVBQUUsaUJBQWlCLEVBQUcsSUFBSSxHQUFHLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQyxpRkFBaUY7SUFDbkssQ0FBQztJQTlFUSxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQzNDLENBQUM7eUNBS2lDLHlCQUFnQjtPQUp0QyxjQUFjLENBK0UxQjtJQUFELHFCQUFDO0NBQUEsQUEvRUQsSUErRUM7QUEvRVksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVGV4dFZpZXcgfSBmcm9tIFwidWkvdGV4dC12aWV3XCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5pbXBvcnQgeyBUTlNGYW5jeUFsZXJ0LCBUTlNGYW5jeUFsZXJ0QnV0dG9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWZhbmN5YWxlcnQnO1xyXG5cclxuaW1wb3J0ICogYXMgY2FtZXJhIGZyb20gXCJuYXRpdmVzY3JpcHQtY2FtZXJhXCI7XHJcbmltcG9ydCB7IEltYWdlIH0gZnJvbSBcInVpL2ltYWdlXCI7XHJcbmltcG9ydCB7IGlzRW5hYmxlZCwgZW5hYmxlTG9jYXRpb25SZXF1ZXN0LCBnZXRDdXJyZW50TG9jYXRpb24sIHdhdGNoTG9jYXRpb24sIGRpc3RhbmNlLCBjbGVhcldhdGNoIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLWxvZ2luXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJsb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJsb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XHJcbiAgICBlbWFpbDpzdHJpbmc7XHJcbiAgICBwYXNzd29yZDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0OiBSb3V0ZXJFeHRlbnNpb25zKXtcclxuICAgICAgLy8gIHRoaXMuZW1haWw9XCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAvKiAgZmlyZWJhc2UuZ2V0Q3VycmVudFVzZXIoKS50aGVuKFxyXG4gICAgICAgICAgICAodXNlcik9PntcclxuICAgICAgICAgICAgICAvLyAgY29uc29sZS5kaXIodXNlcik7XHJcbiAgICAgICAgICAgICAgLy8gIHRoaXMucm91dGVyRXh0Lm5hdmlnYXRlKFtcIi9saXN0Q2hhdHNcIl0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3IpPT57XHJcbiAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgLy8gVE5TRmFuY3lBbGVydC5zaG93U3VjY2VzcygnTG9naW4hJywgZXJyb3IsICdFbnRyYXIhJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApOyovXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxvZ2luKCl7XHJcbiAgICAgIC8vICBhbGVydChcImxvZ2luIGVtYWlsIFwiKyB0aGlzLmVtYWlsICsgXCIgcGFzcyBcIisgdGhpcy5wYXNzd29yZCApO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImVtYWlsXCIsIHRoaXMuZW1haWwpO1xyXG4gICAgICBmaXJlYmFzZS5sb2dpbih7XHJcbiAgICAgICAgdHlwZTpmaXJlYmFzZS5Mb2dpblR5cGUuUEFTU1dPUkQsXHJcbiAgICAgICAgcGFzc3dvcmRPcHRpb25zOiB7XHJcbiAgICAgICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZFxyXG4gICAgICAgIH1cclxuICAgIH0pLnRoZW4oXHJcbiAgICAgICAgKHJlc3VsdCk9PntcclxuICAgICAgICAgICAgVE5TRmFuY3lBbGVydC5zaG93U3VjY2VzcygnTG9naW4hJywgJ0JpZW52ZW5pZG8gZGUgbnVldm8nLCAnRW50cmFyIScpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHQubmF2aWdhdGUoW1wiL2xpc3RDaGF0c1wiXSx7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOntcclxuICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJmbGlwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgIGN1cnZlOlwibGluZWFyXCJ9IFxyXG4gICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyb3JNZXNzYWdlKT0+e1xyXG4gICAgICAgICAgICBUTlNGYW5jeUFsZXJ0LnNob3dFcnJvcignRXJyb3IhJywgJ1dvdywgb2N1cnJpbyB1biBlcnJvci4nLCAncmV0cnknKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICB9ICk7XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICB9XHJcblxyXG4gICAgIHRha2VQaWN0dXJlKCl7XHJcbiAgICAgICAgY2FtZXJhLnRha2VQaWN0dXJlKClcclxuICAgICAgICAudGhlbigoaW1hZ2VBc3NldCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlc3VsdCBpcyBhbiBpbWFnZSBhc3NldCBpbnN0YW5jZVwiKTtcclxuICAgICAgICAgICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IGltYWdlQXNzZXQ7XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIC0+IFwiICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGVuYWJsZUxvY2F0aW9uVGFwKCkgeyBcclxuICAgICAgICBpZiAoIWlzRW5hYmxlZCgpKSB7XHJcbiAgICAgICAgICAgIGVuYWJsZUxvY2F0aW9uUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICBhbGVydChcIkxvY2FsaXphY2nDs24gY29uZmlybWFkYVwiKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgYWxlcnQoXCJQZXJtaXNvIHlhIGNvbmZpcm1hZG9cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgIHZhciAgd2F0Y2hJZCA9IHdhdGNoTG9jYXRpb24oXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChsb2MpIHtcclxuICAgICAgICAgICAgICAgIGlmIChsb2MpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlY2VpdmVkIGxvY2F0aW9uOiBcIiArIGxvYy5sYXRpdHVkZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgIHtkZXNpcmVkQWNjdXJhY3k6IDMsIHVwZGF0ZURpc3RhbmNlOiAxMCwgbWluaW11bVVwZGF0ZVRpbWUgOiAxMDAwICogMjB9KTsgLy8gU2hvdWxkIHVwZGF0ZSBldmVyeSAyMCBzZWNvbmRzIGFjY29yZGluZyB0byBHb29nZSBkb2N1bWVudGF0aW9uLiBOb3QgdmVyaWZpZWQuXHJcbiAgICB9XHJcbn1cclxuXHJcbiAgICBcclxuIl19