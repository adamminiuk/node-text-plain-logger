/******************************************************************************/
/* TEST CASE: logger() */
/******************************************************************************/

if (require !== undefined) {
    // Node.js tests
    var buster = require("buster");
    var logger = require("../../../src/logger-core.js");
}

buster.testCase("logger/core", {
    "exists logger": function () {
        assert(typeof logger === "function", "Exists master object logger");
    }
});

