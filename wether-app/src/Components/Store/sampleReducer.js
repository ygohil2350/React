export const sampleReducer=(state=initial,action)=>{
    return state;
}


const initial={
    myState:[
        {
        id:"1",
        label: "New York",
        lat:"40.7128",
        lon:"74.0060",
        img:"https://th.bing.com/th/id/OIP.V5Dwy1oKBIjlam0VMwNdrAHaE7?w=256&h=180&c=7&r=0&o=5&pid=1.7"
        },
          {
            id:"2",
            label: "London",
            lat:"51.5072",
            lon:"0.1276",
            img:"https://th.bing.com/th/id/OIP.5ZOxEiw1UD6U8kxGULdo4gHaE7?w=290&h=193&c=7&r=0&o=5&pid=1.7"

          },
          {
            id:"3",
            label:"Mumbai",
            lat:"19.0760",
            lon:"72.8777",
            img:"https://th.bing.com/th/id/OIP.CGSEFHE_K23kEUIwbHOn8gHaD4?w=304&h=180&c=7&r=0&o=5&pid=1.7"
        },
        {
            id:"4",
            label:"delhi",
            lat:"28.7041",
            lon:"77.1025",
            img:"https://th.bing.com/th/id/OIP.xpGx2noVsQTs1ecMKK845AHaFA?w=252&h=180&c=7&r=0&o=5&pid=1.7"

        }
    ]
}