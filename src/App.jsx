import links from "@/Routes/links";
import { Outlet, Route, Routes } from "react-router-dom";
import Header from "@/Layers/Header/Header";
import Home from "@/Pages/Home/Home";
import Blogs from "./Pages/Blogs/Blogs";



const Layout = ({children}) => {
  return (
    <>
      <Header />  
        {children}
    </>
  )
}


const pages = [
  {
    path: links.client.home,
    element: <Home />,
  },
  {
    path: links.client.blogs,
    element: <Blogs />
  }
]

function App() {
  

  return (
    <Routes>
      <Route element={<Layout> <Outlet /> </Layout>}>
        {pages.map((page) => {
          return <Route key={page.path} path={page.path} element={page.element} />
        })}
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Route>
    </Routes> 
  )
}

export default App
