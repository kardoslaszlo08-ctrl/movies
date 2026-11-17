
import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import {MyHeader} from './components/MyHeader'
import { Home } from './pages/Home'
import { Movies } from './pages/Movies'
import { TvShows } from './pages/TvShows'
import { SearchMedia } from './pages/SearchMedia'
import { NotFound } from './pages/NotFound'

const myrouter=createBrowserRouter([
  {
    element:<MyHeader/>,
    children:[
      {path:'/',element:<Home/>},
      {path:'/movies',element:<Movies/>},
      {path:'/tv',element:<TvShows/>},
      {path:'/search',element:<SearchMedia/>},
      {path:'*',element:<NotFound/>},
    ]
  }
])

function App() {

  return <RouterProvider router={myrouter}/>
}

export default App
