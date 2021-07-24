import Cart from '../ts/classes/cart';
import Movie from '../ts/classes/movie';

test('cart work check', () => {
    const cart = new Cart();
    const bumer = new Movie(1999, 'Russia', 'Cherniy', 'drama', '138 min');

    cart.add(bumer);
    expect(cart.getAll()).toEqual([bumer]);
});
