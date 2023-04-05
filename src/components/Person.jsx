import React from "react";
import person from "../style/person.module.css";
import gul from "../assets/Gul.jpg";
import sun from "../assets/image/sun.png";
import sun1 from "../assets/image/sun1.png";
import sun4 from "../assets/image/sun4.png";

function Person() {
  return (
    <>
      <section className={person.person_div}>
        <div className={person.person_sun11_div}>
          <img src={sun4} />
        </div>
        <div className={person.person_mini_div}>
          <div className={person.person_sun_div}>{/* <img src={sun} /> */}</div>
          <img src={gul} />
          <h1>Gülxanım Əkbərova</h1>
          <p>
            <b> Portfolio səhifəmə xoş gəldin:)</b> <br />
            Mən veb saytların qurulması və saxlanması üzrə 1 ildən artıq
            təcrübəyə malik yenilikçi Front End Developerəm. HTML, CSS,
            JavaScript, React və müasir kitabxanalarda bacarıqlıyam.Çox
            iddialıyam və məqsədim proqramlaşdırma sahəsində çox uğurlu karyera
            qurmaq və nüfuzlu şirkətdə qarşılıqlı faydalı karyera qurmaqdır
          </p>
        </div>
        <div className={person.person_sun1_div}>
          <img src={sun1} />
        </div>
      </section>
    </>
  );
}

export default Person;
