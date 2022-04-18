import { useEffect, useState } from "react"


// Custom hook to load all reviews from data 

const useServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])
    return [services, setServices];
}

export default useServices;