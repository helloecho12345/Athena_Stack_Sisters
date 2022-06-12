import logo from './logo.svg';
import './App.css';
//import Test from './components/Test';
import Header from './components/Header';
import EducationBody from './components/EducationBody';
import WorkBody from './components/WorkBody';
import IntroBody from './components/IntroBody';
import LegalBody from './components/LegalBody';
import HealthBody from './components/HealthBody';
import EmergencyBody from './components/EmergencyBody';
import HomeBody from './components/HomeBody';

function App() {
  return (
    <div className="App">
        <Header />
        <IntroBody />
        <WorkBody />
        <HomeBody />
        <EducationBody />
        <LegalBody />
        <HealthBody />
        <EmergencyBody />
    </div>
  );
}

export default App;
