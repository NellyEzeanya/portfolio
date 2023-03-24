import { FaRegFolder } from "react-icons/fa";
import { MdOutlineOpenInNew } from "react-icons/md";
import { Link } from "react-router-dom";
import "./projects.scss";

interface RepoProps {
  name: string;
  summary: string;
  stack: Array<string>;
  link?: string;
}

const Repo = (props: RepoProps) => {
  return (
    <a className="repo card" href={props.link} target="_blank">
      <div className="repo">
        <div className="top">
          <FaRegFolder className="folder" />
          {props.link ? (
            <div>
              <a href={props.link}>
                <MdOutlineOpenInNew />
              </a>
            </div>
          ) : null}
        </div>
        <div>
          <h3 className="project-name">{props.name}</h3>
        </div>
        <p className="summary">{props.summary}</p>
        <p className="tech">{props.stack.join(" ")}</p>
      </div>
    </a>
  );
};

const Project = () => {
  return (
    <main className="projects">
      <h3 className="title">Things I've done</h3>
      <div className="repos">
        <Repo
          link="https://mind-mate-nine.vercel.app/"
          name="Mind-mate Chat Bot"
          summary="An ai bot to help with mental health care"
          stack={["Javascript", "React"]}
        />
        <Repo
          name="Neliano-portfolio"
          summary="A simple portfolio I built to showcase my react skills"
          stack={["Javascript", "React.js", "Nodejs"]}
        />
        <Repo
          name="Slick HTML Form using HTML & CSS"
          summary="A clone of a beautiful form page, to test my frontend skills"
          stack={["HTML", "CSS"]}
        />
      </div>
    </main>
  );
};

export default Project;
