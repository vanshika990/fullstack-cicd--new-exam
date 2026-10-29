import { useEffect, useState } from "react";

function App() {
const [message, setMessage] = useState("Connecting to backend...");
const [status, setStatus] = useState("Loading");

useEffect(() => {
fetch("/api/message")
.then((response) => {
if (!response.ok) {
throw new Error("Backend request failed");
}
return response.json();
})
.then((data) => {
setMessage(data.message || "Backend connected successfully!");
setStatus("Connected");
})
.catch(() => {
setMessage("Backend is not available yet. Please try again shortly.");
setStatus("Waiting for backend");
});
}, []);

return ( <div className="page"> <header className="hero"> <p className="tag">MSc IT • Cloud & Application Development</p> <h1>Vanshika Jain</h1> <h2>Cloud & DevOps Portfolio</h2> <p>
Welcome to my full-stack application deployed using Docker,
GitHub Actions, AWS EC2, and MongoDB. </p> </header>


  <main className="card">
    <h2>About Me</h2>
    <p>
      I am pursuing MSc IT in Cloud and Application Development
      at Gujarat University.
    </p>

    <h2>Technologies</h2>
    <div className="skills">
      <span>React</span>
      <span>Node.js</span>
      <span>MongoDB</span>
      <span>Docker</span>
      <span>AWS EC2</span>
      <span>GitHub Actions</span>
      <span>CI/CD</span>
    </div>

    <h2>Backend Status</h2>
    <p className="status">{status}</p>
    <p>{message}</p>
  </main>

  <footer>
    <p>Vanshika Jain | Full Stack CI/CD Practical</p>
  </footer>
</div>


);
}

export default App;
