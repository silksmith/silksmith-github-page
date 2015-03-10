goog.module("silksmith.DemoAlert");

/**
 * @constructor
 * @param {string} msg
 */
var DemoAlert = function(msg){
    /**
     * @type {string}
     */
    this.msg = msg;
};

DemoAlert.prototype.show = function(){
    $('<div class="alert alert-success" role="alert"></div>').appendTo("body").text(this.msg);
};

exports = DemoAlert;


//class DemoAlert{
//    /**
//     * @param {string} msg
//     */
//    constructor(msg) {
//        /**
//         * @type {string}
//         */
//        this.msg = msg === undefined ? "" : msg;
//    }
//
//    show(){
//        $('<div class="alert alert-success" role="alert"></div>').appendTo("body").text(this.msg);
//    };
//}
//
//export default DemoAlert;