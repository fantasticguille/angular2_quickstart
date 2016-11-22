"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Ultra Racing';
        this.carParts = [{
                "id": 1,
                "name": "Super Tires",
                "description": "There tires are the very best",
                "inStock": 5,
                "price": 4.99
            },
            {
                "id": 2,
                "name": "Reinforced Shocks",
                "description": "Shocks made form kryptonite",
                "inStock": 4,
                "price": 10.49
            },
            {
                "id": 3,
                "name": "Padded Seats",
                "description": "Super soft seats for a smooth ride",
                "inStock": 0,
                "price": 19.99
            }];
    }
    AppComponent.prototype.totalCarParts = function () {
        //oneline function
        //return this.carParts.reduce((prev,current) => prev + current.inStock, 0);
        var sum = 0;
        for (var _i = 0, _a = this.carParts; _i < _a.length; _i++) {
            var carPart = _a[_i];
            sum += carPart.inStock;
        }
        return sum;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>{{title}}</h1>\n\t\t<p>There are {{totalCarParts()}} total parts in stock.</p>\n\t\t<ul>\n\t\t\t<li *ngFor=\"let carPart of carParts\">\n\t\t\t\t<h2>{{carPart.name | uppercase}}</h2>\n\t\t\t\t<p>{{carPart.description}}</p>\n\t\t\t\t<p>{{carPart.price | currency:'EUR':true}}</p>\n\t\t\t\t<p *ngIf=\"carPart.inStock > 0\">{{carPart.inStock}} in Stock</p>\n\t\t\t\t<p *ngIf=\"carPart.inStock === 0\">Out of Stock</p>"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map