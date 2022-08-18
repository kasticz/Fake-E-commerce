import { createSlice } from "@reduxjs/toolkit";
const mouses = [
  {
    title: "SteelSeries",
    price: 300,
    rating: 4.6,
    manufacturer: "SteelSeries",
    dpi: "100",
    wireless: false,
    viewable: true,
    discount: 0,
    eligibleIds: [
      `<5000price`,
      `SteelSeriesMouses`,
      `wiredMouse`,
      `<5000dpi`,
      ">4rating",
    ],
  },
  {
    title: "Sven",
    price: 5200,
    rating: 4.2,
    manufacturer: "Sven",
    dpi: "7000",
    wireless: false,
    viewable: true,
    discount: 0,
    eligibleIds: [
      `5001-15000price`,
      `SvenMouses`,
      `wiredMouse`,
      `5001-10000dpi`,
      ">4rating",
    ],
  },
  {
    title: "Logitech",
    price: 12000,
    rating: 3.6,
    manufacturer: "Logitech",
    dpi: "12000",
    wireless: false,
    viewable: true,
    discount: 23,
    eligibleIds: [
      `5001-15000price`,
      `LogitechMouses`,
      `wiredMouse`,
      `10001-15000dpi`,
    ],
  },
  {
    title: "Razer",
    price: 7000,
    rating: 4.7,
    manufacturer: "Razer",
    dpi: "16000",
    wireless: true,
    viewable: true,
    discount: 12,
    eligibleIds: [
      `5001-15000price`,
      `RazerMouses`,
      `wirelessMouse`,
      `15001-20000dpi`,
      ">4rating",
    ],
  },
  {
    title: "OKlick",
    price: 32000,
    rating: 2.6,
    manufacturer: "OKlick",
    dpi: "21000",
    wireless: true,
    discount: 5,
    viewable: true,
    eligibleIds: [`>30000price`, `OKlickMouses`, `wirelessMouse`, `>20000dpi`],
  },
  {
    title: "OKlick",
    price: 32000,
    rating: 2.6,
    manufacturer: "OKlick",
    dpi: "21000",
    wireless: true,
    discount: 5,
    viewable: true,
    eligibleIds: [`>30000price`, `OKlickMouses`, `wirelessMouse`, `>20000dpi`],
  },
  {
    title: "SteelSeries",
    price: 300,
    rating: 4.6,
    manufacturer: "SteelSeries",
    dpi: "100",
    wireless: false,
    viewable: true,
    discount: 0,
    eligibleIds: [
      `<5000price`,
      `SteelSeriesMouses`,
      `wiredMouse`,
      `<5000dpi`,
      ">4rating",
    ],
  }
];
const mousesSlice = createSlice({
  name: "mouses",
  initialState: mouses,
  reducers: {
    dropAllFilters,
    makeAllUnViewable,
    sortByInputs,
    reset,
    // sort
  },
});

export function filter(payload) {
  const mouses = payload.mouses;
  const inputs = payload.inputs;
  return (dispatch) => {
    dispatch(mousesSlice.actions.dropAllFilters());
    dispatch(mousesSlice.actions.makeAllUnViewable());
    dispatch(mousesSlice.actions.sortByInputs(inputs));
  };
}
// function sort(state,payload){
//   const sortOrder = payload.payload.sortOrder
//   const sortType = payload.payload.sortType

//   return state.sort((a,b)=>{
//     return sortOrder === 'asc' ? a[sortType] - b[sortType] : b[sortType] - a[sortType]
//   })
// }

function reset(state) {
  state = mouses;
  return state;
}

const mouseInputs = {
  rating: {
    ">4rating": false,
  },
  price: {
    "<5000price": false,
    "<5001-15000price": false,
    "<15001-30000price": false,
    ">30000price": false,
  },
  dpi: {
    "<5000dpi": false,
    "<5001-10000dpi": false,
    "<10001-15000dpi": false,
    "15001-20000dpi": false,
    ">20000dpi": false,
  },
  manufacturer: {
    SteelSeriesMouses: false,
    SvenMouses: false,
    OKlickMouses: false,
    LogitechMouses: false,
    RazerMouses: false,
  },
  wireless: {
    wiredMouse: false,
    wirelessMouse: false,
  },
};

export const mouseInputsSlice = createSlice({
  name: "mouseInputs",
  initialState: mouseInputs,
  reducers: {
    addInput(state, payload) {
      state[payload.payload.sortType][payload.payload.value] =
        !state[payload.payload.sortType][payload.payload.value];
    },
    resetInputs(state) {
      state = mouseInputs;
      return state;
    },
  },
});

function dropAllFilters(state) {
  state = mouses;
  return state;
}
function makeAllUnViewable(state) {
  for (let mouse of state) {
    mouse.viewable = false;
  }
}
export function sortByInputs(state, payload) {
  const allInputs = payload.payload;
  const sortTypeKeys = [];

  for (let item of Object.keys(allInputs)) {
    sortTypeKeys.push(allInputs[item]);
  }

  for (let product of state) {
    let viewable = true;
    mainLoop:
    for (let input of sortTypeKeys) {
      let eligible = 'initial';

      subLoop:
      for (let key of Object.keys(input)) {
        if(input[key]){
          if(product.eligibleIds.includes(key)){
            eligible = true;
            break subLoop;
          }
          eligible = false          
        }        
      }
      if(!eligible){
        viewable = false
      } 
    }
    product.viewable = viewable
  }
}

export const mouseInputsActions = mouseInputsSlice.actions;
export const mouseSortingActions = mousesSlice.actions;
export default mousesSlice;
