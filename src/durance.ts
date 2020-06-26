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

  private isBackPackFull(): boolean {
    return this.backpack.isFull();
  }

  public addItem(item: string) {
    if (this.isBackPackFull()) {
      if (!this.extraBags[0]) {
        const bag = new Bag("Metal");
        bag.items[0] = item;
        this.extraBags[0] = bag;
      } else {
        this.extraBags[0].items[1] = item;
      }
    } else {
      this.backpack.addItem(item);
    }
  }
}
