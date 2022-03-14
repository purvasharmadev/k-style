import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "You Can WIN",
    author: "Shiv Khera",
    price: "5000",
    categoryName: "non-fiction",
    img:"https://cdn.shopify.com/s/files/1/0564/4320/7839/products/product-image-1701761661_large_crop_center.jpg?v=1620119459"
  },
  {
    _id: uuid(),
    title: "You are Winner",
    author: "Junaid Qureshi",
    price: "3000",
    categoryName: "horror",
    img:"https://cdn.shopify.com/s/files/1/0564/4320/7839/products/product-image-1701761661_large_crop_center.jpg?v=1620119459"
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    price: "1000",
    categoryName: "fiction",
    img:"https://cdn.shopify.com/s/files/1/0564/4320/7839/products/product-image-1701761661_large_crop_center.jpg?v=1620119459"
  },
];
