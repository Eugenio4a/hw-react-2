import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import poster from "../src/images.jpg";
import myPhoto from "../src/photo_me.jpg";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

function AboutFilm(info) {
  return (
    <>
      <div className={info.className}>
        <div>
          <h1>Film name: {info.filmName}</h1>
          <p>Film author: {info.nameAuthor}</p>
          <p>Year: {info.year}</p>
          <p>Stuio: {info.studio}</p>
        </div>
        <img src={poster} className="App-logo" alt="logo" width="350" />
      </div>
    </>
  );
}
function AboutMe({
  fio,
  phone,
  email,
  town,
  workexp,
  classNameText,
  classNameBlock,
}) {
  return (
    <>
      <div className={classNameBlock}>
        <div>
          <div>
            <span className={classNameText}>My name:</span> {fio}
          </div>
          <div>
            <span className={classNameText}>Phone №:</span> {phone}
          </div>
          <div>
            <span className={classNameText}>E-mail:</span> {email}
          </div>
          <div>
            <span className={classNameText}>Town:</span> {town}
          </div>
          <div>
            <span className={classNameText}>Experience:</span> {workexp}
          </div>
        </div>
        <img src={myPhoto} className="App-logo" alt="logo" width="350" />
      </div>
    </>
  );
}
function Film() {
  return (
    <>
      <AboutFilm
        filmName="This film awsome"
        nameAuthor="unknown author"
        year="1999"
        studio="universal"
        className="container"
      />
    </>
  );
}
function Me() {
  return (
    <>
      <AboutMe
        fio="Yamnenko Yevhenii"
        phone="80808080808"
        email="aaa@aaa.com"
        town="Kiev"
        workexp="1000 years"
        classNameText="bold_text"
        classNameBlock="myBlock"
      />
    </>
  );
}

function Time() {
  const [state, setState] = React.useState(new Date());
  console.log(state);
  setInterval(() => setState(new Date()), 1000);
  return (
    <>
      <div className="time">{state.toLocaleTimeString()}</div>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Film />
    <Me />
    <Time />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
