import '../index.css';
import Introduction from './Introduction'
import About from './About'
import Contact from './Contact'
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <Introduction/>
      {/* <About/> */}
      <Projects/>
      <Contact/>
      
    </div>
  )
}

export default App;
