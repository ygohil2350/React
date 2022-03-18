const initialState = [
  { id:"1",
    city: "pune",
    last_name: "patil",
    pincode: "41601",
    first_name: "omkar",
    states: "Goa",
    email: "omkar@gmail.com"
    },
    {
      id:"2",
      city: "Pune",
      last_name: "bhatkar",
      pincode: "41601",
      first_name: "saalim",
      states: "Maharashtra",
      email: "raghav@gmail.com"
      },
      {
        id:"3",
        city: "kolhapur",
        last_name: "kondare",
        pincode: "41601",
        first_name: "sachin",
        states: "Gujrat",
        email: "sachin@gmail.com"
        },
];

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      state = [...state, action.payload];
      return state;
    case "DELETE_USER":
      const contactFilter = state.filter((contact) =>
        contact.id === action.payload ? null : contact
      );
      state = contactFilter;
      return state;
    case "UPDATE_USER":
      const contactUpdate = state.filter((contact) =>
        contact.id === action.payload.id
          ? Object.assign(contact, action.payload)
          : contact
      );
      state = contactUpdate;
      return state;
    case "RESET_USER":
      state = [{ id:null, city: null, last_name: null, pincode: null, first_name: null,  states: null, email: null}];
      return state;
    default:
      return state;
  }
};
