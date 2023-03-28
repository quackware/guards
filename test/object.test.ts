import { hasFunction, hasOwnProperty, hasStringProperties, hasStringProperty } from "../src/object.ts";
import { assert, assertEquals } from "./deps.ts";

Deno.test("object", async (t) => {
  await t.step("hasOwnProperty", () => {
    assert(hasOwnProperty({ foo: "bar" }, "foo"));
    assert(hasOwnProperty({ fundefined: undefined }, "fundefined"));
  });
  await t.step("hasStringProperty", () => {
    assertEquals(hasStringProperty({ foo: "bar" }, "foo"), true);
  });

  await t.step("hasStringProperties", () => {
    assertEquals(hasStringProperty({ foo: "bar" }, "foo"), true);
    assertEquals(hasStringProperties({ foo: "bar", boo: "bar" }, "foo"), true);
    assertEquals(hasStringProperties({ foo: "bar", boo: "bar" }, "foo", "boo"), true);
  });

  await t.step("hasFunction", () => {
    assertEquals(hasFunction(new Promise(() => {}), "then"), true);
  });
});
