import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import Durance from "./durance.ts";

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

Deno.test(
  "After 8 items in a backpack we have 2 items ordered alphabetically in the first bag",
  () => {
    const durance = new Durance();

    durance.addItem("Leather");
    durance.addItem("Leather");
    durance.addItem("Leather");
    durance.addItem("Leather");
    durance.addItem("Leather");
    durance.addItem("Leather");
    durance.addItem("Leather");
    durance.addItem("Leather");

    durance.backpack.items.forEach((item) => {
      assertEquals(item, "Leather");
    });

    durance.extraBags.forEach((extraBack) => {
      extraBack.items.forEach((item) => {
        assertEquals(item, undefined);
      });
    });

    durance.addItem("Wool");
    durance.addItem("Copper");

    assertEquals(durance.extraBags[0].items[0], "Copper");
    assertEquals(durance.extraBags[0].items[1], "Wool");
  }
);
