import axios from "axios";
import { useEffect, useState } from "react"

const useAxios = (api) => {
    const [response, setResponse] = useState(null);

    useEffect(() => {
        const respon = async() => {
            try {
                const res = await axios.get(api);
                setResponse(res.data);
            } catch (error) {
                console.error('error')
            }
        }

        respon()
    }, [api])

    return {response}
}

export default useAxios;