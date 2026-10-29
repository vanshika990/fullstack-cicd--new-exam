import { useEffect, useState } from "react";

export default function App() {
const [backendMessage, setBackendMessage] = useState("Connecting to backend...");
const [backendStatus, setBackendStatus] = useState("Checking");

useEffect(() => {
fetch("/api/message")
.then((response) => {
if (!response.ok) {
throw new Error("Backend request failed");
}
return response.json();
})
.then((data) => {
setBackendMessage(data.message);
setBackendStatus("Connected");
})
.catch(() => {
setBackendMessage("Backend connection is not available yet.");
setBackendStatus("Unavailable");
});
}, []);

return ( <main className="container"> <section className="card"> <div className="badge">MSc IT Portfolio</div>

```
    <h1>Hi, I'm Vanshika Jain! 👋</h1>

    <h2>Cloud & DevOps Enthusiast</h2>

    <p>
      MSc IT — Cloud and Application Development
      <br />
      Gujarat University
    </p>

    <div className="skills">
      <span>AWS</span>
      <span>Docker</span>
      <span>Linux</span>
      <span>Jenkins</span>
      <span>CI/CD</span>
    </div>

    <div className="backend">
      <h3>Backend Integration</h3>
      <p>{backendMessage}</p>
      <p>
        Status: <strong>{backendStatus}</strong>
      </p>
    </div>

    <footer>
      React + Node.js + MongoDB + Docker + GitHub Actions + AWS EC2
    </footer>
  </section>
</main>
```

);
}
