import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <h2>
        This app is the list of movies with the highest ranking from the
        YTS/YIFY Movies website.
      </h2>
      <h3>
        The api that I used is here below. <br />
      </h3>

      <span>"https://yts-proxy.now.sh/list_movies.json?sort_by=rating"</span>
      <p>(The yts proxy list was updated in 2019.)</p>
    </div>
  );
}

export default About;
