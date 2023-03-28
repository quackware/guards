import { isIncluded, isNonEmpty } from "../src/array.ts";
import { assertEquals } from "./deps.ts";

Deno.test("array", async (t) => {
  await t.step("isIncluded", () => {
    assertEquals(isIncluded("a", ["a", "b", "c"]), true);
    assertEquals(isIncluded("a", ["b", "c"]), false);
    assertEquals(isIncluded(1, ["1", "2"]), false);
    assertEquals(isIncluded("1", ["1", "2"]), true);
  });

  await t.step("isNonEmpty", () => {
    assertEquals(isNonEmpty([]), false);
    assertEquals(isNonEmpty([1]), true);
  });
});
