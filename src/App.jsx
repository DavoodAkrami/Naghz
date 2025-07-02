import links from "@/Routes/links";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "@/Pages/Home/Home";
import OurTeam from "@/Pages/OurTeam/OurTeam";
import Blogs from "@/Pages/Blogs/Blogs";
import Layout from "@/Layers/Layout/Layout";






export const pages = [
  {
    path: links.client.home,
    element: <Home />,
  },
  {
    path: links.client.blogs,
    element: <Blogs />,
  },
  {
    path: links.client.ourTeam,
    element: <OurTeam />,
  },
  {
    path: links.client.questions,
    element: '',
  },
  {
    path: links.client.contactUs,
    element: '',
  },
  {
    path: links.client.feedBack,
    element: '',
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
