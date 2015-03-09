goog.module("silksmith.DemoAlert");

class DemoAlert{
    /**
     * @param {string} msg
     */
    constructor(msg) {
        /**
         * @type {string}
         */
        this.msg = msg === undefined ? "" : msg;
    }

    show(){
        $('<div class="alert alert-success" role="alert"></div>').appendTo("body").text(this.msg);
    };
}

exports = DemoAlert;