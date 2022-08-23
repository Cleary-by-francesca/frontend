import { createPortal } from "react-dom"


const Portal = ({ children }) => {
    const mount = document.querySelector("#portals-root")

    return createPortal(children, mount)
}

export default Portal
