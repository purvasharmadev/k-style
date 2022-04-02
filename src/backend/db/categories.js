import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Tshirt",
    categoryImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiSnYuHOvLxpUtV9_mbOA-sIBHhX-K9kHemyUPcYSbh8wXDRf2IOxElezvutlx6hyKQo0&usqp=CAU",
  },
  {
    _id: uuid(),
    categoryName: "Hoodies",
    categoryImg:
      "https://images.pexels.com/photos/572463/pexels-photo-572463.jpeg?cs=srgb&dl=pexels-nikolai-ulltang-572463.jpg&fm=jpg",
  },
  {
    _id: uuid(),
    categoryName: "IdolFashion",
    categoryImg:
      "https://www.kworldnow.com/wp-content/uploads/2020/06/crystal-jo-ci7-U4s5NHw-unsplash-1-1024x683.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Albums",
    categoryImg:
      "https://media.istockphoto.com/photos/video-tapes-audio-tapes-and-compact-disc-picture-id513244210?k=20&m=513244210&s=612x612&w=0&h=KH1QP1f42UDcePl18EoJyMhcmiIdiOeux4Ig6fpbggo=",
  },
  {
    _id: uuid(),
    categoryName: "LightSticks",
    categoryImg:
      "http://cdn.shopify.com/s/files/1/2227/3393/collections/lightstick1_1200x1200.png?v=1592505778",
  },
  {
    _id: uuid(),
    categoryName: "POCA",
    categoryImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP0k5ASCyhWUWntrpjB9xnSRMnafrkfdCm-A&usqp=CAU",
  },
];
