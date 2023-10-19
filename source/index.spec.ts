import {init} from "./index";
import {describe, expect, it, jest} from "@jest/globals";

jest.mock("./foo/baz");

describe("index", () => {
    it("sums numbers", () => {
        expect(init()).toBe(3)
    })
})
