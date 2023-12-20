import React from "react";
import "./projects.css";
import { Data } from "./Data";
import { Swiper} from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Projects = () => {
  return (
    <section className="testimonial container section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My Projects</span>

      <Swiper
        className="testimonial__container"
        loop={true}
        grabCursor={true}
        autoHeight={true}
        spaceBetween={20}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
      >
        {Data.map(({ id, image, title, description, url }) => {
          return (
            <div className="testimonial__card" key={id}>
              <img
                src={image}
                alt="ProjectImage"
                className="testimonial__img"
              />
              <h3 className="testimonial__name">{title}</h3>
              <p className="testmonial__description">{description}</p>
              <h3>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="testimonial__name"
                >
                  Project Link
                </a>
              </h3>
            </div>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Projects;
