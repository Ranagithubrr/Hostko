import './App.css';
import Navbar from './components/Navbar/Navbar';
import MainArea from './components/MainArea/MainArea';
import Slider from './components/Slider/Slider';
import HostingPlan from './components/HostingPlan/HostingPlan';
import EasySteps from './components/EasySteps/EasySteps';
import SelectPlan from './components/SelectPlan/SelectPlan';
import ServerLocation from './components/ServerLocation/ServerLocation';
import Testimonials from './components/Testimonials/Testimonials';
import MoneyBack from './components/MoneyBack/MoneyBack';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Navbar />
        <MainArea />
        <Slider />
        <HostingPlan />
        <EasySteps />
        <SelectPlan />
        <ServerLocation />
        <Testimonials />
        <MoneyBack />
        <Footer />
      </div>
    </div>
  );
}

export default App;
