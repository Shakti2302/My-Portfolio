import React, { useState } from "react";
import "./education.css";

const Education = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section" id="education">
      <h2 className="section__title">Education</h2>
      <span className="section__subtitle">My Education</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
        

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Graduation
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualifiation__title">
                  Full-Stack Web Development
                </h3>
                <span className="qualification_subtitle">
                  Besant Technologies
                </span>
                <div className="qualification__calender">
                  <i class="uil uil-calendar-alt"></i>
                  2023- Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div
              className={
                toggleState === 2
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualifiation__title">
                    Master of Science in Computer Science
                  </h3>
                  <span className="qualification_subtitle">
                    Udaynath College of Science and Technology
                  </span>
                  <div className="qualification__calender">
                    <i class="uil uil-calendar-alt"></i>
                    2020-2022
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualifiation__title">
                    Bachelor of Computer Applications
                  </h3>
                  <span className="qualification_subtitle">
                    Utkal University
                  </span>
                  <div className="qualification__calender">
                    <i class="uil uil-calendar-alt"></i>
                    2016-2019
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
