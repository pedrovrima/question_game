import React from "react"

type Props={
    children:React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export function Container({children}:Props){
    return(
        <div className="px-2 py-6 m-0 lg:px-64  w-screen min-h-screen flex flex-col text-center items-center justify-between">
            {children}
        </div>
    )
}


export function Heading({children, className}:Props){
    return(
        <h1 className={`${className} mb-20 text-2xl md:text-3xl  font-bold`}>
            {children}
        </h1>
    )
}




export function Text({children, className}:Props){
    return(
        <p className={` mb-2 md:mb-4 text-2xl md:text-3xl ${className}`}>
            {children}
        </p>
    )
}




export function TextSmall({children}:Props){
    return(
        <p className="mb-4  text-2xl ">
            {children}
        </p>
    )
}

export function GameCard({children}:Props){
    return(
        <div className="p-12 my-8 lg:mx-2 w-full  min-h-96 border-4  border-black flex flex-col justify-between ">
            {children}
        </div>
    )
}





export function Button ({children,onClick}:Props){
    return(
        <button className="px-4 py-2 my-4 border-2 mx-6 text-2xl border-black max-w-md" onClick={onClick}>
            {children}
        </button>
    )
}