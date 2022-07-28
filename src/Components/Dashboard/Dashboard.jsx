import { SetActiveRoute } from "../../Context/setActiveRoute";
import { useTitle } from "../../Context/setTitle";
const Dashborad = () => {
  useTitle("داشبورد");
  SetActiveRoute("dashboard");
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <ul className="nav nav-pills mb-4 light">
                <li className=" nav-item">
                  <a
                    href="#navpills-1"
                    className="nav-link"
                    data-bs-toggle="tab"
                    aria-expanded="false"
                  >
                    Tab One
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#navpills-2"
                    className="nav-link active"
                    data-bs-toggle="tab"
                    aria-expanded="false"
                  >
                    Tab Two
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#navpills-3"
                    className="nav-link"
                    data-bs-toggle="tab"
                    aria-expanded="true"
                  >
                    Tab Three
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div id="navpills-1" className="tab-pane">
                  <div className="row">
                    <div className="col-md-12">
                      {" "}
                      Raw denim you probably haven't heard of them jean shorts
                      Austin. Nesciunt tofu stumptown aliqua, retro synth master
                      cleanse. Mustache cliche tempor, williamsburg carles vegan
                      helvetica.
                      <p>
                        <br /> Reprehenderit butcher retro keffiyeh dreamcatcher
                        synth. Cosby sweater eu banh mi, qui irure terry
                        richardson ex squid.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="navpills-2" className="tab-pane active">
                  <div className="row">
                    <div className="col-md-12">
                      {" "}
                      Raw denim you probably haven't heard of them jean shorts
                      Austin. Nesciunt tofu stumptown aliqua, retro synth master
                      cleanse. Mustache cliche tempor, williamsburg carles vegan
                      helvetica.
                      <p>
                        <br /> Reprehenderit butcher retro keffiyeh dreamcatcher
                        synth. Cosby sweater eu banh mi, qui irure terry
                        richardson ex squid.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="navpills-3" className="tab-pane">
                  <div className="row">
                    <div className="col-md-12">
                      {" "}
                      Raw denim you probably haven't heard of them jean shorts
                      Austin. Nesciunt tofu stumptown aliqua, retro synth master
                      cleanse. Mustache cliche tempor, williamsburg carles vegan
                      helvetica.
                      <p>
                        <br /> Reprehenderit butcher retro keffiyeh dreamcatcher
                        synth. Cosby sweater eu banh mi, qui irure terry
                        richardson ex squid.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashborad;
