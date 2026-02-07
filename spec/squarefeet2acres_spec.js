// spec/squarefeet2acres_spec.js
import { squarefeet2acres } from "../src/squarefeet2acres.js";

describe("it converts square feet to acres", function(){
    it("testing conversion", function(){
        let area = squarefeet2acres (43560);
        expect (area).toBe(1);
    })
})