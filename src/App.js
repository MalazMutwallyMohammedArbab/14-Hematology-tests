import {Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Abnormal from './Pages/Abnormal';
import Batch from './Pages/Batch';
import CBC from './Pages/CBC';
import Coagulation from './Pages/Coagulation';
import Registration from './Pages/Registration';
import Result from './Pages/Result';
import Special from './Pages/Special';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/abnormal" element={<Abnormal />} />
        <Route exact path="/batch" element={<Batch />} />
        <Route exact path="/cbc" element={<CBC />} />
        <Route exact path="/coagulation" element={<Coagulation />} />
        <Route exact path="/registration" element={<Registration />} />
        <Route exact path="/result" element={<Result />} />
        <Route exact path="/special" element={<Special />} />
      </Routes>
    </div>
  );
}

export default App;
