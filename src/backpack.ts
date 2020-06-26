export default class Backpack {
  private lastElementAdded: number = 0;
  private _items: string[] = new Array(8);

  get items() {
    return this._items;
  }

  public isFull(): boolean {
    return this.lastElementAdded === 8;
  }

  public addItem(item: string) {
    this.items[this.lastElementAdded] = item;
    this.lastElementAdded++;
  }
}
