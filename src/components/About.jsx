import React from "react";
import about from "../style/about.module.css";
import ellipse from "../assets/image/ellipse.png";
import ellipseedu from "../assets/image/ellipseedu.png";
import ellipseexp from "../assets/image/ellipseexp.png";
import ellipsecert from "../assets/image/ellipsecert.png";
import sun1 from "../assets/image/sun1.png";

function About() {
  return (
    <>
      <section className={about.about_div}>
        {/* <h1>Ixtisasım</h1> */}
        <div className={about.about_big_div}>
          <div className={about.about_mini_div}>
            <ul>
              <li>
                <img src={ellipseedu} />
                <h3>Təhsil</h3>
              </li>

              <li className={about.psxdetail_infodiv_education_li}>
                <img src={ellipse} />
                <div>
                  <h4>Bakı Dövlət Universiteti</h4>
                  <span>Riyaziyyat</span>
                  <br />
                  <span>2016-2020</span>
                </div>
              </li>
              <li className={about.psxdetail_infodiv_education_li}>
                <img src={ellipse} />
                <div>
                  <h4>Coders Azerbaijan</h4>
                  <span>FullStack Web Developer</span>
                  <br />
                  <span>02.2022-10.2022</span>
                </div>
              </li>
              <li className={about.psxdetail_infodiv_education_li}>
                <img src={ellipse} />
                <div>
                  <h4>Technest(Code Academy)</h4>
                  <span>Advanced FrontEnd</span>
                  <br />
                  <span>11.2022-03.2023</span>
                </div>
              </li>
            </ul>
          </div>
          <div className={about.about_mini_div}>
            <ul>
              <li>
                <img src={ellipseexp} />
                <h3>Təcrübə</h3>
              </li>

              <li className={about.psxdetail_infodiv_education_li}>
                <img src={ellipse} />
                <div>
                  <h4>Coders Azerbaijan</h4>
                  <span>Mentor(Front-end)</span>
                  <br />
                  <span>07.2022-11.2022</span>
                </div>
              </li>
              <li className={about.psxdetail_infodiv_education_li}>
                <img src={ellipse} />
                <div>
                  <h4>Unec "Bootstart"proqramı</h4>
                  <span>Front-end Web Developer</span>
                  <br />
                  <span>10.2022-...</span>
                </div>
              </li>
            </ul>
          </div>
          <div className={about.about_mini_div}></div>
        </div>
        {/* <div className={about.about_sun_div}>
          <img src={sun1} />
        </div> */}
      </section>
    </>
  );
}

export default About;
