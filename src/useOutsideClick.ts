import { useState, useEffect } from 'react';

export const useOutsideClick = (element: any,initialState: any) => {
    const [isActive, setIsActive] = useState(initialState)

    useEffect(()=>{
        const onClick = (e: any) => {
            if (element.current !== null && !element.current.contains(e.target)){
                setIsActive(!isActive);
            }
        }
        if(isActive){
            window.addEventListener('click',onClick)
        }

        return () => {
            window.removeEventListener('click',onClick)
        }
    },[isActive,element])

    

    return [isActive, setIsActive]
}