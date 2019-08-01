import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Imgfetch from "./components/Imgfetch";
import Header from "./components/Header";

function App() {
  const [apodPic, setApodPic] = useState({});
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=SayCMFjd1d7YxNoJC6C4SMUHCvbYlOpbkODS98nb")
      .then(response => {
        setApodPic(response.data);
      })
      .catch(error => {
        console.log("error", error);
      });
  }, []);

  return (
    <>
      <Header />
      <Imgfetch
        title={apodPic.title}
        date={apodPic.date}
        url={apodPic.url}
        explanation={apodPic.explanation}
        copyright={apodPic.copyright}
      />
    </>
  );
}

export default App;
