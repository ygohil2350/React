export const studentReduser = (
    state = { student: [...students], selectedStudent: [] },
    action
  ) => {
    if(action.type==="Add-Data"){
      return {...state,student:[...state.student,action.data]}
    }
    return state;
  };

const students=[
   {No:1,
    name:"Yash",
    Email:"ygohil2350@gmail.com",
    Address:"Sakti Nagar,Itwara,Nanded",
    Age:22,
    Nationality:"Indian",
    Class:"B.Tech",
    Level:"4TH",
    Fees_paid:1000,
    Fees_paid_Date:"21-12-2021" }
]

