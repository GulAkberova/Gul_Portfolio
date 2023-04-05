import React from "react";
import skills from "../style/skills.module.css";
import sun from "../assets/image/sun.png";
import sun1 from "../assets/image/sun1.png";
import sun4 from "../assets/image/sun4.png";
import contact1 from "../assets/image/contact1.jpg";

function Skills() {
  return (
    <>
      <section className={skills.skills_div_over}>
        <section className={skills.skills_div}>
          <h1>Texniki Bacarıqlar</h1>
          <div className={skills.skills_mini_divs}>
            {/* <div className={skills.skills_contact_div}>
            <img src={contact1} />
          </div> */}
            <div className={skills.skills_sun_div}>
              <img src={sun4} />
            </div>
            <div className={skills.skills_mini_div}>
              {/* <div className={skills.skills_sun11_div}>
              <img src={sun} />
            </div> */}
              <button>Html5</button>
              <button>Css3</button>
              <button>Bootstrap</button>
              <button>Sass</button>

              <button>JavaScript</button>
              <button>React</button>
              <button>Redux</button>
              <button>NodeJs</button>
              <button>Express</button>
              <button>MongoDb</button>
              <button>Rest Api</button>
              <button>Python</button>
              <button>Django</button>
              <button>Oracle Sql</button>
              <button>Material UI</button>
              <button>Chakra</button>
              <button>GitHub</button>
            </div>
          </div>
          {/* <div className={skills.skills_sun_div}>
          <img src={sun1} />
        </div> */}
        </section>
        <section className={skills.skills_div}>
          <h1>Yumşaq Bacarıqlar</h1>
          <div className={skills.skills_mini_divs1}>
            <div className={skills.skills_mini_div1}>
              {/* <div className={skills.skills_sun111_div}>
              <img src={sun} />
            </div> */}
              <button>Yaxşı Araşdırma</button>
              <button>Zamanın İdarə olunması</button>
              <button>Asan Ünsiyyət</button>
              <button>Özgüvənli</button>

              <button>Sürətli Öyrənən</button>
              <button>Dəyişməyə uyğunlaşan</button>
              <button>Gülərüz</button>
              <button>Öyrənməyi və öyrətməyi sevən</button>
              <button>Komanda ruhuna inanan</button>
            </div>
            {/* <div className={skills.skills_contact_div}>
            <img src={contact1} />
          </div> */}
            <div className={skills.skills_sun_div1}>
              <img src={sun4} />
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Skills;
