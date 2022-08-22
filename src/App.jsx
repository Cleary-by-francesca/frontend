import {default as routesObject} from './routes'
import {useRoutes} from 'react-router'
import EmployeesProvider from "./context/EmployeesContext.jsx";

function App() {
    const routes = useRoutes(routesObject)


    return (
        <EmployeesProvider>
            <div id="App">
                {routes}
            </div>
        </EmployeesProvider>
    )
}

export default App
