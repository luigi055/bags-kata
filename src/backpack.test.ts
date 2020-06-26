import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import Backpack from "./backpack.ts";

Deno.test("Backpack has 8 slots ", () => {
  const backpack = new Backpack();

  assertEquals(backpack.items.length, 8);
});
