import { isFalsey, isTruthy } from "../src/string.ts";
import { assertEquals } from "./deps.ts";

Deno.test("string", async (t) => {
  await t.step("isFalsey", () => {
    assertEquals(isFalsey(undefined), true);
    assertEquals(isFalsey(null), true);
    assertEquals(isFalsey(""), true);
    assertEquals(isFalsey(" "), true, "By default trim removes blank spaces and makes falsey");

    assertEquals(isFalsey(" ", false), false, "Trim set to false does not remove empty strings so its truthy");
    assertEquals(isFalsey("a"), false);
  });

  await t.step("isTruthy", () => {
    assertEquals(isTruthy(undefined), false);
    assertEquals(isTruthy(null), false);
    assertEquals(isTruthy(""), false);
    assertEquals(isTruthy(" "), false, "By default trim removes blank spaces and makes falsey");

    assertEquals(isTruthy(" ", true), false, "Trim set to false does not remove empty strings so its truthy");
    assertEquals(isTruthy("a"), true);
  });
});
