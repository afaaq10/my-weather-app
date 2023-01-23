import { ChangeEvent, useEffect, useState } from "react"
import { forecastType } from './types/index'
import { optionType } from './types/index'




export const useForecast = () => {


    const [newSearch, setSearch] = useState<string>('')
    const [data, getDatafetch] = useState<[]>([])
    const [input, getInput] = useState<optionType | null>(null)
    const [forecast, setForecast] = useState<forecastType | null>(null)

    const getData = (value: string) => {

        fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=dd6b23224fe4d97029d5697bd54182cf&units=metric`)
            .then((res) => res.json())
            .then((data) => getDatafetch(data))


    }

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setSearch(value)
        if (value == "") return
        getData(value)



    }

    const getCity = (input: optionType) => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${input.lat}&lon=${input.lon}&appid=dd6b23224fe4d97029d5697bd54182cf&units=metric`)
            .then((res) => res.json())
            .then((data) => {
                const forecastData = { ...data.city, list: data.list.slice(0, 16) }

                setForecast(forecastData)
            })

    }

    const handleSubmit = () => {
        if (!input) return
        getCity(input)
        setSearch("")
    }

    const handleButtonClick = (option: optionType) => {
        getInput(option)


    }


    useEffect(() => {

        if (input) {
            setSearch(input.name)
            getDatafetch([])
        }

    }, [input])
    return {
        newSearch, data, forecast, handleSearch, handleSubmit, handleButtonClick
    }

}

