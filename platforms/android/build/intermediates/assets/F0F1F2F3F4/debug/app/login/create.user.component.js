"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var CreateUserComponent = (function () {
    function CreateUserComponent(routerExt) {
        this.routerExt = routerExt;
    }
    CreateUserComponent.prototype.create = function () {
        alert("create");
        this.routerExt.navigate(["/login"], {
            transition: {
                name: "flip",
                duration: 250,
                curve: "linear"
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLnVzZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlLnVzZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLHNEQUErRDtBQVMvRDtJQUlJLDZCQUFvQixTQUEyQjtRQUEzQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUUvQyxDQUFDO0lBQ0Qsb0NBQU0sR0FBTjtRQUNJLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFDO1lBQ2hDLFVBQVUsRUFBQztnQkFDTixJQUFJLEVBQUUsTUFBTTtnQkFDWixRQUFRLEVBQUUsR0FBRztnQkFDYixLQUFLLEVBQUMsUUFBUTthQUFDO1NBQ3RCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFmUSxtQkFBbUI7UUFOL0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7U0FDM0MsQ0FBQzt5Q0FNaUMseUJBQWdCO09BSnRDLG1CQUFtQixDQWdCOUI7SUFBRCwwQkFBQztDQUFBLEFBaEJGLElBZ0JFO0FBaEJXLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1jcmVhdGVVc2VyXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJsb2dpbi9jcmVhdGUudXNlci5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJsb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ3JlYXRlVXNlckNvbXBvbmVudCB7XHJcbiAgICBlbWFpbDpzdHJpbmc7XHJcbiAgICBwYXNzd29yZDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0OiBSb3V0ZXJFeHRlbnNpb25zKXtcclxuXHJcbiAgICB9XHJcbiAgICBjcmVhdGUoKXtcclxuICAgICAgICBhbGVydChcImNyZWF0ZVwiKTtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbXCIvbG9naW5cIl0se1xyXG4gICAgICAgICAgIHRyYW5zaXRpb246e1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJmbGlwXCIsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjUwLFxyXG4gICAgICAgICAgICAgICAgY3VydmU6XCJsaW5lYXJcIn0gXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiB9XHJcbiJdfQ==