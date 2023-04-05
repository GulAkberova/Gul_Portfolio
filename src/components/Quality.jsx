import React from "react";
import qua from "../style/quality.module.css";
import Gul from "../assets/Gul.jpg";
import sun4 from "../assets/image/sun4.png";
import sun3 from "../assets/image/sun3.png";
import sun2 from "../assets/image/sun2.png";

function Quality() {
  const Pdf_File_Url =
    "http://127.0.0.1:5173/Gülxanım Əkbərova  FrontEnd Developer.pdf";
  const downloadFileAtURL = (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobUrl = window.URL.createObjectURL(new Blob([blob]));

        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blobUrl;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };
  return (
    <>
      <section className={qua.quality_div}>
        {/* <h1>Haqqımda</h1> */}
        <div className={qua.quality_mini_div}>
          <img src={Gul} />
          <div className={qua.quality_mini_div_text}>
            <img src={sun3} className={qua.quality_mini_div_text_sun} />
            <h2>Gülxanım Əkbərova</h2>
            <p>
              Daim inkişaf etmeyi ve daim yeni bir şeylər öyrənməyi <br />{" "}
              sevirəm. Çünki yeni olan hər şey məni həyəcanlandırır. <br />
              Və bu sahəni buna gore sevirəm:)
            </p>

            <ul>
              <li>
                <a>
                  {" "}
                  <b>Doğum tarixi:</b>02.06.1999
                </a>
              </li>
              <li>
                <a>
                  {" "}
                  <b>Yaşayış Ünvanı:</b>Bakı ş. Yasamal ray. 1ci Alatava
                </a>
              </li>
              <li>
                <a>
                  {" "}
                  <b>Əlaqə nömrəsi:</b>050-342-15-58
                </a>
              </li>
              <li>
                <a>
                  {" "}
                  <b>Email:</b>kbrovagul0@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/g%C3%BClxan%C4%B1mekberova/"
                  target="_blank"
                >
                  {" "}
                  <b>Linkedin:</b>Gülxanım Əkbərova
                </a>
              </li>
              <li>
                <a href="https://github.com/GulAkberova" target="_blank">
                  {" "}
                  <b>GitHub:</b>GulAkberova
                </a>
              </li>
            </ul>
            <button
              onClick={() => {
                downloadFileAtURL(Pdf_File_Url);
              }}
            >
              CV yüklə
            </button>
            <img src={sun2} className={qua.quality_mini_div_sun2} />
          </div>
        </div>
        <div className={qua.quality_mini_div_sun}>
          <img src={sun4} />
        </div>
      </section>
    </>
  );
}

export default Quality;
