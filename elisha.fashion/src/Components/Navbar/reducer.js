export const reducer = (state, action) => {
    // delete item 
    if (action.type === "REMOVE_ITEM") {
      return {
        ...state,
        item: state.item.filter((curElem) => {
          return curElem.id !== action.payload;
        }),
      };
    }
  
    // clear all carts 
    if (action.type === "CLEAR_CART") {
      return { ...state, item: [], totalItem: 0 };
    }
    
    // increment in cart 
    if (action.type === "INCREMENT") {
      const updatedCart = state.item.map((curElem) => {
        if (curElem.id === action.payload){
          return { ...curElem, quantity: curElem.quantity + 1 };
        }
        return curElem;
      });
  
      return { ...state, item: updatedCart };
    }
  
    // decrement in cart 
    if(action.type === "DECREMENT") {
      const updatedCart = state.item.map((curElem) => {
        if( curElem.id === action.payload) {
          return { ...curElem, quantity: curElem.quantity - 1 };
        }
        return curElem;
      }).filter((curElem) => {
        return curElem.quantity !== 0;
      });
      return { ...state, item: updatedCart };
    }
    
    // value in items and cart 
    if(action.type === `GET_TOTAL`) {
      const { totalItem } = state.item.reduce(
        (accum, curVal) => {
          let { quantity } = curVal;
          accum.totalItem += quantity;
          return accum;
        },
        {
          totalItem: 0,
        }
      );
      return { ...state, totalItem };
    }
  
    return state;
  };
  



































// export const reducer = (state, action) => {

//     // delete item 
//     if (action.type === "REMOVE_ITEM") {
//         return {
//             ...state,
//             item: state.item.filter((curElem) => {
//                 return curElem.id !== action.payload;
//             }),
//         };
//     }
      
//     // clear all carts 
//     if (action.type === "CLEAR_CART") {
//         return { ...state, item: [] };
//     }
    
//     // increment in cart 
//     if (action.type === "INCREMENT") {
//         const updatedCart = state.item.map((curElem) => {
//             if (curElem.id === action.payload){
//                 return { ...curElem, quantity: curElem.quantity + 1 };
//             }
//             return curElem;
//         });

//         return { ...state, item: updatedCart };
//     }

//     // decrement in cart 
//     if(action.type === "DECREMENT") {
//         const updatedCart = state.item.map((curElem) => {
//               if( curElem.id === action.payload) {
//                 return { ...curElem, quantity: curElem.quantity - 1 };
//               }
//               return curElem;
//         }).filter((curElem) => {
//             return curElem.quantity !== 0;
//         });
//         return { ...state,item: updatedCart };
//     }
    
//     // value in items and cart 
//     if(action.type === "GET_TOTAL") {
//         const { totalItem } = state.item.reduce(
//             (accum, curVal) => {
//             let { quantity } = curVal;
//             accum.totalItem += quantity;
//             return accum;
//         },
//         {
//             totalItem: 0,
//         });
//         return { ...state, totalItem };
//     }

//     return state;

// };