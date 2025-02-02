import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './MyNav'
import MyFooter from './MyFooter'
import Alert from './Alert'
import CardBooks from './AllTheBooks'
import AllTheBooks from './AllTheBooks'
import SearcBar from './SearchBar'

function App() {
  return (
    <main className='App'>

      <MyNav />

      <div className='App-content'>
        <div className='container mt-5'>
          <Alert />
        </div>

        <div className='container mt-5 mb-5'>
          <AllTheBooks/>
        </div>



      </div>
      <footer>
        <MyFooter />
      </footer>
    </main>

  );
}

export default App;
