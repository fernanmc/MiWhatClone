"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var ChatComponent = (function () {
    function ChatComponent(route) {
        var _this = this;
        this.route = route;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
        });
    }
    ChatComponent.prototype.ngOnInit = function () {
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
                "dialogo": [
                    {
                        "date": "10/09/2017",
                        "texto": "Hola alguien vio la clase?",
                        "usuario": "jorgeucano",
                        "recibio": {
                            "usuario_1": "jorgeucano",
                            "usuario_2": "jorgeucano3"
                        }
                    },
                    {
                        "date": "10/09/2017",
                        "texto": "Si, fue un mojon",
                        "usuario": "jorgeucano2",
                        "recibio": {
                            "usuario_1": "jorgeucano",
                            "usuario_2": "jorgeucano3"
                        }
                    },
                    {
                        "date": "10/09/2017",
                        "texto": "Dos horas peleandose con los arrays xD",
                        "usuario": "jorgeucano2",
                        "recibio": {
                            "usuario_1": "jorgeucano",
                            "usuario_2": "jorgeucano3"
                        }
                    }
                ]
            }
        ];
    };
    ChatComponent = __decorate([
        core_1.Component({
            selector: "ns-chat",
            templateUrl: "chat/chat.component.html",
            styleUrls: ["chat/chat.listado.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBDQUFpRDtBQUNqRCxzQ0FBMEM7QUFVMUM7SUFJSSx1QkFBb0IsS0FBcUI7UUFBekMsaUJBTUM7UUFObUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUN0QixVQUFDLE1BQU07WUFDSCxLQUFJLENBQUMsRUFBRSxHQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHO1lBQ1o7Z0JBQ0EsSUFBSSxFQUFDLENBQUM7Z0JBQ04sUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsVUFBVSxFQUFFO29CQUNSLFdBQVcsRUFBRSxZQUFZO29CQUN6QixXQUFXLEVBQUUsYUFBYTtvQkFDMUIsV0FBVyxFQUFFLGFBQWE7aUJBQzdCO2dCQUNELFVBQVUsRUFBRSxZQUFZO2dCQUN4QixTQUFTLEVBQUM7b0JBQ1Y7d0JBQ0ksTUFBTSxFQUFFLFlBQVk7d0JBQ3BCLE9BQU8sRUFBRSw0QkFBNEI7d0JBQ3JDLFNBQVMsRUFBRSxZQUFZO3dCQUN2QixTQUFTLEVBQUU7NEJBQ1AsV0FBVyxFQUFFLFlBQVk7NEJBQ3pCLFdBQVcsRUFBRSxhQUFhO3lCQUM3QjtxQkFDSjtvQkFDRDt3QkFDSSxNQUFNLEVBQUUsWUFBWTt3QkFDcEIsT0FBTyxFQUFFLGtCQUFrQjt3QkFDM0IsU0FBUyxFQUFFLGFBQWE7d0JBQ3ZCLFNBQVMsRUFBRTs0QkFDUixXQUFXLEVBQUUsWUFBWTs0QkFDekIsV0FBVyxFQUFFLGFBQWE7eUJBQzdCO3FCQUNKO29CQUNEO3dCQUNJLE1BQU0sRUFBRSxZQUFZO3dCQUNwQixPQUFPLEVBQUUsd0NBQXdDO3dCQUNqRCxTQUFTLEVBQUUsYUFBYTt3QkFDdkIsU0FBUyxFQUFFOzRCQUNSLFdBQVcsRUFBRSxZQUFZOzRCQUN6QixXQUFXLEVBQUUsYUFBYTt5QkFDN0I7cUJBQ0o7aUJBQ0o7YUFDQTtTQUFDLENBQUM7SUFDUCxDQUFDO0lBckRRLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7U0FDakQsQ0FBQzt5Q0FNNkIsdUJBQWM7T0FKaEMsYUFBYSxDQXVEeEI7SUFBRCxvQkFBQztDQUFBLEFBdkRGLElBdURFO0FBdkRXLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtY2hhdFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiY2hhdC9jaGF0LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcImNoYXQvY2hhdC5saXN0YWRvLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDaGF0Q29tcG9uZW50IHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBtb2NrQ2hhdDogQXJyYXk8YW55PjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xyXG4gICAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgKHBhcmFtcykgPT4ge1xyXG4gICAgICAgICAgICAgICB0aGlzLmlkICA9ICtwYXJhbXNbJ2lkJ107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5tb2NrQ2hhdCA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6MSxcclxuICAgICAgICAgICAgXCJub21icmVcIjogXCJHcnVwbyBkZSBjaGF0IGRlIG5hdGl2ZVNjcmlwdFwiLFxyXG4gICAgICAgICAgICBcInVzdWFyaW9zXCI6IHtcclxuICAgICAgICAgICAgICAgIFwidXN1YXJpb18xXCI6IFwiam9yZ2V1Y2Fub1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ1c3VhcmlvXzJcIjogXCJqb3JnZXVjYW5vMlwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1c3VhcmlvXzNcIjogXCJqb3JnZXVjYW5vM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiY3JlYWNpb25cIjogXCIxMC8wOS8yMDE3XCIsXHJcbiAgICAgICAgICAgIFwiZGlhbG9nb1wiOlsgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIjEwLzA5LzIwMTdcIixcclxuICAgICAgICAgICAgICAgIFwidGV4dG9cIjogXCJIb2xhIGFsZ3VpZW4gdmlvIGxhIGNsYXNlP1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ1c3VhcmlvXCI6IFwiam9yZ2V1Y2Fub1wiLFxyXG4gICAgICAgICAgICAgICAgXCJyZWNpYmlvXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcInVzdWFyaW9fMVwiOiBcImpvcmdldWNhbm9cIixcclxuICAgICAgICAgICAgICAgICAgICBcInVzdWFyaW9fMlwiOiBcImpvcmdldWNhbm8zXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiMTAvMDkvMjAxN1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ0ZXh0b1wiOiBcIlNpLCBmdWUgdW4gbW9qb25cIixcclxuICAgICAgICAgICAgICAgIFwidXN1YXJpb1wiOiBcImpvcmdldWNhbm8yXCIsXHJcbiAgICAgICAgICAgICAgICAgXCJyZWNpYmlvXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcInVzdWFyaW9fMVwiOiBcImpvcmdldWNhbm9cIixcclxuICAgICAgICAgICAgICAgICAgICBcInVzdWFyaW9fMlwiOiBcImpvcmdldWNhbm8zXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiMTAvMDkvMjAxN1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ0ZXh0b1wiOiBcIkRvcyBob3JhcyBwZWxlYW5kb3NlIGNvbiBsb3MgYXJyYXlzIHhEXCIsXHJcbiAgICAgICAgICAgICAgICBcInVzdWFyaW9cIjogXCJqb3JnZXVjYW5vMlwiLFxyXG4gICAgICAgICAgICAgICAgIFwicmVjaWJpb1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ1c3VhcmlvXzFcIjogXCJqb3JnZXVjYW5vXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ1c3VhcmlvXzJcIjogXCJqb3JnZXVjYW5vM1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgICAgfV07XHJcbiAgICB9XHJcbiAgICBcclxuIH1cclxuIl19