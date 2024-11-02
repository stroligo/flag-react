import { dummyjsonAPI } from '../services/dummyjsonAPI';
import { CardProduct } from './CardProduct';
import { useState, useEffect } from 'react';
/* eslint-disable react/prop-types */
export function ProductsList({ slug, productSelected }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const api = dummyjsonAPI();
        const products = await api.getProductsByCategory(slug);
        setProducts(products);
      } catch (error) {
        console.error('Erro ao carregar os produtos:', error);
      }
    };
    getProducts();
  }, [slug]);

  const handleProductClick = (product) => {
    productSelected(product);
  };

  return (
    <div>
      <div className="font-bold text-2xl pb-4 ">Categoria: {slug}</div>
      <ul className="grid grid-cols-3 gap-4">
        {products && products.length > 0 ? (
          products.map((product) => (
            <div key={product.id}>
              <CardProduct
                product={product}
                onClick={() => handleProductClick(product)}
              />
            </div>
          ))
        ) : (
          <p>Nenhum produto encontrado</p>
        )}
      </ul>
    </div>
  );
}
