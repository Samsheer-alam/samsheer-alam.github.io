import React from "react";
import { CodeBracketIcon } from "@heroicons/react/20/solid";
import { useDarkMode } from "../../utils/DarkModeContext";
import "./About.css"; // Import your custom CSS file

interface AboutProps {
  // Define your prop types here if needed
}

function About(props: AboutProps) {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`about-container`}
      style={{
        backgroundColor: isDarkMode ? "#474b5b" : "#e2e7f0",
      }}
    >
      <h2 className="about-title">About Me</h2>
      <div className="about-content">
        <p>
          I am a full stack web developer with over{" "}
          {new Date().getFullYear() - 2019} years of experience. My primary
          expertise lies in JavaScript, which serves as the foundation for
          creating dynamic and engaging web applications.
        </p>
        <p className="about-paragraph">
          In addition to my strong background in JavaScript, I have a deep
          understanding of Node.js, which has empowered me to develop efficient
          server-side solutions. This combination of skills allows me to deliver
          well-rounded web applications that offer a seamless and responsive
          user experience.
        </p>
      </div>

      <div className="about-skills">
        {/* Frontend Skills */}
        <div className="about-skill-section">
          <div className="skill-heading">
            <CodeBracketIcon className="skill-icon" />
            <h2 className="skill-title">Frontend</h2>
          </div>
          <div className="skill-description">
            <p className="skill-list">
              <li>
                Developed projects involving pure <b>HTML, CSS,</b> and{" "}
                <b>JavaScript</b> to create static and dynamic web content
              </li>
              <li>
                Designed interactive front-end user interfaces by implementing
                reusable components with <b>React</b> and used <b>Redux</b> for
                data flow
              </li>
              <li>
                Proficiently styled user interfaces by applying diverse CSS
                frameworks, including <b>Tailwind CSS</b> and <b>Bootstrap,</b>{" "}
                to ensure aesthetically pleasing and responsive designs
              </li>
              <li>
                Engineered <b>full-stack</b> applications utilizing{" "}
                <b>Laravel (PHP)</b> to deliver robust and feature-rich web
                solutions.
              </li>
            </p>
          </div>
          <div className="skill-icons">
            <div className="tool-icons">
              <img
                alt="HTML5 Logo"
                src="https://img.shields.io/badge/HTML5%20-%23E34F26.svg?style=flat&logo=html5&logoColor=white"
              />
              <img
                alt="CSS3 Logo"
                src="https://img.shields.io/badge/CSS-239120?&style=flat&logo=css3&logoColor=white"
              />
              <img
                alt="JavaScript Logo"
                src="https://img.shields.io/badge/JavaScript%20-%23F7DF1E.svg?style=flat&logo=javascript&logoColor=black"
              />
              <img
                alt="React Logo"
                src="https://img.shields.io/badge/-React-05122A?style=flat&logo=react"
              />
              <img
                alt="Next.js Logo"
                src="https://img.shields.io/badge/-Next%20Js-23E34F26?style=flat"
              />
              <img
                alt="Tailwind CSS Logo"
                src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white"
              />
              <img
                alt="Bootstrap Logo"
                src="https://img.shields.io/badge/Bootstrap-563D7C?style=flat&logo=bootstrap&logoColor=white"
              />
              <img
                alt="jQuery Logo"
                src="https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white"
              />
            </div>
          </div>
        </div>

        {/* Backend Skills */}
        <div className="about-skill-section">
          <div className="skill-heading">
            <CodeBracketIcon className="skill-icon" />
            <h2 className="skill-title">Backend</h2>
          </div>
          <div className="skill-description">
            <p className="skill-list">
              <li>
                Implemented <b>RESTful APIs</b> using <b>Node.js</b> and{" "}
                <b>Laravel</b> to facilitate seamless data interaction and
                transfer
              </li>
              <li>
                Engineered <b>GraphQL APIs</b> with the <b>NestJS</b> framework
                in <b>Node.js</b>, enabling efficient and flexible data queries.
              </li>
              <li>
                Proficiently employed both <b>SQL</b> and <b>NoSQL</b> databases
                to store and manage data, ensuring optimal data handling and
                scalability
              </li>
              <li>
                Leveraged various advanced tools and technologies such as{" "}
                <b>RabbitMQ, Amazon SQS, Amazon S3, Kafka,</b> and{" "}
                <b>Grafana</b> to optimize system architecture and data
                workflows
              </li>
            </p>
          </div>
          <div className="skill-icons">
            <div className="tool-icons">
              <img
                alt="Node.js Logo"
                src="https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white"
              />
              <img
                alt="Express.js Logo"
                src="https://img.shields.io/badge/Express.js-404D59?style=flat"
              />
              <img
                alt="Nest.js Logo"
                src="https://img.shields.io/badge/Nest.js-05122A?style=flat"
              />
              <img
                alt="PHP Logo"
                src="https://img.shields.io/badge/PHP-777BB4?style=flat&logo=php&logoColor=white"
              />
              <img
                alt="Laravel Logo"
                src="https://img.shields.io/badge/Laravel-FF2D20?style=flat&logo=laravel&logoColor=white"
              />

              <img
                alt="MongoDB Logo"
                src="https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white"
              />
              <img
                alt="MySQL Logo"
                src="https://img.shields.io/badge/MySQL-005C84?style=flat&logo=mysql&logoColor=white"
              />
              <img
                alt="MsSQL Logo"
                src="https://img.shields.io/badge/MsSQL-003545?style=flat&logo=mariadb&logoColor=white"
              />
              <img
                alt="PostgreSQL Logo"
                src="https://img.shields.io/badge/PostgreSQL-316192?style=flat=postgresql&logoColor=white"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <div className="about-tools">
        <div className="tool-section">
          <h2 className="tool-title">Tools</h2>
          <div className="tool-icons">
            <img
              alt="GitHub Logo"
              src="https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white"
            />
            <img
              alt="GitLab Logo"
              src="https://img.shields.io/badge/GitLab-330F63?style=flat&logo=gitlab&logoColor=white"
            />
            <img
              alt="Amazon AWS Logo"
              src="https://img.shields.io/badge/Amazon_AWS-232F3E?style=flat&logo=amazon-aws&logoColor=white"
            />
            <img
              alt="Bitbucket Logo"
              src="https://img.shields.io/badge/Bitbucket-0747a6?style=flat&logo=bitbucket&logoColor=white"
            />
            <img
              alt="Docker Logo"
              src="https://img.shields.io/badge/Docker-05122A?style=flat"
            />
          </div>
        </div>

        <div className="tool-section">
          <h2 className="tool-title">Others</h2>
          <div className="tool-icons">
            <img
              alt="TypeScript Logo"
              src="https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white"
            />
            <img
              alt="Python Logo"
              src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white"
            />
            <img
              alt="Go Logo"
              src="https://img.shields.io/badge/Go-00ADD8?style=flat&logo=go&logoColor=white"
            />
            <img
              alt="C# Logo"
              src="https://img.shields.io/badge/C%23-239120?style=flat&logo=c-sharp&logoColor=white"
            />
            <img
              alt="Unity Logo"
              src="https://img.shields.io/badge/Unity-100000?style=flat&logo=unity&logoColor=white"
            />
            <img
              alt="Grafana Logo"
              src="https://img.shields.io/badge/Grafana-05122A?style=flat"
            />
            <img
              alt="Kafka Logo"
              src="https://img.shields.io/badge/Kafka-330F63?style=flat"
            />
            <img
              alt="RabbitMQ Logo"
              src="https://img.shields.io/badge/RabbitMQ-05122A?style=flat"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
