import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "T-Shirt",
    categoryImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiSnYuHOvLxpUtV9_mbOA-sIBHhX-K9kHemyUPcYSbh8wXDRf2IOxElezvutlx6hyKQo0&usqp=CAU",
  },
  {
    _id: uuid(),
    categoryName: "Hoodies",
    categoryImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiSnYuHOvLxpUtV9_mbOA-sIBHhX-K9kHemyUPcYSbh8wXDRf2IOxElezvutlx6hyKQo0&usqp=CAU",
  },
  {
    _id: uuid(),
    categoryName: "Idol Fashion",
    categoryImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiSnYuHOvLxpUtV9_mbOA-sIBHhX-K9kHemyUPcYSbh8wXDRf2IOxElezvutlx6hyKQo0&usqp=CAU",
  },
  {
    _id: uuid(),
    categoryName: "Albums",
    categoryImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiSnYuHOvLxpUtV9_mbOA-sIBHhX-K9kHemyUPcYSbh8wXDRf2IOxElezvutlx6hyKQo0&usqp=CAU",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
  },
  {
    _id: uuid(),
    categoryName: "LightSticks",
    categoryImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiSnYuHOvLxpUtV9_mbOA-sIBHhX-K9kHemyUPcYSbh8wXDRf2IOxElezvutlx6hyKQo0&usqp=CAU",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  },
  {
    _id: uuid(),
    categoryName: "POCA",
    categoryImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiSnYuHOvLxpUtV9_mbOA-sIBHhX-K9kHemyUPcYSbh8wXDRf2IOxElezvutlx6hyKQo0&usqp=CAU",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  },
];
