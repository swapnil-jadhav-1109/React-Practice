import Card from "./Card"; 

const resobj = [
  {
      img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/sdrmd8ssgiuruyvxklyo",
      id:"1",
      foodName:"VIG",
      Ratings:"4.4 . 35-40 mins",
      Food:"North Indian",
      Address:"Chembur"
  },
  {
      img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/dfolnuxhhxyw4vhcdkh8",
      id:"2",
      foodName:"Dosa Attack",
      Ratings:"4.1 .35-40 mins",
      Food:"South Indian, Fast Food, Snacks ",
      Address:"Chembur"  
  },
  {
    img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/29605cbcfc2615dfdc905ce94c216ddb",
    id:"3",
    foodName:"Meemee's",
    Ratings:"4.7 . 35-40 mins",
    Food:"Ice Cream,Desserts ",
    Address:"Scruz Bandra East"  
  },
  {
    img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/15/dea4c2cf-6118-4c81-999d-2327ae3cdb63_202836.jpg",
    id:"4",
    foodName:"Hangout Cakes & More",
    Ratings:"4.3 . 25-30 mins",
    Food:"Bakery ",
    Address:"Santacruz East"  
  },
  {
    img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/8d8187ee-3d6c-455b-9318-467a37ac274b_334353.jpg",
    id:"5",
    foodName:"McDonald's",
    Ratings:"4.5 . 35-40 mins",
    Food:"Burgers,Beverages, Cafe,Desserts",
    Address:"Arihant Height"  
  },
  {
    img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/11/b1a727d3-3049-4253-aab6-056c5db5ac67_866594.jpg",
    id:"6",
    foodName:"Parsi Dairy Farm",
    Ratings:"4.6 . 30-35 mins",
    Food:"Desserts,sweets ",
    Address:"Scruz Bandra East"  
  },
  {
    img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/160d3413471166793e2cab57c7322dc1",
    id:"7",
    foodName:"Bombay Sweet Shop",
    Ratings:"4.6 . 25-30 mins",
    Food:"Desserts,Snacks,Bakery ",
    Address:"Scruz Bandra East"  
  },
  {
    img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/h2klhzmyhxu7ulynd7lf",
    id:"8",
    foodName:"Dairy Punjabi",
    Ratings:"4.8 . 30-35 mins",
    Food:"Snacks ",
    Address:"Chembur"  
  },
  {
    img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bc63cb014055874144f4a89b560a8df7",
    id:"9",
    foodName:"Sassy Teaspoon",
    Ratings:"4.4 . 30-35 mins",
    Food:"Desserts,Bakery ",
    Address:"Chembur"  
  },
  {
    img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ddoujgruols31tsulpbg",
    id:"10",
    foodName:"Mamledar Misal",
    Ratings:"4.4 . 30-35 mins",
    Food:"Maharashtrian,Indian,Fast Food ",
    Address:"Chembur"  
  },
  {
    img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/Swiggy-Dash/ri61cg4z6eftshnzm7gt",
    id:"11",
    foodName:"Punjabi Paneer",
    Ratings:"4.7 . 35-40 mins",
    Food:"Juices,Continental",
    Address:"Chembur"  
  },
  {
    img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/3/03f89277-010b-4240-a654-24faa97649f0_32576.JPG",
    id:"12",
    foodName:"Starbucks Coffe",
    Ratings:"4.4 . 40-45 mins",
    Food:"Beverage,Cafe,Snacks ",
    Address:"Scruz Bandra East"  
  },
  {
    img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/3cde72c49fcd2ca12f43f12e09a1288b",
    id:"13",
    foodName:"Udupi 2 Mumbai",
    Ratings:"4.9 .55-60 mins",
    Food:"Indian",
    Address:"Scruz Bandra East"  
  },
  {
    img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/676c41379dada74a9ceaf9cefd327759",
    id:"14",
    foodName:"Guru Kripa(Slon West)",
    Ratings:"4.6 .35-40 mins",
    Food:"Fast Food,Snacks",
    Address:"Sion"  
  },
  {
    img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fa4ri4b80odvjpkfoxkm",
    id:"15",
    foodName:"Gulati's",
    Ratings:"4.7 .55-60 mins",
    Food:"Sweets,Snacks",
    Address:"Andheri East"  
  },
];

// const resobj = [
//   {              "info": {
//     "id": "340377",
//     "name": "KFC",
//     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/37dc9e37-386f-453b-a219-ffa2c154750b_340377.JPG",
//     "locality": "AmBazaari Road",
//     "areaName": "Bajaj Nagar",
//     "costForTwo": "₹400 for two",
//     "cuisines": [
//       "Burgers",
//       "Fast Food",
//       "Rolls & Wraps"
//     ],
//     "avgRating": 4.3,
//     "parentId": "547",
//     "avgRatingString": "4.3",
//     "totalRatingsString": "5K+",
//     "promoted": true,
//     "adTrackingId": "cid=14485655~p=0~adgrpid=14485655#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=340377~eid=4a94796c-a08a-4542-82dc-efd8bb7e5a73~srvts=1718689851024~collid=69584",
//     "sla": {
//       "deliveryTime": 17,
//       "lastMileTravel": 2.1,
//       "serviceability": "SERVICEABLE",
//       "slaString": "15-20 mins",
//       "lastMileTravelString": "2.1 km",
//       "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//       "nextCloseTime": "2024-06-19 02:00:00",
//       "opened": true
//     },
//     "badges": {
      
//     },
//     "isOpen": true,
//     "aggregatedDiscountInfoV2": {
//       "header": "30% OFF",
//       "shortDescriptionList": [
//         {
//           "meta": "Use SWIGGYIT",
//           "discountType": "Percentage",
//           "operationType": "RESTAURANT"
//         }
//       ],
//       "descriptionList": [
//         {
//           "meta": "30% off up to ₹75 | Use code SWIGGYIT",
//           "discountType": "Percentage",
//           "operationType": "RESTAURANT"
//         }
//       ]
//     },
//     "type": "F",
//     "badgesV2": {
//       "entityBadges": {
//         "imageBased": {
          
//         },
//         "textBased": {
          
//         },
//         "textExtendedBadges": {
          
//         }
//       }
//     },
//     "orderabilityCommunication": {
//       "title": {
        
//       },
//       "subTitle": {
        
//       },
//       "message": {
        
//       },
//       "customIcon": {
        
//       }
//     },
//     "differentiatedUi": {
//       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       "differentiatedUiMediaDetails": {
//         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//         "lottie": {
          
//         },
//         "video": {
          
//         }
//       }
//     },
//     "reviewsSummary": {
      
//     },
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {
      
//     }
//   },
//   "analytics": {
//     "context": "seo-data-7853cde9-aad7-4730-bfb6-d15727f8118c"
//   },
//   "cta": {
//     "link": "https://www.swiggy.com/restaurants/kfc-ambazaari-road-bajaj-nagar-nagpur-340377",
//     "text": "RESTAURANT_MENU",
//     "type": "WEBLINK"
//   },
//   "widgetId": "collectionV5RestaurantListWidget_byName"
// },
// {
//   "info": {
//     "id": "54452",
//     "name": "Krishnum",
//     "cloudinaryImageId": "hmscrkinhyq2vzxokdjw",
//     "locality": "Vivekanand Nagar",
//     "areaName": "Sai Mandir, Wardha Road",
//     "costForTwo": "₹300 for two",
//     "cuisines": [
//       "South Indian",
//       "North Indian",
//       "Thalis",
//       "Chinese",
//       "Rolls & Wraps",
//       "Fast Food",
//       "Desserts",
//       "Beverages",
//       "Pizzas",
//       "Burgers",
//       "Snacks"
//     ],
//     "avgRating": 4.3,
//     "parentId": "4834",
//     "avgRatingString": "4.3",
//     "totalRatingsString": "5K+",
//     "sla": {
//       "deliveryTime": 22,
//       "lastMileTravel": 0.5,
//       "serviceability": "SERVICEABLE",
//       "slaString": "20-25 mins",
//       "lastMileTravelString": "0.5 km",
//       "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//       "nextCloseTime": "2024-06-18 23:00:00",
//       "opened": true
//     },
//     "badges": {
//       "imageBadges": [
//         {
//           "imageId": "v1695133679/badges/Pure_Veg111.png",
//           "description": "pureveg"
//         }
//       ]
//     },
//     "isOpen": true,
//     "aggregatedDiscountInfoV2": {
//       "header": "60% OFF",
//       "shortDescriptionList": [
//         {
//           "meta": "Use TRYNEW",
//           "discountType": "Percentage",
//           "operationType": "RESTAURANT"
//         }
//       ],
//       "descriptionList": [
//         {
//           "meta": "60% off up to ₹120 | Use code TRYNEW",
//           "discountType": "Percentage",
//           "operationType": "RESTAURANT"
//         }
//       ]
//     },
//     "type": "F",
//     "badgesV2": {
//       "entityBadges": {
//         "imageBased": {
//           "badgeObject": [
//             {
//               "attributes": {
//                 "description": "pureveg",
//                 "imageId": "v1695133679/badges/Pure_Veg111.png"
//               }
//             }
//           ]
//         },
//         "textBased": {
          
//         },
//         "textExtendedBadges": {
          
//         }
//       }
//     },
//     "orderabilityCommunication": {
//       "title": {
        
//       },
//       "subTitle": {
        
//       },
//       "message": {
        
//       },
//       "customIcon": {
        
//       }
//     },
//     "differentiatedUi": {
//       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       "differentiatedUiMediaDetails": {
//         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//         "lottie": {
          
//         },
//         "video": {
          
//         }
//       }
//     },
//     "reviewsSummary": {
      
//     },
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {
      
//     }
//   },
//   "analytics": {
//     "context": "seo-data-7853cde9-aad7-4730-bfb6-d15727f8118c"
//   },
//   "cta": {
//     "link": "https://www.swiggy.com/restaurants/krishnum-vivekanand-nagar-sai-mandir-wardha-road-nagpur-54452",
//     "text": "RESTAURANT_MENU",
//     "type": "WEBLINK"
//   },
//   "widgetId": "collectionV5RestaurantListWidget_byName"
// },
// {
//   "info": {
//     "id": "787574",
//     "name": "Theobroma",
//     "cloudinaryImageId": "m6zcb9uitpu4b3rtcl1w",
//     "locality": "Prajakta Ekabana",
//     "areaName": "Abhyankar Nagar",
//     "costForTwo": "₹400 for two",
//     "cuisines": [
//       "Bakery",
//       "Desserts"
//     ],
//     "avgRating": 4.6,
//     "parentId": "1040",
//     "avgRatingString": "4.6",
//     "totalRatingsString": "100+",
//     "promoted": true,
//     "adTrackingId": "cid=14372247~p=1~adgrpid=14372247#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=787574~eid=94e20188-07a4-4098-a7c5-ee3717622960~srvts=1718689851024~collid=69584",
//     "sla": {
//       "deliveryTime": 23,
//       "lastMileTravel": 2.6,
//       "serviceability": "SERVICEABLE",
//       "slaString": "20-25 mins",
//       "lastMileTravelString": "2.6 km",
//       "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//       "nextCloseTime": "2024-06-18 23:59:00",
//       "opened": true
//     },
//     "badges": {
//       "imageBadges": [
//         {
//           "imageId": "newg.png",
//           "description": "Gourmet"
//         }
//       ]
//     },
//     "isOpen": true,
//     "aggregatedDiscountInfoV2": {
//       "header": "20% OFF",
//       "shortDescriptionList": [
//         {
//           "meta": "Use PARTY",
//           "discountType": "Percentage",
//           "operationType": "RESTAURANT"
//         }
//       ],
//       "descriptionList": [
//         {
//           "meta": "20% off | Use code PARTY",
//           "discountType": "Percentage",
//           "operationType": "RESTAURANT"
//         }
//       ]
//     },
//     "type": "F",
//     "badgesV2": {
//       "entityBadges": {
//         "imageBased": {
//           "badgeObject": [
//             {
//               "attributes": {
//                 "description": "Gourmet",
//                 "imageId": "newg.png"
//               }
//             }
//           ]
//         },
//         "textBased": {
          
//         },
//         "textExtendedBadges": {
          
//         }
//       }
//     },
//     "orderabilityCommunication": {
//       "title": {
        
//       },
//       "subTitle": {
        
//       },
//       "message": {
        
//       },
//       "customIcon": {
        
//       }
//     },
//     "differentiatedUi": {
//       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       "differentiatedUiMediaDetails": {
//         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//         "lottie": {
          
//         },
//         "video": {
          
//         }
//       }
//     },
//     "reviewsSummary": {
      
//     },
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {
      
//     }
//   },
//   "analytics": {
//     "context": "seo-data-7853cde9-aad7-4730-bfb6-d15727f8118c"
//   },
//   "cta": {
//     "link": "https://www.swiggy.com/restaurants/theobroma-prajakta-ekabana-abhyankar-nagar-nagpur-787574",
//     "text": "RESTAURANT_MENU",
//     "type": "WEBLINK"
//   },
//   "widgetId": "collectionV5RestaurantListWidget_byName"
// },
// {
//   "info": {
//     "id": "823644",
//     "name": "Havmor Ice Cream",
//     "cloudinaryImageId": "20a82076f422100bbda3310f18308750",
//     "locality": "Wardha Road",
//     "areaName": "Wardha Road",
//     "costForTwo": "₹150 for two",
//     "cuisines": [
//       "Ice Cream"
//     ],
//     "avgRating": 4.8,
//     "parentId": "6969",
//     "avgRatingString": "4.8",
//     "totalRatingsString": "20+",
//     "sla": {
//       "deliveryTime": 18,
//       "lastMileTravel": 0.3,
//       "serviceability": "SERVICEABLE",
//       "slaString": "15-20 mins",
//       "lastMileTravelString": "0.3 km",
//       "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//       "nextCloseTime": "2024-06-19 03:00:00",
//       "opened": true
//     },
//     "badges": {
      
//     },
//     "isOpen": true,
//     "aggregatedDiscountInfoV2": {
      
//     },
//     "type": "F",
//     "badgesV2": {
//       "entityBadges": {
//         "imageBased": {
          
//         },
//         "textBased": {
          
//         },
//         "textExtendedBadges": {
          
//         }
//       }
//     },
//     "orderabilityCommunication": {
//       "title": {
        
//       },
//       "subTitle": {
        
//       },
//       "message": {
        
//       },
//       "customIcon": {
        
//       }
//     },
//     "differentiatedUi": {
//       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       "differentiatedUiMediaDetails": {
//         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//         "lottie": {
          
//         },
//         "video": {
          
//         }
//       }
//     },
//     "reviewsSummary": {
      
//     },
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "isNewlyOnboarded": true,
//     "restaurantOfferPresentationInfo": {
      
//     }
//   },
//   "analytics": {
//     "context": "seo-data-7853cde9-aad7-4730-bfb6-d15727f8118c"
//   },
//   "cta": {
//     "link": "https://www.swiggy.com/restaurants/havmor-ice-cream-wardha-road-nagpur-823644",
//     "text": "RESTAURANT_MENU",
//     "type": "WEBLINK"
//   },
//   "widgetId": "collectionV5RestaurantListWidget_byName"
// },
// {
//   "info": {
//     "id": "739169",
//     "name": "Olio - The Wood Fired Pizzeria",
//     "cloudinaryImageId": "4b44c7921b1b6073a4ffa58b38f8def1",
//     "locality": "Behind Indusind Bank",
//     "areaName": "Near Lendra Park",
//     "costForTwo": "₹300 for two",
//     "cuisines": [
//       "Pizzas",
//       "Pastas",
//       "Fast Food",
//       "Snacks",
//       "Beverages"
//     ],
//     "avgRating": 4.3,
//     "parentId": "11633",
//     "avgRatingString": "4.3",
//     "totalRatingsString": "500+",
//     "promoted": true,
//     "adTrackingId": "cid=14507655~p=2~adgrpid=14507655#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=739169~eid=16b1febf-2059-4776-b1bb-a4ce9700a841~srvts=1718689851024~collid=69584",
//     "sla": {
//       "deliveryTime": 37,
//       "lastMileTravel": 2.3,
//       "serviceability": "SERVICEABLE",
//       "slaString": "35-40 mins",
//       "lastMileTravelString": "2.3 km",
//       "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//       "nextCloseTime": "2024-06-19 04:00:00",
//       "opened": true
//     },
//     "badges": {
//       "imageBadges": [
//         {
//           "imageId": "newg.png",
//           "description": "Gourmet"
//         }
//       ]
//     },
//     "isOpen": true,
//     "aggregatedDiscountInfoV2": {
//       "header": "₹125 OFF",
//       "shortDescriptionList": [
//         {
//           "meta": "Use FLAT125",
//           "discountType": "Flat",
//           "operationType": "RESTAURANT"
//         }
//       ],
//       "descriptionList": [
//         {
//           "meta": "Flat ₹125 off on orders above ₹249 | Use code FLAT125",
//           "discountType": "Flat",
//           "operationType": "RESTAURANT"
//         }
//       ]
//     },
//     "type": "F",
//     "badgesV2": {
//       "entityBadges": {
//         "imageBased": {
//           "badgeObject": [
//             {
//               "attributes": {
//                 "description": "Gourmet",
//                 "imageId": "newg.png"
//               }
//             }
//           ]
//         },
//         "textBased": {
          
//         },
//         "textExtendedBadges": {
          
//         }
//       }
//     },
//     "orderabilityCommunication": {
//       "title": {
        
//       },
//       "subTitle": {
        
//       },
//       "message": {
        
//       },
//       "customIcon": {
        
//       }
//     },
//     "differentiatedUi": {
//       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       "differentiatedUiMediaDetails": {
//         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//         "lottie": {
          
//         },
//         "video": {
          
//         }
//       }
//     },
//     "reviewsSummary": {
      
//     },
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {
      
//     }
//   },
//   "analytics": {
//     "context": "seo-data-7853cde9-aad7-4730-bfb6-d15727f8118c"
//   },
//   "cta": {
//     "link": "https://www.swiggy.com/restaurants/olio-the-wood-fired-pizzeria-behind-indusind-bank-near-lendra-park-nagpur-739169",
//     "text": "RESTAURANT_MENU",
//     "type": "WEBLINK"
//   },
//   "widgetId": "collectionV5RestaurantListWidget_byName"
// },
// {
//   "info": {
//     "id": "163879",
//     "name": "Ramji Shamji Pohewale",
//     "cloudinaryImageId": "lmsdgcxyrbjxj8gflnfx",
//     "locality": "Wardha Road",
//     "areaName": "Wardha Road",
//     "costForTwo": "₹300 for two",
//     "cuisines": [
//       "Snacks"
//     ],
//     "avgRating": 4.6,
//     "parentId": "166666",
//     "avgRatingString": "4.6",
//     "totalRatingsString": "1K+",
//     "sla": {
//       "deliveryTime": 20,
//       "lastMileTravel": 0.9,
//       "serviceability": "SERVICEABLE",
//       "slaString": "15-20 mins",
//       "lastMileTravelString": "0.9 km",
//       "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//       "nextCloseTime": "2024-06-18 15:30:00",
//       "opened": true
//     },
//     "badges": {
//       "imageBadges": [
//         {
//           "imageId": "v1695133679/badges/Pure_Veg111.png",
//           "description": "pureveg"
//         }
//       ]
//     },
//     "isOpen": true,
//     "aggregatedDiscountInfoV2": {
      
//     },
//     "type": "F",
//     "badgesV2": {
//       "entityBadges": {
//         "imageBased": {
//           "badgeObject": [
//             {
//               "attributes": {
//                 "description": "pureveg",
//                 "imageId": "v1695133679/badges/Pure_Veg111.png"
//               }
//             }
//           ]
//         },
//         "textBased": {
          
//         },
//         "textExtendedBadges": {
          
//         }
//       }
//     },
//     "orderabilityCommunication": {
//       "title": {
        
//       },
//       "subTitle": {
        
//       },
//       "message": {
        
//       },
//       "customIcon": {
        
//       }
//     },
//     "differentiatedUi": {
//       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       "differentiatedUiMediaDetails": {
//         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//         "lottie": {
          
//         },
//         "video": {
          
//         }
//       }
//     },
//     "reviewsSummary": {
      
//     },
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {
      
//     }
//   },
//   "analytics": {
//     "context": "seo-data-7853cde9-aad7-4730-bfb6-d15727f8118c"
//   },
//   "cta": {
//     "link": "https://www.swiggy.com/restaurants/ramji-shamji-pohewale-wardha-road-nagpur-163879",
//     "text": "RESTAURANT_MENU",
//     "type": "WEBLINK"
//   },
//   "widgetId": "collectionV5RestaurantListWidget_byName"
// },
// {
//   "info": {
//     "id": "53534",
//     "name": "Airport Centre Point - Golden Harvest",
//     "cloudinaryImageId": "614cef1b8b369f8a370d749be049a174",
//     "locality": "Wardha Road",
//     "areaName": "Wardha Road",
//     "costForTwo": "₹500 for two",
//     "cuisines": [
//       "North Indian",
//       "Biryani",
//       "Mughlai",
//       "Chinese",
//       "Italian",
//       "Continental"
//     ],
//     "avgRating": 4.5,
//     "parentId": "8505",
//     "avgRatingString": "4.5",
//     "totalRatingsString": "5K+",
//     "promoted": true,
//     "adTrackingId": "cid=14490165~p=3~adgrpid=14490165#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=53534~eid=fba8fa46-24b8-4a21-b98f-5458975bcbed~srvts=1718689851024~collid=69584",
//     "sla": {
//       "deliveryTime": 31,
//       "lastMileTravel": 2.7,
//       "serviceability": "SERVICEABLE",
//       "slaString": "30-35 mins",
//       "lastMileTravelString": "2.7 km",
//       "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//       "nextCloseTime": "2024-06-19 03:00:00",
//       "opened": true
//     },
//     "badges": {
//       "imageBadges": [
//         {
//           "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
//           "description": "Delivery!"
//         },
//         {
//           "imageId": "newg.png",
//           "description": "Gourmet"
//         }
//       ]
//     },
//     "isOpen": true,
//     "aggregatedDiscountInfoV2": {
//       "header": "₹125 OFF",
//       "shortDescriptionList": [
//         {
//           "meta": "Use LUNCHBINGE",
//           "discountType": "Flat",
//           "operationType": "RESTAURANT"
//         }
//       ],
//       "descriptionList": [
//         {
//           "meta": "FLAT125 off | Use LUNCHBINGE",
//           "discountType": "Flat",
//           "operationType": "RESTAURANT"
//         }
//       ]
//     },
//     "type": "F",
//     "badgesV2": {
//       "entityBadges": {
//         "imageBased": {
//           "badgeObject": [
//             {
//               "attributes": {
//                 "description": "Delivery!",
//                 "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
//               }
//             },
//             {
//               "attributes": {
//                 "description": "Gourmet",
//                 "imageId": "newg.png"
//               }
//             }
//           ]
//         },
//         "textBased": {
          
//         },
//         "textExtendedBadges": {
          
//         }
//       }
//     },
//     "orderabilityCommunication": {
//       "title": {
        
//       },
//       "subTitle": {
        
//       },
//       "message": {
        
//       },
//       "customIcon": {
        
//       }
//     },
//     "differentiatedUi": {
//       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       "differentiatedUiMediaDetails": {
//         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//         "lottie": {
          
//         },
//         "video": {
          
//         }
//       }
//     },
//     "reviewsSummary": {
      
//     },
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {
      
//     }
//   },
//   "analytics": {
//     "context": "seo-data-7853cde9-aad7-4730-bfb6-d15727f8118c"
//   },
//   "cta": {
//     "link": "https://www.swiggy.com/restaurants/airport-centre-point-golden-harvest-wardha-road-nagpur-53534",
//     "text": "RESTAURANT_MENU",
//     "type": "WEBLINK"
//   },
//   "widgetId": "collectionV5RestaurantListWidget_byName"
// },
// {
//   "info": {
//     "id": "510859",
//     "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
//     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/eb7f4b65-43b8-47a2-af88-6350fbe9fcd2_510859.JPG",
//     "locality": "Surendra Nagar",
//     "areaName": "Manish Nagar",
//     "costForTwo": "₹200 for two",
//     "cuisines": [
//       "Desserts",
//       "Ice Cream",
//       "Ice Cream Cakes"
//     ],
//     "avgRating": 4.6,
//     "veg": true,
//     "parentId": "582",
//     "avgRatingString": "4.6",
//     "totalRatingsString": "1K+",
//     "sla": {
//       "deliveryTime": 18,
//       "lastMileTravel": 0.3,
//       "serviceability": "SERVICEABLE",
//       "slaString": "15-20 mins",
//       "lastMileTravelString": "0.3 km",
//       "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//       "nextCloseTime": "2024-06-18 23:59:00",
//       "opened": true
//     },
//     "badges": {
//       "imageBadges": [
//         {
//           "imageId": "v1695133679/badges/Pure_Veg111.png",
//           "description": "pureveg"
//         }
//       ]
//     },
//     "isOpen": true,
//     "aggregatedDiscountInfoV2": {
//       "header": "50% OFF",
//       "shortDescriptionList": [
//         {
//           "meta": "Use SWIGGY50",
//           "discountType": "Percentage",
//           "operationType": "RESTAURANT"
//         }
//       ],
//       "descriptionList": [
//         {
//           "meta": "50% off up to ₹100 | Use code SWIGGY50",
//           "discountType": "Percentage",
//           "operationType": "RESTAURANT"
//         }
//       ]
//     },
//     "type": "F",
//     "badgesV2": {
//       "entityBadges": {
//         "imageBased": {
//           "badgeObject": [
//             {
//               "attributes": {
//                 "description": "pureveg",
//                 "imageId": "v1695133679/badges/Pure_Veg111.png"
//               }
//             }
//           ]
//         },
//         "textBased": {
          
//         },
//         "textExtendedBadges": {
          
//         }
//       }
//     },
//     "orderabilityCommunication": {
//       "title": {
        
//       },
//       "subTitle": {
        
//       },
//       "message": {
        
//       },
//       "customIcon": {
        
//       }
//     },
//     "differentiatedUi": {
//       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       "differentiatedUiMediaDetails": {
//         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//         "lottie": {
          
//         },
//         "video": {
          
//         }
//       }
//     },
//     "reviewsSummary": {
      
//     },
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {
      
//     }
//   },
//   "analytics": {
//     "context": "seo-data-7853cde9-aad7-4730-bfb6-d15727f8118c"
//   },
//   "cta": {
//     "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-surendra-nagar-manish-nagar-nagpur-510859",
//     "text": "RESTAURANT_MENU",
//     "type": "WEBLINK"
//   },
//   "widgetId": "collectionV5RestaurantListWidget_byName"
// },
// {
//   "info": {
//     "id": "152026",
//     "name": "Shruti Food Express",
//     "cloudinaryImageId": "bs2voqhzblbfsvbmvhif",
//     "locality": "Vivekanand Nagar",
//     "areaName": "Vivekanand Nagar",
//     "costForTwo": "₹300 for two",
//     "cuisines": [
//       "Fast Food",
//       "Pizzas",
//       "Burger",
//       "Pastas"
//     ],
//     "avgRating": 4.6,
//     "parentId": "9432",
//     "avgRatingString": "4.6",
//     "totalRatingsString": "1K+",
//     "promoted": true,
//     "adTrackingId": "cid=13968729~p=4~adgrpid=13968729#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=152026~eid=06f953a3-5976-4efc-a9d3-d9bd27ef2a39~srvts=1718689851024~collid=69584",
//     "sla": {
//       "deliveryTime": 18,
//       "lastMileTravel": 1.9,
//       "serviceability": "SERVICEABLE",
//       "slaString": "15-20 mins",
//       "lastMileTravelString": "1.9 km",
//       "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//       "nextCloseTime": "2024-06-18 21:45:00",
//       "opened": true
//     },
//     "badges": {
//       "imageBadges": [
//         {
//           "imageId": "v1695133679/badges/Pure_Veg111.png",
//           "description": "pureveg"
//         }
//       ]
//     },
//     "isOpen": true,
//     "aggregatedDiscountInfoV2": {
//       "header": "₹125 OFF",
//       "shortDescriptionList": [
//         {
//           "meta": "Use FLATDEAL",
//           "discountType": "Flat",
//           "operationType": "RESTAURANT"
//         }
//       ],
//       "descriptionList": [
//         {
//           "meta": "FLAT125 off | Use FLATDEAL",
//           "discountType": "Flat",
//           "operationType": "RESTAURANT"
//         }
//       ]
//     },
//     "type": "F",
//     "badgesV2": {
//       "entityBadges": {
//         "imageBased": {
//           "badgeObject": [
//             {
//               "attributes": {
//                 "description": "pureveg",
//                 "imageId": "v1695133679/badges/Pure_Veg111.png"
//               }
//             }
//           ]
//         },
//         "textBased": {
          
//         },
//         "textExtendedBadges": {
          
//         }
//       }
//     },
//     "orderabilityCommunication": {
//       "title": {
        
//       },
//       "subTitle": {
        
//       },
//       "message": {
        
//       },
//       "customIcon": {
        
//       }
//     },
//     "differentiatedUi": {
//       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       "differentiatedUiMediaDetails": {
//         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//         "lottie": {
          
//         },
//         "video": {
          
//         }
//       }
//     },
//     "reviewsSummary": {
      
//     },
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {
      
//     }
//   },
//   "analytics": {
//     "context": "seo-data-7853cde9-aad7-4730-bfb6-d15727f8118c"
//   },
//   "cta": {
//     "link": "https://www.swiggy.com/restaurants/shruti-food-express-vivekanand-nagar-nagpur-152026",
//     "text": "RESTAURANT_MENU",
//     "type": "WEBLINK"
//   },
//   "widgetId": "collectionV5RestaurantListWidget_byName"
// }
// ];


const Body = () => {
  return (
    <div className="body">
      <div className="restaurant-heading">
        <h1>Restaurants with online food delivery in Mumbai</h1>
      </div>
      <div className="cards">
     {
      resobj.map((restaurant)=> <Card  key = {resobj.id} data = {restaurant}/>)
     }

  </div>
    </div>
  )
}
export default Body;