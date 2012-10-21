/********************************************************************************/
/* BOM Core */
/********************************************************************************/

if (typeof require !== "undefined") {
    // Node.js tests
    var buster = require("buster");
    var logger = require("../../../lib/logger-core.js");
}

buster.testCase("logger/bom/core", {
    "Document": function () {
        assert.equals(logger(document), "Document '" + location.href + "'", "Document");
    },
    "Window": function () {
        assert.equals(logger(window), "Window '" + location.href + "'", "Window");
    }
});