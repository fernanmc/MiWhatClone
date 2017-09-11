"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var MinLengthDirective = (function () {
    function MinLengthDirective() {
    }
    MinLengthDirective_1 = MinLengthDirective;
    MinLengthDirective.prototype.validate = function (control) {
        return !control.value || control.value.length >= this.minlength ? null : { "minlength": true };
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MinLengthDirective.prototype, "minlength", void 0);
    MinLengthDirective = MinLengthDirective_1 = __decorate([
        core_1.Directive({
            selector: '[minlength]',
            providers: [{ provide: forms_1.NG_VALIDATORS, useExisting: MinLengthDirective_1, multi: true }]
        }),
        __metadata("design:paramtypes", [])
    ], MinLengthDirective);
    return MinLengthDirective;
    var MinLengthDirective_1;
}());
exports.MinLengthDirective = MinLengthDirective;
var IsEmailDirective = (function () {
    function IsEmailDirective() {
    }
    IsEmailDirective_1 = IsEmailDirective;
    IsEmailDirective.prototype.validate = function (control) {
        var emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
        var valid = emailRegEx.test(control.value);
        return control.value < 1 || valid ? null : { 'email': true };
    };
    IsEmailDirective = IsEmailDirective_1 = __decorate([
        core_1.Directive({
            selector: '[email]',
            providers: [{ provide: forms_1.NG_VALIDATORS, useExisting: IsEmailDirective_1, multi: true }]
        }),
        __metadata("design:paramtypes", [])
    ], IsEmailDirective);
    return IsEmailDirective;
    var IsEmailDirective_1;
}());
exports.IsEmailDirective = IsEmailDirective;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5wdXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlEO0FBQ2pELHdDQUEyRTtBQU0zRTtJQUlJO0lBQXNCLENBQUM7MkJBSmQsa0JBQWtCO0lBTXBCLHFDQUFRLEdBQWYsVUFBZ0IsT0FBd0I7UUFDcEMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksR0FBRyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUNuRyxDQUFDO0lBTlE7UUFBUixZQUFLLEVBQUU7O3lEQUFtQjtJQUZsQixrQkFBa0I7UUFKOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLHFCQUFhLEVBQUUsV0FBVyxFQUFFLG9CQUFrQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUMsQ0FBQztTQUN0RixDQUFDOztPQUNXLGtCQUFrQixDQVU5QjtJQUFELHlCQUFDOztDQUFBLEFBVkQsSUFVQztBQVZZLGdEQUFrQjtBQWdCL0I7SUFFSTtJQUFzQixDQUFDO3lCQUZkLGdCQUFnQjtJQUlsQixtQ0FBUSxHQUFmLFVBQWdCLE9BQXdCO1FBQ3BDLElBQUksVUFBVSxHQUFHLHlKQUF5SixDQUFDO1FBQzNLLElBQUksS0FBSyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxHQUFHLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBQyxDQUFDO0lBQy9ELENBQUM7SUFSUSxnQkFBZ0I7UUFKNUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLHFCQUFhLEVBQUUsV0FBVyxFQUFFLGtCQUFnQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUMsQ0FBQztTQUNwRixDQUFDOztPQUNXLGdCQUFnQixDQVU1QjtJQUFELHVCQUFDOztDQUFBLEFBVkQsSUFVQztBQVZZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW21pbmxlbmd0aF0nLFxyXG4gICAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IE5HX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBNaW5MZW5ndGhEaXJlY3RpdmUsIG11bHRpOiB0cnVlfV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1pbkxlbmd0aERpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XHJcblxyXG4gICAgQElucHV0KCkgbWlubGVuZ3RoOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgICBwdWJsaWMgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0ge1xyXG4gICAgICAgIHJldHVybiAhY29udHJvbC52YWx1ZSB8fCBjb250cm9sLnZhbHVlLmxlbmd0aCA+PSB0aGlzLm1pbmxlbmd0aCA/IG51bGwgOiB7IFwibWlubGVuZ3RoXCI6IHRydWUgfTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbZW1haWxdJyxcclxuICAgIHByb3ZpZGVyczogW3twcm92aWRlOiBOR19WQUxJREFUT1JTLCB1c2VFeGlzdGluZzogSXNFbWFpbERpcmVjdGl2ZSwgbXVsdGk6IHRydWV9XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSXNFbWFpbERpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgICBwdWJsaWMgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0ge1xyXG4gICAgICAgIGxldCBlbWFpbFJlZ0V4ID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC9pO1xyXG4gICAgICAgIGxldCB2YWxpZCA9IGVtYWlsUmVnRXgudGVzdChjb250cm9sLnZhbHVlKTtcclxuICAgICAgICByZXR1cm4gY29udHJvbC52YWx1ZSA8IDEgfHwgdmFsaWQgPyBudWxsIDogeydlbWFpbCc6IHRydWV9O1xyXG4gICAgfVxyXG5cclxufSJdfQ==