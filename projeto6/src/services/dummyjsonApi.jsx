export function dummyjsonAPI() {
  return {
    getCategories: () => {
      return fetch('https://dummyjson.com/products/categories')
        .then((response) => response.json())
        .then((json) => json);
    },
    getProductsByCategory: (slug) => {
      return fetch(`https://dummyjson.com/products/category/${slug}?limit=0`)
        .then((response) => response.json())
        .then((json) => json.products);
    },
  };
}
