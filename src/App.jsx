import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import SoundSection from './components/SoundSection';
import DisplaySection from './components/DisplaySection';
import WebgiViewer from './components/WebgiViewer';
import Loader from './components/Loader';
import { useRef } from 'react';


function App() {
  const contentRef = useRef()
  const webgiViewer = useRef()
  const handleViewerRef = () =>{
    webgiViewer.current.triggerPreview(); 
  }
  return (
    <div className="App">
      <Loader></Loader>
      <div id='content' ref={contentRef}>
        
      <Nav/>
      <Jumbotron/>
      <SoundSection/>
      <DisplaySection triggerPreview={handleViewerRef} ></DisplaySection>
    </div>
      <WebgiViewer contentRef={contentRef} ref={webgiViewer}></WebgiViewer>
      

    </div>
  );
}

export default App;
