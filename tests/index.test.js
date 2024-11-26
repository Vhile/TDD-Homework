const Greet = require("../src/index");

// TESTS HERE
describe("Greeting test", () => {
    it("Greeting with no input", () => {
        expect(Greet([])).toBe("Hello, my friend.");
    });
    it("Greeting with a single input", () => {
        expect(Greet(["Bob"])).toBe("Hello Bob.");
    });
    it("Greeting with multiple input", () => {
        expect(Greet(["Alice", "Bob", "Jerry"])).toBe("Hello Alice, Bob and Jerry.");
    });
});