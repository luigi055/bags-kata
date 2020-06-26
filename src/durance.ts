import Backpack from "./backpack.ts";
import Bag from "./bag.ts";

export default class Durance {
  private _backpack: Backpack = new Backpack();
  private _extraBags: Bag[] = new Array(4);

  get backpack(): Backpack {
    return this._backpack;
  }

  get extraBags(): Bag[] {
    return this._extraBags;
  }
}
