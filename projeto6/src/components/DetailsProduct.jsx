/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

export function DetailsProduct({ productSelected }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500); // tempo de loading em milissegundos
    return () => clearTimeout(timeout);
  }, [productSelected]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Carregando...</p>
      </div>
    );
  }

  if (!productSelected) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Nenhum produto selecionado</p>
      </div>
    );
  }

  return (
    <div>
      {productSelected && productSelected.title ? (
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="font-bold text-3xl mb-2">{productSelected.title}</div>
          <div>Descrição: {productSelected.description}</div>
          <div className="p-2 bg-gray-200 rounded-lg w-fit my-2">
            Preço: {productSelected.price}
          </div>
          <div className="grid grid-cols-3 gap-4">
            {productSelected.images && productSelected.images.length > 0 ? (
              productSelected.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className=" border-gray-200 border rounded-lg"
                />
              ))
            ) : (
              <p>Nenhuma imagem disponível</p>
            )}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <p>Nenhum produto selecionado</p>
        </div>
      )}
    </div>
  );
}
