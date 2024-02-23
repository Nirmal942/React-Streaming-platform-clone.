import './App.css'

import Login from './Login'
import SignUp from './SignUp'
import Homescreen from './Homescreen';
import Nav from './app/Nav';
import Banner from './Banner';
import Axiosapi from './Axiosapi';

import Row from './app/Row';


function App() {


  const user = null;


  return (
    <>

      {
        !user ? (<Login />) : (<Homescreen />)                            // agar user null hai ya nhi hai toh (login) show ho nhi toh 
      }

      {/* <SignUp /> */}
      <Nav />
      <Homescreen />
      <Banner />
      <Axiosapi />
      <Row title="Netflix originals" isLargeRow fetchURL />
      < Row title='Trending now' />
      < Row title='Top rated' />
      < Row title='Acton movies' />
      < Row title='Comedy movies' />
      < Row title='Horror movies' />
      < Row title='Documentry movies' />




    </>
  )
}

export default App
