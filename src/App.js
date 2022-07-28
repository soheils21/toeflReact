import Dashboard from "./Components/Dashboard/Dashboard";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import GlobalProvider from "./Context/Provider";
import "./importfont";
import "./Assets/css/style.css";
import "./Assets/css/common.css";
import "./Assets/vendor/jquery-nice-select/css/nice-select.css";
import "./Assets/vendor/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css";
import "./fonts/eot/IRANYekanWebBlack.eot";
import Leitner from "./Components/Leitner/Leitner";
import Frame from "./Components/Frame";

function App() {
  return (
    <>
      <GlobalProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Frame />}>
              <Route path="leitner" element={<Leitner />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
            {/* <Route path="*" element={<P404 header="404" />} /> */}
          </Routes>
        </HashRouter>
      </GlobalProvider>
    </>
  );
}

export default App;
