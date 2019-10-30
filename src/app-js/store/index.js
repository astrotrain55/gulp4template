import {
  observable,
  computed,
  action,
  decorate,
  autorun,
  transaction,
  toJS,
} from 'mobx';

class Store {
  constructor() {
    this.basket = [];
  }

  get total() {
    console.log('get total()');
    return _.reduce(this.basket, (prev, curr) => prev + curr.price, 0);
  }

  select(name, price) {
    this.basket.push({ name, price });
  }
}

decorate(Store, {
  basket: observable,
  total: computed,
  select: action,
});

const store = new Store();

autorun(() => store.total);

autorun(() => {
  if (_.size(store.basket)) {
    console.log(toJS(store.basket));
  }
});

transaction(() => {
  store.select('html', 800);
  store.select('css', 800);
  store.select('js', 1500);
});

export default store;
