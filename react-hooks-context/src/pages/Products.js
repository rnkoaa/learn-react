import React, {useContext} from 'react';

import ShopContext from '../context/shop-context';
import MainNavigation from '../components/MainNavigation';
import './Products.css';
import UserContext from '../context/users-context'

const ProductsPage = props => {
  const userContext = useContext(UserContext)
  return (
    <ShopContext.Consumer>
      {context => (
        <>
          <MainNavigation
            cartItemNumber={context.cart.reduce((count, curItem) => {
              return count + curItem.quantity;
            }, 0)} usersCount={userContext.users.length}

          />
          <main className="products">
            <ul>
              {context.products.map(product => (
                <li key={product.id}>
                  <div>
                    <strong>{product.title}</strong> - ${product.price}
                  </div>
                  <div>
                    <button onClick={context.addProductToCart.bind(this, product)}>
                      Add to Cart
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </main>
        </>
      )}
    </ShopContext.Consumer>
  );
};

export default ProductsPage;
