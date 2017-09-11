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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0RBQStEO0FBQy9ELHNDQUEwQztBQUcxQyx1REFBMEQ7QUFDMUQsbUVBQTZFO0FBRTdFLDRDQUE4QztBQUM5QyxrQ0FBaUM7QUFDakMscUVBQXFJO0FBU3JJO0lBSUksd0JBQW9CLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzdDLGtCQUFrQjtJQUNwQixDQUFDO0lBRUQsOEJBQUssR0FBTDtRQUFBLGlCQTBCRTtRQXpCQSxpRUFBaUU7UUFDakUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDYixJQUFJLEVBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRO1lBQ2hDLGVBQWUsRUFBRTtnQkFDYixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7Z0JBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTthQUMxQjtTQUNKLENBQUMsQ0FBQyxJQUFJLENBQ0gsVUFBQyxNQUFNO1lBQ0gsdUNBQWEsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLHFCQUFxQixFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBRXRFLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUM7Z0JBQ25DLFVBQVUsRUFBQztvQkFDTixJQUFJLEVBQUUsTUFBTTtvQkFDWixRQUFRLEVBQUUsR0FBRztvQkFDYixLQUFLLEVBQUMsUUFBUTtpQkFBQzthQUN0QixDQUFDLENBQUM7UUFDUixDQUFDLEVBQ0QsVUFBQyxZQUFZO1lBQ1QsdUNBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLHdCQUF3QixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXhFLENBQUMsQ0FBRSxDQUFDO0lBR1IsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDRyxNQUFNLENBQUMsV0FBVyxFQUFFO2FBQ25CLElBQUksQ0FBQyxVQUFDLFVBQVU7WUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7WUFDakQsSUFBSSxLQUFLLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQztZQUN4QixLQUFLLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDBDQUFpQixHQUFqQjtRQUNJLEVBQUUsQ0FBQyxDQUFDLENBQUMsb0NBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNmLGdEQUFxQixFQUFFLENBQUM7WUFDeEIsS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDckMsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDbkMsQ0FBQztRQUVGLElBQUssT0FBTyxHQUFHLHdDQUFhLENBQ3ZCLFVBQVUsR0FBRztZQUNULEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEQsQ0FBQztRQUNMLENBQUMsRUFDRCxVQUFTLENBQUM7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxFQUNELEVBQUMsZUFBZSxFQUFFLENBQUMsRUFBRSxjQUFjLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFHLElBQUksR0FBRyxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUMsaUZBQWlGO0lBQ25LLENBQUM7SUFqRVEsY0FBYztRQUwxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztTQUMzQyxDQUFDO3lDQUtpQyx5QkFBZ0I7T0FKdEMsY0FBYyxDQWtFMUI7SUFBRCxxQkFBQztDQUFBLEFBbEVELElBa0VDO0FBbEVZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFRleHRWaWV3IH0gZnJvbSBcInVpL3RleHQtdmlld1wiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuaW1wb3J0IHsgVE5TRmFuY3lBbGVydCwgVE5TRmFuY3lBbGVydEJ1dHRvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC1mYW5jeWFsZXJ0JztcclxuXHJcbmltcG9ydCAqIGFzIGNhbWVyYSBmcm9tIFwibmF0aXZlc2NyaXB0LWNhbWVyYVwiO1xyXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gXCJ1aS9pbWFnZVwiO1xyXG5pbXBvcnQgeyBpc0VuYWJsZWQsIGVuYWJsZUxvY2F0aW9uUmVxdWVzdCwgZ2V0Q3VycmVudExvY2F0aW9uLCB3YXRjaExvY2F0aW9uLCBkaXN0YW5jZSwgY2xlYXJXYXRjaCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1sb2dpblwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwibG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wibG9naW4vbG9naW4uY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xyXG4gICAgZW1haWw6c3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dDogUm91dGVyRXh0ZW5zaW9ucyl7XHJcbiAgICAgIC8vICB0aGlzLmVtYWlsPVwiXCI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxvZ2luKCl7XHJcbiAgICAgIC8vICBhbGVydChcImxvZ2luIGVtYWlsIFwiKyB0aGlzLmVtYWlsICsgXCIgcGFzcyBcIisgdGhpcy5wYXNzd29yZCApO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImVtYWlsXCIsIHRoaXMuZW1haWwpO1xyXG4gICAgICBmaXJlYmFzZS5sb2dpbih7XHJcbiAgICAgICAgdHlwZTpmaXJlYmFzZS5Mb2dpblR5cGUuUEFTU1dPUkQsXHJcbiAgICAgICAgcGFzc3dvcmRPcHRpb25zOiB7XHJcbiAgICAgICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZFxyXG4gICAgICAgIH1cclxuICAgIH0pLnRoZW4oXHJcbiAgICAgICAgKHJlc3VsdCk9PntcclxuICAgICAgICAgICAgVE5TRmFuY3lBbGVydC5zaG93U3VjY2VzcygnTG9naW4hJywgJ0JpZW52ZW5pZG8gZGUgbnVldm8nLCAnRW50cmFyIScpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHQubmF2aWdhdGUoW1wiL2xpc3RDaGF0c1wiXSx7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOntcclxuICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJmbGlwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgIGN1cnZlOlwibGluZWFyXCJ9IFxyXG4gICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyb3JNZXNzYWdlKT0+e1xyXG4gICAgICAgICAgICBUTlNGYW5jeUFsZXJ0LnNob3dFcnJvcignRXJyb3IhJywgJ1dvdywgb2N1cnJpbyB1biBlcnJvci4nLCAncmV0cnknKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICB9ICk7XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICB9XHJcblxyXG4gICAgIHRha2VQaWN0dXJlKCl7XHJcbiAgICAgICAgY2FtZXJhLnRha2VQaWN0dXJlKClcclxuICAgICAgICAudGhlbigoaW1hZ2VBc3NldCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlc3VsdCBpcyBhbiBpbWFnZSBhc3NldCBpbnN0YW5jZVwiKTtcclxuICAgICAgICAgICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IGltYWdlQXNzZXQ7XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIC0+IFwiICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGVuYWJsZUxvY2F0aW9uVGFwKCkgeyBcclxuICAgICAgICBpZiAoIWlzRW5hYmxlZCgpKSB7XHJcbiAgICAgICAgICAgIGVuYWJsZUxvY2F0aW9uUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICBhbGVydChcIkxvY2FsaXphY2nDs24gY29uZmlybWFkYVwiKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgYWxlcnQoXCJQZXJtaXNvIHlhIGNvbmZpcm1hZG9cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgIHZhciAgd2F0Y2hJZCA9IHdhdGNoTG9jYXRpb24oXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChsb2MpIHtcclxuICAgICAgICAgICAgICAgIGlmIChsb2MpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlY2VpdmVkIGxvY2F0aW9uOiBcIiArIGxvYy5sYXRpdHVkZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgIHtkZXNpcmVkQWNjdXJhY3k6IDMsIHVwZGF0ZURpc3RhbmNlOiAxMCwgbWluaW11bVVwZGF0ZVRpbWUgOiAxMDAwICogMjB9KTsgLy8gU2hvdWxkIHVwZGF0ZSBldmVyeSAyMCBzZWNvbmRzIGFjY29yZGluZyB0byBHb29nZSBkb2N1bWVudGF0aW9uLiBOb3QgdmVyaWZpZWQuXHJcbiAgICB9XHJcbn1cclxuXHJcbiAgICBcclxuIl19