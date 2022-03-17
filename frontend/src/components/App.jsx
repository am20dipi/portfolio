import '../index.css';
import Introduction from './Introduction'

import Contact from './Contact'
import Projects from './Projects'
import Blogs from './Blogs';

function App() {
  return (
    <div className="App">
        <Introduction/>
        <Projects/>
        <Blogs/>
        <Contact/>
    </div>
  )
}

export default App;
