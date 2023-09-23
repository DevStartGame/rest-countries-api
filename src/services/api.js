import axios from 'axios'

export default function getData(URL) {
    const DATA = axios.get(URL).then(res => res.data)

    return DATA
}
