import {createPortal} from "react-dom"
import {useState, useLayoutEffect} from "react"
function ImagePortal({children, wrapperId = "react-portal-wrapper"}) {
  const [wrapperElement, setWrapperElement] = useState(null)
  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId)
    let systemCreated = false
    // if element is not found with wrapperId or wrapperId is not provided,
    // create and append to body
        if (!element) {
          systemCreated = true
          element = createWrapperAndAppendToBody(wrapperId)
        }
        setWrapperElement(element)
        return () => {
          // delete the programatically created element
          if (systemCreated && element.parentNode) {
            element.parentNode.removeChild(element)
          }
        }
  }, [wrapperId])

  function createWrapperAndAppendToBody(wrapperId) {
    const wrapperElement = document.createElement("div")
    wrapperElement.setAttribute("id", wrapperId)
    document.body.appendChild(wrapperElement)
    return wrapperElement
  }

   if (wrapperElement === null) return null

  return createPortal(children, element)
}
export default ImagePortal
