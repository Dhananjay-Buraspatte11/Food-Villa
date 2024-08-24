import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    const handleOnline=()=>{
     setIsOnline(true)
      }
      const handleOffline=()=>{
        setIsOnline(false)
         }
    window.addEventListener("online", handleOnline)
    window.addEventListener("offline",handleOnline)

    //Unmounting Phase-(class component) in functional added the return statement
    return()=>{
      window.removeEventListener("online",handleOnline);
      window.removeEventListener("offline",handleOffline);
    }
  }, [])
  return isOnline;//return tru or false;
}

export default useOnline;