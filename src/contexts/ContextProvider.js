import React, { createContext, useContext, useState } from 'react'

const initialState ={

    chat:false,
    cart:false,
    userProfile:false,
    notification:false,
}

const StateContext =createContext()



const ContextProvider = ({children}) => {

const [activeMenu,setActiveMenu] =useState(true)
const [isClicked,setisClicked] =useState(initialState)
const [screenSize,setScreenSize] =useState(undefined)

const handleClick =(d)=>{
    setisClicked(
        {...initialState,[d]:true}
    )
    }

  return (
    <StateContext.Provider value={{activeMenu,setActiveMenu,isClicked,setisClicked,handleClick,screenSize,setScreenSize}}>
        
        {children}</StateContext.Provider>
  )
}

export default ContextProvider


export const useStateContext =()=>useContext(StateContext)