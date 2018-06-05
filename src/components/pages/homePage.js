import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
      <div>
        <section className="container-fluid titleBlock">
          <div className="overlay">
            <div className="container">
              <div className="row justify-content-center align-self-center">
                <div className="col-xs-12">
                  <h1>
                    Find your personal style
                  </h1>
                </div>
              </div>
            </div>
          </div>      
        </section>
        <section className="container describeYour">
          <div className="row">
            <div className="col-xs-12 titleSmall">
              <h2>Describe your lifestyle</h2>
            </div>
            <div className="col-md-8 offset-md-2">
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
              <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
              <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>
            </div>
          </div>
        </section>
        <section className="styleQuiz">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 titleSmall">
                <h3>Style Personality Quiz</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <h5>Casual, Comfortable, Simple, Approachable, Easy</h5>
                <p>I like to be casual and down to earth, I love comfort and easy to care for clothes.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <img src="/src/assets/img/1AC.png" alt="Casual, Comfortable, Simple, Approachable, Easy Casual Look"/>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HomePage;
