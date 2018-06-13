import React, { Component } from 'react';

class StyleIdeas extends Component {
  render() {
    return (
      <div>
      	<section>
          <div className="container styleIdeas">
            <div className="row">
              <div className="col-xs-12">
                <h1>
                  Style Ideas
                </h1>
              </div>
            </div>
          <div className="row">
            <div className="col-xs-12 col-md-4">
              <img src={require('assets/img/1SI.jpg')} alt="style_ideas_1"/>
            </div>
            <div className="col-xs-12 col-md-4">
              <img src={require('assets/img/2SI.jpg')} alt="style_ideas_2"/>
            </div>
            <div className="col-xs-12 col-md-4">
              <img src={require('assets/img/3SI.jpg')} alt="style_ideas_3"/>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-4">
              <img src={require('assets/img/4SI.jpg')} alt="style_ideas_4"/>
            </div>
            <div className="col-xs-12 col-md-4">
              <img src={require('assets/img/5SI.jpg')} alt="style_ideas_5"/>
            </div>
            <div className="col-xs-12 col-md-4">
              <img src={require('assets/img/6SI.jpg')} alt="style_ideas_6"/>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-4">
              <img src={require('assets/img/7SI.jpg')} alt="style_ideas_7"/>
            </div>
            <div className="col-xs-12 col-md-4">
              <img src={require('assets/img/8SI.jpg')} alt="style_ideas_8"/>
            </div>
            <div className="col-xs-12 col-md-4">
              <img src={require('assets/img/9SI.jpg')} alt="style_ideas_9"/>
            </div>
          </div>
         </div> 
        </section>
      </div>
    );
  }
}

export default StyleIdeas;
