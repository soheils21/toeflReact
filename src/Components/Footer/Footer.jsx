import bg10 from "../../Assets/Images/bg10.png";
import logowhite from "../../Assets/Images/logoow.png";

const Footer = () => {
  return (
    <>
      <footer
        className="site-footer style-1"
        id="footer"
        style={{
            backgroundImage: `url(${bg10})`,
          }}
      >
        <div className="footer-top">
          <div className="container">
            <div
              className="footer-info wow fadeIn"
            >
              <div className="row align-items-center rtl">
                <div className="col-xl-6 col-md-4 ta-r">
                  <div className="footer-logo">
                    <a>
                      <img src={logowhite} alt="" style={{maxWidth:'25%'}} />
                    </a>
                  </div>
                </div>
                <div className="col-xl-3 col-md-4 col-sm-6 ta-r">
                  <div className="icon-bx-wraper left m-b10">
                    <div className="icon-lg">
                      <a className="icon-cell" href="/#">
                        <i className="flaticon-email"></i>
                      </a>
                    </div>
                    <div className="icon-content ltr">
                      <p>
                        +937 617 6535
                        <br />
                        info@example.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-4 col-sm-6 ta-r">
                  <div className="icon-bx-wraper left m-b10">
                    <div className="icon-lg">
                      <a className="icon-cell" href="/#">
                        <i className="flaticon-location"></i>
                      </a>
                    </div>
                    <div className="icon-content">
                      <p>آمل خیابان 17 شهریور </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row rtl">
              <div
                className="col-xl-3 col-lg-4 col-sm-6 wow fadeIn ta-r"
              >
                <div className="widget widget_about">
                  <h5 className="footer-title">درباره ما</h5>
                  <p>
                  اینترنتی است. به عنوان مثال در چند سال گذشته برای خرید لباس به بازار می‌رفتید اما الان فروشگاه‌های اینترنتی یا صفحات مختلفی در شبکه‌های اجتماعی مثل اینستاگرام هستند که می‌توانید برای بررسی و خرید به آنها مراجعه کنید. یا برای شرکت در یک کلاس مجبور بودید که بصورت حضوری مراجعه کنید اما امروزه به دلیل شیوع کرونا بیشتر کلاس‌ها بصورت وبینار 
                  </p>
                  <div className="dlab-social-icon">
                    <ul>
                      <li>
                        <a
                          className="fa fa-facebook"
                          href="https://en-gb.facebook.com/"
                        ></a>
                      </li>
                      <li>
                        <a
                          className="fa fa-instagram"
                          href="https://www.instagram.com/"
                        ></a>
                      </li>
                      <li>
                        <a
                          className="fa fa-twitter"
                          href="https://twitter.com/login?lang=en"
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-2 col-sm-6 wow fadeIn ta-r"
               
              >
                <div className="widget widget_services">
                  <h5 className="footer-title">لینک ها</h5>
                  <ul>
                    <li>
                      <a href="/#">صفحه اصلی</a>
                    </li>
                    <li>
                      <a href="/#">خدمات</a>
                    </li>
                    <li>
                      <a href="/#">پروژه ها</a>
                    </li>
                    <li>
                      <a href="/#">ارتباط با ما</a>
                    </li>
                    <li>
                      <a href="/#">وبلاگ</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-sm-6 wow fadeIn ta-r"
              >
                <div className="widget widget_services">
                  <h5 className="footer-title">خدمات</h5>
                  <ul>
                    <li>
                      <a>استراتژی تحقیق</a>
                    </li>
                    <li>
                      <a>طراحی وب سایت</a>
                    </li>
                    <li>
                      <a>پشتیبانی وب سایت</a>
                    </li>
                    <li>
                      <a>دیجیتال مارکتینگ</a>
                    </li>
                    <li>
                      <a>طراحی اپلیکیشن </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn ta-r"
              >
                <div className="widget widget_services">
                  <h5 className="footer-title">پیوندهای دیگر</h5>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="footer-bottom wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay="0.2s"
        >
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <span className="copyright-text">
                تمامی حقوق سایت برای ویراکدینگ محفوظ می باشد. © 2022
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <a href="#top"><button className="scroltop icon-up" type="button" style={{display:'inline-block'}}><i className="fa fa-arrow-up"></i></button></a>
    </>
  );
};

export default Footer;
