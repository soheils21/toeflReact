import axios from "axios";
import { useEffect, useState } from "react";
import { SetActiveRoute } from "../../Context/setActiveRoute";

import { useTitle } from "../../Context/setTitle";

const Leitner = () => {
  const [data, setData] = useState({ title: "", audio: ["", ""] });
  useTitle("مرور کلمات لایتنر");
  SetActiveRoute("leitner");
  async function getWord(word) {
    const options = {
      url: `https://www.ldoceonline.com/dictionary/${word}`,
      method: "GET",
    };
    var data = await axios(options);
    return data.data;
  }
  function htt(who, deep) {
    if (!who || !who.tagName) return "";
    var txt,
      ax,
      el = document.createElement("div");
    el.appendChild(who.cloneNode(false));
    txt = el.innerHTML;
    if (deep) {
      ax = txt.indexOf(">") + 1;
      txt = txt.substring(0, ax) + who.innerHTML + txt.substring(ax);
    }
    el = null;
    return txt;
  }
  function ctl(src) {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = src;
    document.head.appendChild(link);
  }
  useEffect(() => {
    // getWord("issue").then((res) => {
    //   var parser = new DOMParser();
    //   var htmlDoc = parser.parseFromString(res, "text/html");
    //   var par = htmlDoc.body.getElementsByClassName("dictionary")[0];
    //   var par2 = par.getElementsByClassName("dictentry")[0];
    //   var head = htmlDoc.head.getElementsByTagName("link");
    //   var title = par2.getElementsByClassName("HWD ")[0].textContent;
    //   var Sense = par2.getElementsByClassName("frequent Head")[0];
    //   // for (let index = 0; index < head.length; index++) {
    //   //   const element = head[index];
    //   //   if (element.getAttribute("rel") == "stylesheet") {
    //   //     ctl(element.getAttribute("href"));
    //   //     console.log(element.getAttribute("href"));
    //   //   }
    //   // }
    //   // console.log(head);
    //   // console.log(htt(par, true));
    //   console.log(Sense);
    //   setData({
    //     title: htt(Sense, true),
    //     audio: [
    //       "https://www.ldoceonline.com/media/english/ameProns/ld5_hello_.mp3?version=1.2.53",
    //     ],
    //   });
    // });
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        {data ? (
          <div className="col-12">
            <nav className="justify-content-center d-flex">
              <ul className="pagination pagination-circle">
                <li className="page-item page-indicator">
                  <a className="page-link" href="">
                    <i className="la la-angle-right"></i>
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="">
                    4
                  </a>
                </li>
                <li className="page-item page-indicator">
                  <a className="page-link" href="">
                    <i className="la la-angle-left"></i>
                  </a>
                </li>
              </ul>
            </nav>
            <div className="card">
              <div className="card-header border-0 pb-0 u213">
                <div className="row w-100">
                  <div className=" col-xl-3 col-12">
                    <h5 className="card-title">
                      کلمه
                      <span className="mx-1">1</span>
                      از
                      <span className="mx-1">30</span>
                    </h5>
                  </div>
                  <div className=" col-xl-9 p-0 col-12">
                    <ul className="nav nav-pills light ltr">
                      <li className=" nav-item">
                        <a className="nav-link active h3">
                          <i className="fa fa-info-circle mx-2"></i>
                          <span className="u212">Deatil</span>
                        </a>
                      </li>
                      <li className=" nav-item">
                        <a
                          className="nav-link h3"
                          onClick={() => {
                            new Audio(
                              "https://www.ldoceonline.com/media/english/ameProns/ld5_hello_.mp3?version=1.2.53"
                            ).play();
                          }}
                        >
                          <span className="u212">US</span>
                          <i className="fa fa-volume-up mx-2"></i>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link  h3"
                          onClick={() => {
                            new Audio(
                              "https://www.ldoceonline.com/media/english/ameProns/ld5_hello_.mp3?version=1.2.53"
                            ).play();
                          }}
                        >
                          <span className="u212">UK</span>
                          <i className="fa fa-volume-up mx-2"></i>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link h3">
                          <span className="u212">Spell Checker</span>

                          <input
                            type="checkbox"
                            className="mx-2"
                            name=""
                            id=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="row flex-md-row-reverse">
                  <div className="col-md-6 col-12 ltr">
                    <div className="w-100  h1">Issue</div>
                    <div className="w-100 h4">
                      is‧sue1 /ˈɪʃuː, ˈɪsjuː $ ˈɪʃuː/ noun
                    </div>
                  </div>
                  <div className="col-md-6 col-12 justify-content-center d-flex u214">
                    <button
                      type="button"
                      className="btn light btn-primary btn-circle"
                      style={{
                        height: "150px",
                        width: "150px",
                        boxShadow: "0 2px 4px #ccc",
                      }}
                    >
                      <i
                        className="fa fa-microphone"
                        style={{ fontSize: "80px" }}
                      ></i>
                    </button>
                  </div>
                  <div className="col-12 ltr">
                    <button
                      type="button"
                      className="btn ms-2 light btn-success"
                    >
                      می دانم
                    </button>
                    <button
                      type="button"
                      className="btn ms-2 light btn-primary"
                    >
                      نمی دانم
                    </button>
                    <button
                      type="button"
                      className="btn ms-2 mt-2 mt-sm-0 light btn-primary"
                    >
                      نمایش معنی
                    </button>
                    <button type="button" className="btn  light btn-danger">
                      حذف کلمه
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Leitner;
