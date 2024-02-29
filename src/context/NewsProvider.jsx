/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, createContext, useEffect } from 'react'
import axios from 'axios'

const NewsContext = createContext()

const NewsProvider = ({ children }) => {

    const [category, setCategory] = useState('general')
    const [newsapi,setNewsapi] = useState([])

    useEffect(() => {
        const consultAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&page=2&apiKey=${import.meta.env.VITE_API_KEY}`
            
            const { data } = await axios(url)
            
            console.log(data.articles)
            setNewsapi(data.articles)
        }
        consultAPI()
    },[category])

    const handleChangeCategory = e => {
        setCategory(e.target.value)
    }

    return (
        <NewsContext.Provider value= {{category,handleChangeCategory, newsapi}}>
           {children}
        </NewsContext.Provider>
    )
}

export {
    NewsProvider
}

export default NewsContext;