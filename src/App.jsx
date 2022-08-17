import {default as routesObject} from './routes'
import {useRoutes} from 'react-router-dom'

function App() {
    const routes = useRoutes(routesObject)


    return (
        <div className="App">
          {routes}
        </div>
    )
}

export default App
