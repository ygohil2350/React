export const productReducer = (
    state = { product: [...products], cart: [], selectedProduct: [] },
    action
  ) => {
    if (action.type === "Add-Product") {
      return { ...state, product: [...action.data, ...state.product] };
    }
    if (action.type === "Selected-Product") {
      return { ...state, selectedProduct: [action.data] };
    }
    if (action.type === "Add-Cart") {
      return {
        ...state,
        cart: [{ ...action.data, key: state.cart.length }, ...state.cart],
      };
    }
    if (action.type === "Remove-Product") {
      const filtered = state.cart.filter((item) => item.key !== action.data.key);
      return { ...state, cart: filtered };
    }
    return state;
  };

const products=[{category: "Pizza",
description: "MARGHERITA",
id: 1,
image: "https://www.dominos.co.in/files/items/Margherit.jpg",
price: 15,
title: "A hugely popular margherita, with a deliciously tangy single cheese topping"},
{category: "Pizza",
description: "DOUBLE CHEESE MARGHERITA",
id: 2,
image: "https://www.dominos.co.in/files/items/Double_Cheese_Margherita.jpg",
price: 16.5,
title: "The ever-popular Margherita - loaded with extra cheese... oodies of it!"},
{category: "Pizza",
description: "FARM HOUSE",
id: 3,
image: "https://www.dominos.co.in/files/items/Farmhouse.jpg",
price: 15.5,
title: "A pizza that goes ballistic on veggies! Check out this mouth watering overload of crunchy, crisp capsicum, succulent mushrooms and fresh tomatoes"},
{category: "Pizza",
description: "PEPPY PANEER",
id: 4,
image: "https://www.dominos.co.in/files/items/Peppy_Paneer.jpg",
price: 17,
title: "Chunky paneer with crisp capsicum and spicy red pepper - quite a mouthful!"},
{category: "Pizza",
description: "MEXICAN GREEN WAVE",
id: 1,
image: "https://www.dominos.co.in/files/items/Mexican_Green_Wave.jpg",
price: 16,
title: "A pizza loaded with crunchy onions, crisp capsicum, juicy tomatoes and jalapeno with a liberal sprinkling of exotic Mexican herbs."},
{category: "Pizza",
description: "DELUXE VEGGIE",
id: 1,
image: "https://www.dominos.co.in/files/items/Deluxe_Veggie.jpg",
price: 16.5,
title: "For a vegetarian looking for a BIG treat that goes easy on the spices, this one's got it all.. The onions, the capsicum, those delectable mushrooms - with paneer and golden corn to top it all."},]