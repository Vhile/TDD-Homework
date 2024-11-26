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
    it("Shouting greeting with single input", () => {
        expect(Greet(["BARRY"])).toBe("HELLO BARRY!");
    });
    it("Shouting greeting with multiple input", () => {
        expect(Greet(["BARRY", "JAY"])).toBe("HELLO BARRY AND JAY!");
    });
    it("Greeting with mixed inputs", () => {
        expect(Greet(["JAY", "Maya", "Alice", "BOB", "Charlotte"])).toBe("Hello Maya, Alice and Charlotte. HELLO JAY AND BOB!");
    });
});