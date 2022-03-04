import '../index.css';
import Introduction from './Introduction'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import Blogs from './Blogs';

function App() {
  return (
    <div className="App">
      <Introduction/>
      {/* <About/> */}
      <Projects/>
      <Blogs/>
      <Contact/>
      
    </div>
  )
}

export default App;
