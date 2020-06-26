import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import Durance from "./durance.ts";

Deno.test("Durance has a backpack with 8 slots ", () => {
  const durance = new Durance();

  assertEquals(durance.backpack.items.length, 8);
});

Deno.test("Durance has 4 extra bags ", () => {
  const durance = new Durance();

  assertEquals(durance.extraBags.length, 4);
});

Deno.test("Durance has 4 items for each extra bag ", () => {
  const durance = new Durance();

  durance.extraBags.forEach((extraBag) => {
    assertEquals(extraBag.items.length, 4);
  });
});
