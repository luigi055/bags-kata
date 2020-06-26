export default class Bag {
  private _items = new Array(4);
  constructor(private _category: string) {}
  get category() {
    return this._category;
  }
  get items() {
    return this._items.sort();
  }
}
