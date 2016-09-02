//// [superPropertyAccessInComputedPropertiesOfNestedType_ES5.ts]
class A {
    foo() { return 1; }
}

class B extends A {
    foo() { return 2; }
    bar() {
        return class {
            [super.foo()]() {
                return 100;
            }
        }
    }
}

//// [superPropertyAccessInComputedPropertiesOfNestedType_ES5.js]
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var A = (function () {
    function A() {
    }
    A.prototype.foo = function () { return 1; };
    return A;
}());
var B = (function (_super) {
    __extends(B, _super);
    function B() {
        var _this = _super.apply(this, arguments) || this;
        return _this;
    }
    B.prototype.foo = function () { return 2; };
    B.prototype.bar = function () {
        return (function () {
            function class_1() {
            }
            class_1.prototype[_super.prototype.foo.call(this)] = function () {
                return 100;
            };
            return class_1;
        }());
    };
    return B;
}(A));
