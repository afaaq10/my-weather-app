import { ChangeEvent, useEffect, useState } from "react"
import { optionType } from './types/index'

type Props = {
    newSearch: string;
    data: [];
    handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: () => void;
    handleButtonClick: (option: optionType) => void

}
const Search = ({ newSearch, data, handleSearch, handleSubmit, handleButtonClick }: Props) => {





    return (
        <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full mb-[28.25rem]">

            <div className="relative bottom-12 ">
                <input autoFocus type="text" placeholder="Enter your city here" value={newSearch} onChange={handleSearch} />



                <button className="absolute border-r-1 rounded-r-md-border-2 bg-red-200 hover:bg-red-400 border-zinc-100 text-zinc-1 left:15 w-16  mx-1 cursor-pointer" onClick={handleSubmit}>Search</button>

                <ul className="absolute  bg-white" style={{ width: '125px' }}>

                    {data.map((option: optionType) => <button onClick={() => handleButtonClick(option)} className="flex hover:bg-zinc-700
        hover:text-white  ">{option.name}</button>)}
                </ul>
            </div>

        </main >
    )
}

export default Search
