export const categories = [
    {
      _id: 1,
      categoryName: "men",
      description:
        "Men's clothing",
    },
    {
      _id: 2,
      categoryName: "women",
      description:
        "Women's clothing",
    },
    {
      _id: 3,
      categoryName: "kids",
      description:
        "Kid's clothing",
    },
    {
      _id: 4,
      categoryName: "miscellaneous",
      description:
        "Micellaneous clothing",
    },
  ];

  let catList = [];
  categories.filter((item) => {
      catList.push(item.categoryName);
  })
//   const categoryItemList = (categorizeBy, cardData) =>{
//       return(   
//                 cardData.filter((item) => {      
//                 item.categoryName === categorizeBy;
//                 }))
//   }
  

  export {catList, }
