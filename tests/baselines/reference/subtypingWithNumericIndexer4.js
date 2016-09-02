//// [subtypingWithNumericIndexer4.ts]
// Derived type indexer must be subtype of base type indexer

interface Base { foo: string; }
interface Derived extends Base { bar: string; }
interface Derived2 extends Derived { baz: string; }

class A {
    [x: number]: Derived;
}

class B extends A {
    [x: number]: string; // error
}

module Generics {
    class A<T extends Derived> {
        [x: number]: T;
    }

    class B extends A<Base> {
        [x: number]: string; // error
    }

    class B3<T extends Derived> extends A<T> {
        [x: number]: string; // error
    }
}

//// [subtypingWithNumericIndexer4.js]
// Derived type indexer must be subtype of base type indexer
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var A = (function () {
    function A() {
    }
    return A;
}());
var B = (function (_super) {
    __extends(B, _super);
    function B() {
        var _this = _super.apply(this, arguments) || this;
        return _this;
    }
    return B;
}(A));
var Generics;
(function (Generics) {
    var A = (function () {
        function A() {
        }
        return A;
    }());
    var B = (function (_super) {
        __extends(B, _super);
        function B() {
            var _this = _super.apply(this, arguments) || this;
            return _this;
        }
        return B;
    }(A));
    var B3 = (function (_super) {
        __extends(B3, _super);
        function B3() {
            var _this = _super.apply(this, arguments) || this;
            return _this;
        }
        return B3;
    }(A));
})(Generics || (Generics = {}));
