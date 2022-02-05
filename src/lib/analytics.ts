import ReactGA from "react-ga"
 
const TRACKING_ID = "G-GR99QS3PLSX"
 
function init() {
  // Enable debug mode on the local development environment
  ReactGA.initialize(TRACKING_ID)
}
 
function sendEvent(payload) {
  ReactGA.event(payload)
}
 
function sendPageview(path) {
  ReactGA.set({ page: path })
  ReactGA.pageview(path)
}
 
export default {
  init,
  sendEvent,
  sendPageview,
}
