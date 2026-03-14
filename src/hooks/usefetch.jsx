
import { useEffect, useState } from 'react'

const Itemslist = (url, initialvalue = []) => {

    const [data, setdata] = useState(initialvalue)
    const [error, seterror] = useState(null)
   
    const getitems = () => {
        fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            return response.json()
        })
        .then((data) => setdata(data))
        .catch((error) => seterror(error))
    }

    useEffect(() => {
        getitems()
    }, [])

    return [data, error]
}

export default Itemslist