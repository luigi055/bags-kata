import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import Bag from "./bag.ts";

Deno.test("Bag has a category", () => {
  const METAL_CATEGORY = "METAL";
  const bag = new Bag(METAL_CATEGORY);

  assertEquals(bag.category, METAL_CATEGORY);
});
