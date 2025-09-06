import './index.css'
import NavBar from './components/NavBar'

function App() {

  return (
      <>
      <NavBar/>
      <div className='Wrapper'>
          <div className='box-frame'>
            <div id='top-left'></div>

            <div className='content'>
              <h1>Brianna <br /> <u>Greenslade</u></h1>
              <button>Lets Connect</button>
            </div>
            
            <div className='frame'></div>
          <div id='bottom-right'></div>

          </div> 
        </div>

      </>
          )
}

export default App
