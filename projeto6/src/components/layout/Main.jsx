import { DetailsProduct } from '../DetailsProduct';
import { ProductsList } from '../ProductsList';
import { Sidebar } from './Sidebar';
import { useState } from 'react';

export function Main() {
  const [categoriesSelected, setCategoriesSelected] = useState([`beauty`]);
  const [productSelected, setProductSelected] = useState({});

  return (
    <main>
      <section>
        <div className="container mx-auto px-5 py-10 md:px-0">
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="md:w-2/12">
              <Sidebar categoriesSelected={setCategoriesSelected} />
            </div>
            <div className="md:w-5/12">
              <ProductsList
                slug={categoriesSelected}
                productSelected={setProductSelected}
              />
            </div>
            <div className="md:w-5/12">
              <DetailsProduct productSelected={productSelected} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
