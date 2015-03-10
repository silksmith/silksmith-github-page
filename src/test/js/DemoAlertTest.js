goog.require("silksmith.DemoAlert");

describe("DemoAlertTest", function () {
    var demoAlert;

    beforeEach(function () {
        var DemoAlert = goog.module.get("silksmith.DemoAlert");
        demoAlert = new DemoAlert("msg 1");
    });

    it("does something", function () {
        chai.expect(demoAlert.show()).to.be.falsy;
    });
});
