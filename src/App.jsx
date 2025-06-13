import "./App.css";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <>
      <div className="App">
        <ProfileCard
          name="Wonsurum Davison"
          image="https://via.placeholder.com/300"
          bio="“I’m a front-end web developer who transforms ideas into user-friendly, responsive web experiences. I have a strong foundation in HTML and CSS, along with extensive experience working with modern JavaScript frameworks like React, Vue, and Node.js.”"
        />
      </div>
    </>
  );
}

export default App;
