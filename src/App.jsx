import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { getApiConfiguration, getGenres } from "./store/homeSlice"
import { fetchDataFromAPI } from "./utils/api"
import Home from "./pages/home/home"
import Details from "./pages/details/details"
import Explore from "./pages/explore/explore"
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import SearchResult from "./pages/searchResult/searchResult"
import PageNotFound from "./pages/404/PageNotFound"

function App() {
  const dispatch = useDispatch();
  const {url} = useSelector((state) => state.home)

    useEffect(() => {
      fetchApiConfig()
      genresCall()
    }, [])
  
    const fetchApiConfig = () => {
        fetchDataFromAPI('/configuration')
          .then((res) => {
            const url = {
              backdrop: res.images.secure_base_url + "original",
              poster: res.images.secure_base_url + "original",
              profile: res.images.secure_base_url + "original",
            }
            dispatch(getApiConfiguration(url));
          })
    }

    const genresCall = async() => {
      let promises = []
      let endPoint = ["tv", "movie"]
      let allGenres = {}

      endPoint.forEach((url) => {
         promises.push(fetchDataFromAPI(`/genre/${url}/list`))
      })

      const data = await Promise.all(promises)
      data.map(({genres}) => {
        return genres.map((item) => (allGenres[item.id] = item))
      })

      dispatch(getGenres(allGenres))
    }

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/:mediaType/:id"  element={<Details/>} />
          <Route path="/search/:query"  element={<SearchResult/>} />
          <Route path="/explore/:mediaType"  element={<Explore/>} />
          <Route path="*"  element={<PageNotFound/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
