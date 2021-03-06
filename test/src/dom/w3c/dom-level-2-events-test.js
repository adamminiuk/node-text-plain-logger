/******************************************************************************/
/* DOM Events Level 2 */
/******************************************************************************/

if (require !== undefined) {
    // Node.js tests
    var buster = require("buster");
    var logger = require("../../../../src/logger-core.js");
}

// http://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/events.html
buster.testCase("logger/dom DOM Events Level 2", {
    // 1.3.1. Event registration interfaces

    // interfaces
    "[interface EventTarget]": function () {
        assert(false);
    },
    "[interface EventListener]": function () {
        assert(false);
    },

    // 1.4. Event interface

    // interfaces
    "[interface Event]": function () {
        assert(false);
    },

    // exceptions
    "[exception EventException]": function () {
        assert(false);
    },

    // 1.5. DocumentEvent interface

    // interfaces
    "[interface DocumentEvent]": function () {
        assert(false);
    },

    // 1.6.1. User Interface event types

    // interfaces
    "[interface UIEvent : Event]": function () {
        assert(false);
    },

    // 1.6.2. Mouse event types

    // interfaces
    "[interface MouseEvent : UIEvent]": function () {
        assert(false);
    },

    // 1.6.4. Mutation event types

    // interfaces
    "[interface MutationEvent : Event]": function () {
        assert(false);
    }
});
