import './index.css'
import NavBar from './components/NavBar'
import Header from './components/header/Header'

function App() {

  return (
      <>
      <NavBar/>
      <div className='Wrapper'>
          <div className='box-frame'>
            {/* <div id='top-left'></div> */}

            <Header/>
            {/* <button>Lets Connect</button> */}

            <div className='frame'></div>
          {/* <div id='bottom-right'></div> */}

          </div> 
        </div>

      </>
          )
}

export default App
