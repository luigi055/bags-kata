export default class Bag {
  constructor(private _category: string) {}
  get category() {
    return this._category;
  }
  get items() {
    return new Array(4);
  }
}
