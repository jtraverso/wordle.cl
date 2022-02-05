import { useEffect, useState} from "react"
import { useLocation } from "react-router-dom"
import ReactGA from "react-ga"

const useGaTracker = () => {
  const location = useLocation()
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    ReactGA.initialize("G-GR99QS3PLS")
    setInitialized(true)
    }, [setInitialized])
 
  useEffect(() => {
    if (initialized) {
      ReactGA.pageview(location.pathname + location.search)
    }
  },[initialized, location])
}

export default useGaTracker
