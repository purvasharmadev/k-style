import { useProducts } from "../Context/context";

function filterProduct() {
  // getting useReducer states i.e filterState from reducer
  const {
    Products,
    filterState: {
      sort,
      range,
      rating,
      Tshirt,
      Hoodies,
      IdolFashion,
      POCA,
      Album,
      LightSticks,
      search_query,
    },
  } = useProducts();
  // making copy of the product-list for manipulating
  let transformProducts = Products;

  // Sorting Condition
  if (sort) {
    transformProducts =
      sort === "LOW_TO_HIGH"
        ? transformProducts.sort((a, b) => a.price - b.price)
        : transformProducts.sort((a, b) => b.price - a.price);
  }

  // Conditions for individual category

  // 'applyFilter' is used to get the array of items after applying the filter method
  function applyFilter(category) {
    const selectedCategory = Products.filter(
      (item) => item.categoryName === category
    );
    return selectedCategory;
  }

  // defining an array to store the items from the selected category returned by 'applyFilter
  const categoryFilter = [];

  // 'filterByCategory' is pushing each element returned by 'applyFilter' method to an array i.e categoryFilter
  function filterByCategory(categoryItem) {
    return categoryItem.forEach((ele) => {
      return categoryFilter.push(ele);
    });
  }

  if (Tshirt) {
    const selectedCategory = applyFilter("Tshirt");
    filterByCategory(selectedCategory);
    transformProducts = categoryFilter;
  }

  if (Hoodies) {
    const selectedCategory = applyFilter("Hoodies");
    filterByCategory(selectedCategory);
    transformProducts = categoryFilter;
  }

  if (POCA) {
    const selectedCategory = applyFilter("POCA");
    filterByCategory(selectedCategory);
    transformProducts = categoryFilter;
  }

  if (LightSticks) {
    const selectedCategory = applyFilter("LightSticks");
    filterByCategory(selectedCategory);
    transformProducts = categoryFilter;
  }
  if (Album) {
    const selectedCategory = applyFilter("Album");
    filterByCategory(selectedCategory);
    transformProducts = categoryFilter;
  }
  if (IdolFashion) {
    const selectedCategory = applyFilter("IdolFashion");
    filterByCategory(selectedCategory);
    transformProducts = categoryFilter;
  }

  // Range
  if (range) {
    transformProducts = transformProducts.filter((item) => item.price < range);
  }

  // Search

  if (search_query) {
    transformProducts = Products.filter((item) =>
      item.title.toLowerCase().includes(search_query.toLowerCase())
    );
  }

  // Rating
  switch (rating) {
    case "4_AND_ABOVE":
      return (transformProducts = transformProducts.filter(
        (item) => item.rating >= 4
      ));
    case "3_AND_ABOVE":
      return (transformProducts = transformProducts.filter(
        (item) => item.rating >= 3
      ));
    case "2_AND_ABOVE":
      return (transformProducts = transformProducts.filter(
        (item) => item.rating >= 2
      ));
    case "1_AND_ABOVE":
      return (transformProducts = transformProducts.filter(
        (item) => item.rating >= 1
      ));

    default:
      return transformProducts;
  }
}

export { filterProduct };
