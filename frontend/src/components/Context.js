import React, {createContext,useState } from 'react'


export const DataContext = createContext();

export const DataProvider = ({ children })=>{
  const [state,setState] = useState({
    products:[
      {
        "_id":"1",
        "title":"Nike shoes 01",
         "src":"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/306de27c-9db3-4885-a939-9480eb1e6543/NIKE+AIR+MAX+ISHOD.png",
         "Description":"Nike Dunk Low Retro",
         "Content":"men's shoes",
         "Price":29,
         "colors":["red","black","crimson","teal"],
         "count":1
      },
      {
        "_id":"2",
        "title":"Nike shoes 02",
         "src":"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6b0e56a7-3f23-4943-9aeb-b56ee221d4b0/NIKE+DUNK+LOW+RETRO.png",
         "Description":"Nike Dunk Low",
         "Content":"men's shoes",
         "Price":19,
         "colors":["red","crimson","teal"],
         "count":1
      },
      {
        "_id":"3",
        "title":"Nike shoes 03",
         "src":"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/13273f58-23a8-4145-8939-8ac5ff3a240e/NIKE+GO+FLYEASE.png",
         "Description":"Nike Air Max Ishod",
         "Content":"men's shoes",
         "Price":50,
         "colors":["lightblue","white","crimson","teal"],
         "count":1
      },
      {
        "_id":"4",
        "title":"Nike shoes 04",
         "src":"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e53419df-8536-4c14-8f0d-2e481b1fad2f/NIKE+DOWNSHIFTER+12.png",
         "Description":"Nike Go FlyEase",
         "Content":"men's shoes",
         "Price":15,
         "colors":["orange","black","crimson","teal"],
         "count":1
      },
      {
        "_id":"5",
        "title":"Nike shoes 05",
         "src":"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/439242cb-f634-4309-884e-224e9868b054/NIKE+DUNK+LOW+NN.png",
         "Description":"Nike Downshifter 12",
         "Content":"men's shoes",
         "Price":10,
         "colors":["orange","black","crimson","teal"],
         "count":1
      },
      {
        "_id":"6",
        "title":"Nike shoes 06",
         "src":"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b2f962c4-31bd-4c25-a5d1-b579e1ec0787/NIKE+FULL+FORCE+LO+COB.png",
         "Description":"Nike Air Max Pulse",
         "Content":"men's shoes",
         "Price":17,
         "colors":["orange","black","crimson","teal"],
         "count":1
      }
      ],
      cart:[]
  });


const addCart = (id) => {
  const{products}=state;
  const{cart}=state;
  const check= cart.every(item=> item._id  !== id)
 if(check){
  const { products, cart } = state;
  const data = products.find(product => product._id === id);
  setState({ ...state, cart: [...cart, data] });
  console.log(data);  
 }else{
  alert("The product has been added to cart .")
 }
  
 
  }
return (
    <DataContext.Provider value={{state,setState,addCart}}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider
