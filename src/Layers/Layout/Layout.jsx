import Header from "@/Layers/Header/Header";

const Layout = ({children}) => {
    return (
      <>
        <Header />  
          {children}
      </>
    )
}

export default Layout;