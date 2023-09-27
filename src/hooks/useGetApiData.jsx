import { useState, useEffect } from 'react'
import apiService from '@/services/apiService'

function useGetApiData(URL) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)

        async function getData() {
            try {
                const dataApi = await apiService(URL)
                setData(dataApi.data)
            } catch (error) {
                setError(error.message)
            } finally {
                setIsLoading(false)
            }
        }
        getData()
    }, [URL])

    return { data, error, isLoading }
}

export default useGetApiData
