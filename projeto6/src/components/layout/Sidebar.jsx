import { dummyjsonAPI } from '../../services/dummyjsonAPI';
import { useState, useEffect } from 'react';
/* eslint-disable react/prop-types */
export function Sidebar(props) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const api = dummyjsonAPI();
        const categories = await api.getCategories();
        setCategories(categories);
      } catch (error) {
        console.error('Erro ao carregar categorias:', error);
      }
    };
    getCategories();
  }, []);

  return (
    <aside>
      <div className="font-bold text-2xl pb-4 ">Categorias</div>
      <ul>
        {categories.map((category) => (
          <li
            key={category.slug}
            onClick={() => {
              props.categoriesSelected(category.slug);
            }}
            className="cursor-pointer hover:bg-gray-100"
          >
            {category.slug}
          </li>
        ))}
      </ul>
    </aside>
  );
}
