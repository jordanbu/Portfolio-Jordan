import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork, MdSchool } from "react-icons/md";
import { data } from "./utils";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="resume_content-wrapper">
        <div className="resume_experience">
          <h3 className="resume_section-title">Experience</h3>
          <VerticalTimeline layout="1-column" lineColor="#f7c600">
            {data.experience.map((item, index) => (
              <Animate
                key={index}
                play
                duration={1}
                delay={0.3}
                start={{ opacity: 0, transform: "translateY(50px)" }}
                end={{ opacity: 1, transform: "translateY(0px)" }}
              >
                <VerticalTimelineElement
                  className="vertical-timeline-element--work resume_timeline-element"
                  icon={<MdWork />}
                >
                  <h4 className="resume_timeline-element-title">{item.title}</h4>
                  <h5 className="resume_timeline-element-subtitle">
                    {item.subtitle}
                  </h5>
                  <p className="resume_timeline-element-description">
                    {item.description}
                  </p>
                </VerticalTimelineElement>
              </Animate>
            ))}
          </VerticalTimeline>
        </div>

        <div className="resume_education">
          <h3 className="resume_section-title">Education</h3>
          <VerticalTimeline layout="1-column" lineColor="#f7c600">
            {data.education.map((item, index) => (
              <Animate
                key={index}
                play
                duration={1}
                delay={0.3}
                start={{ opacity: 0, transform: "translateY(50px)" }}
                end={{ opacity: 1, transform: "translateY(0px)" }}
              >
                <VerticalTimelineElement
                  className="vertical-timeline-element--education resume_timeline-element"
                  icon={<MdSchool />}
                >
                  <h4 className="resume_timeline-element-title">{item.title}</h4>
                  <h5 className="resume_timeline-element-subtitle">
                    {item.subtitle}
                  </h5>
                  <p className="resume_timeline-element-description">
                    {item.description}
                  </p>
                </VerticalTimelineElement>
              </Animate>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Resume;
