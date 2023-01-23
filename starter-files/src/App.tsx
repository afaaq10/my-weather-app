
import Forecast from "./Forecast"
import Search from "./MySearch"
import { useForecast } from "./useForecast"


const App = () => {



  const { newSearch, data, forecast, handleSearch, handleSubmit, handleButtonClick
  } = useForecast()








  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full ">
      {
        forecast ? (<Forecast data={forecast} />) : (<Search newSearch={newSearch}
          data={data}
          handleSearch={handleSearch}
          handleSubmit={handleSubmit}
          handleButtonClick={handleButtonClick}
        />)
      }



    </main >
  )
}

export default App
