import "./experience.scss";

const Experience = () => {
  return (
    <main className="experience">
      <div className="exp">
        <p>
          Software Engineering{" "}
          <a
            target="_blank"
            href="https://www.niit.com/nigeria"
            className="institution"
          >
            @NIIT
          </a>
        </p>
        <ul className="duration">
          <li>Sep 2021</li>
        </ul>
        <div className="tasks">
          <p>Studied and learned software engineering and basic computing.</p>
        </div>
      </div>
      <br />
      <div className="exp">
        <p>
          @Women Techsters Fellowship{" "}
          <a
            target="_blank"
            href="https://www.womentechsters.org"
            className="institution"
           Ignatius Ajuru University of Education
            
          </a>
        </p>
        <ul className="duration">
          <li>Sep 2022</li>
        </ul>
        <div className="tasks">
          <p>Currenrtly holds a Masters degree in Human Resource Management</p>
        </div>
      </div>
    </main>
  );
};

export default Experience;
