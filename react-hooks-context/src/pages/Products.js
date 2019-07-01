import React, { useContext } from 'react';

import ShopContext from '../context/shop-context';
import './Products.css';

const ProductsPage = props => {
  const context = useContext(ShopContext);
  return (
    <>
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
  );
};

export default ProductsPage;
