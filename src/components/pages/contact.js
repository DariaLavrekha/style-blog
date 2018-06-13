import React, { Component } from 'react';

import SimpleMap from '../../components/pagesComponents/mapGoogle';

class Contact extends Component {
  render() {
    return (
      <div>
        <section>
          <div className="container contactPage">
            <div className="row">
              <div className="col-xs-12">
                <h1>
                  Contact
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-md-8">
                <SimpleMap/>
              </div>
              <div className="col-xs-12 col-md-4">
                <p>E-mail: daria.velem@gmail.com</p>
                <p>Berlin, Germany</p>
              </div>
            </div>
          </div>
        </section>

				
      </div>
    );
  }
}

export default Contact;
