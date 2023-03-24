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
          Techster{" "}
          <a
            target="_blank"
            href="https://www.womentechsters.org"
            className="institution"
          >
            @Women Techsters Fellowship
          </a>
        </p>
        <ul className="duration">
          <li>Sep 2022</li>
        </ul>
        <div className="tasks">
          <p>Obtained a BSc in computer science</p>
        </div>
      </div>
    </main>
  );
};

export default Experience;
