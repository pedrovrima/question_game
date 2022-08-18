import React from "react"
import { ComponentProps } from "../types"

export function Container({children}:ComponentProps){
    return(
        <div className="px-2 py-6 m-0 lg:px-64  w-screen min-h-screen flex flex-col text-center items-center justify-between">
            {children}
        </div>
    )
}


export function Heading({children, className}:ComponentProps){
    return(
        <h1 className={`${className} mb-20 text-2xl md:text-3xl  font-bold`}>
            {children}
        </h1>
    )
}




export function Text({children, className}:ComponentProps){
    return(
        <p className={` mb-2 md:mb-4 text-2xl md:text-3xl ${className}`}>
            {children}
        </p>
    )
}




export function TextSmall({children}:ComponentProps){
    return(
        <p className="mb-4  text-2xl ">
            {children}
        </p>
    )
}

export function GameCard({children}:ComponentProps){
    return(
        <div className="p-6 md:p-12 my-8 lg:mx-2 w-full  min-h-96 border-4  border-black flex flex-col justify-between ">
            {children}
        </div>
    )
}





export function Button ({children,onClick}:ComponentProps){
    return(
        <button className="px-4 py-2 my-4 border-2 mx-6 text-2xl border-black max-w-md" onClick={onClick}>
            {children}
        </button>
    )
}