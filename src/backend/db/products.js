import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

// CategoryNames : Tshirt, Hoodies, LightStick, Album, POCA, Idol-Fashion

export const products = [
  {
    _id: uuid(),
    title: "BTS Euphoria",
    author: "Shiv Khera",
    price: "20",
    featured:true,
    newArrival:true,
    categoryName: "T-Shirt",
    rating:4,
    img:"https://media.karousell.com/media/photos/products/2021/7/29/bts_tshirt_for_kids_and_adults_1627544395_1902498f_progressive.jpg"
  },
  {
    _id: uuid(),
    title: "BlackPink In Your Area",
    author: "Shiv Khera",
    price: "300",
    featured:true,
    newArrival:false,
    categoryName: "T-Shirt",
    rating:5,
    img:"https://img.joomcdn.net/643fe1ff724f96cbeea55fe19f323c4201fffba5_original.jpeg"
  },
  {
    _id: uuid(),
    title: "You Can WIN",
    author: "Shiv Khera",
    price: "400",
    oldPrice:"$ 599",
    featured:true,
    newArrival:false,
    categoryName: "Hoodies",
    rating:1,
    img:"https://cdn.shopify.com/s/files/1/0564/4320/7839/products/product-image-1701761661_large_crop_center.jpg?v=1620119459"
  },
  {
    _id: uuid(),
    title: "You Can WIN",
    author: "Shiv Khera",
    price: "1999",
    oldPrice:"5000",
    featured:true,
    newArrival:true,
    categoryName: "Idol-Fashion",
    rating:4,
    img:"https://cdn.shopify.com/s/files/1/0564/4320/7839/products/product-image-1701761661_large_crop_center.jpg?v=1620119459"
  },
  {
    _id: uuid(),
    title: "You Can WIN",
    author: "Shiv Khera",
    price: "1999",
    oldPrice:"5000",
    featured:true,
    newArrival:true,
    rating:4,

    categoryName: "Album",
    img:"https://cdn.shopify.com/s/files/1/0564/4320/7839/products/product-image-1701761661_large_crop_center.jpg?v=1620119459"
  },
  {
    _id: uuid(),
    title: "You Can WIN",
    author: "Shiv Khera",
    price: "5000",
    featured:true,
    newArrival:true,

    categoryName: "POCA",
    rating:4,
    img:"https://cdn.shopify.com/s/files/1/0564/4320/7839/products/product-image-1701761661_large_crop_center.jpg?v=1620119459"
  },

  {
    _id: uuid(),
    title: "You are Winner",
    author: "Junaid Qureshi",
    price: "3000",
    featured:true,
    newArrival:false,
    categoryName: "Album",
    rating:2,
    img:"https://cdn.shopify.com/s/files/1/0564/4320/7839/products/product-image-1701761661_large_crop_center.jpg?v=1620119459"
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    price: "1000",
    featured:false,
    newArrival:true,
    categoryName: "Hoodies",
    rating:3,
    img:"https://cdn.shopify.com/s/files/1/0564/4320/7839/products/product-image-1701761661_large_crop_center.jpg?v=1620119459"
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    price: "1000",
    featured:false,
    newArrival:true,
    categoryName: "LightSticks",
    rating:2,
    img:"https://cdn.shopify.com/s/files/1/0564/4320/7839/products/product-image-1701761661_large_crop_center.jpg?v=1620119459"
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    price: "1000",
    featured:true,
    newArrival:false,
    categoryName: "POCA",
    rating:4,
    img:"https://cdn.shopify.com/s/files/1/0564/4320/7839/products/product-image-1701761661_large_crop_center.jpg?v=1620119459"
  },

];
