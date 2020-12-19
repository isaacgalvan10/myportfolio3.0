import './reset.css';
import './app.css';

function App() {
  return (
    <div className="container">
      <div className="titles">
        <h1>Isaac Galvan</h1>
        <h1 className="accentColor">Frontend Developer</h1>
      </div>
      <div className="about">
        <h2>About Me</h2>
        <p>From the ﬁrst "Hello World" I coded, I knew I was hooked into the amazing world of programming. Software development is more than a job to me, it has offered me a great way to continually learn and improve my skills. What started with a simple "Hello World" has become a full-ﬂedged passion that only gets more exciting as time goes by.  </p>
        <button className="resume-btn">View Resume</button>
      </div>
    </div>
  );
}

export default App;
