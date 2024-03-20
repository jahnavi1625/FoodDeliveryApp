import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items:localStorage.getItem("cart") !== null
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
    counter:1,
    isAuthenticated:sessionStorage.getItem('isAuthenticated')==='true',
    user:sessionStorage.getItem('user') ||  null,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem('cart',JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
  
      state.items=state.items.filter(item=>item.id!==action.payload.id);
      localStorage.setItem('cart',JSON.stringify(state.items));
      // localStorage.removeItem('cart',state.items);
      // return state.items.filter(product=>product.itemName!==action.payload.itemName);
      // state.items.pop(action.payload);
    },

    clearCart: () => {
      return { items: [] }; 
    },
    increment:(state,action)=>{
        //  state.counter+=1;
        console.log(action.payload);
        const itemId=action.payload;
        console.log(itemId);
        console.log(current(state.items.find(item=>console.log(item))));
        const item=state.items.find(item=>item.id===itemId);
        const itemData={...item};
        console.log(itemData);
    //     if(itemData){
    //     //  state.items[itemData].counter+=1;
    //     itemData.counter+=1;
    //     }
    if (typeof itemData.counter !== 'number') {
      itemData.counter = 1; // Initialize counter if it's not a number
  }
  itemData.counter += 1;
    },

    decrement:(state,action)=>{
        state.counter-=1;
        // const itemId=action.payload;
        // console.log(itemId);
        // // console.log(state.items)
        // const item=state.items.find(item=>item.id===itemId);
        // console.log(item);
        // if(item){
        //   item.counter-=1;
        // }
    },
    login:(state,action)=>{
      state.isAuthenticated=true;
      state.user=action.payload;
      sessionStorage.setItem('isAuthenticated','true');
      sessionStorage.setItem('user',JSON.stringify(action.payload));
    },
    logout:(state,action)=>{
      state.isAuthenticated=false;
      state.user=null;
      sessionStorage.removeItem('isAuthenticated','true');
      sessionStorage.removeItem('user',JSON.stringify(action.payload));
    }
  },
});

export const { items,addItem, removeItem, clearCart,increment,decrement,counter,login,logout } = cartSlice.actions;

export const selectCount=store=>{
  return store.cart.counter;
}

export default cartSlice.reducer;