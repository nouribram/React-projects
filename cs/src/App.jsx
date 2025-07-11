import './index.css'
import Layout from './components/Layout';



function App() {

  const isAuthenticated = false
 
  const authenticatedContent = (

    <>
        <Stats/>
        <History/>
    </>

  )

  return (

   <Layout>
    <Hero/>
    <CoffeForm/>
    {isAuthenticated &&  (authenticatedContent)}
   </Layout>

  )
}

export default App
