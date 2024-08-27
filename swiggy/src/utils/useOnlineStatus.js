import { useEffect, useState } from "react";

const useOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true);
    
    //check if online/offline
    useEffect(()=> {
        window.addEventListener("offline", (event) => {
            setOnlineStatus(false)
        });

        window.addEventListener("online", (event) => {
            setOnlineStatus(true)
        });
    },[])

    

    //Boolean True/False
    return onlineStatus; 
}

export default useOnlineStatus;