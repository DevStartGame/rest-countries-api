import { useState, useEffect } from 'react'
import apiService from '@/services/apiService'

function useGetApiData(URL) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    useEffect(() => {
        async function getData() {
            setError(null)
            setIsLoading(true)

            try {
                const res = await apiService(URL)
                setData(res.data)
            } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false)
            }
        }
        getData()
    }, [URL])

    return { data, error, isLoading }
}

export default useGetApiData
