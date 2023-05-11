/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <>
          <div
          >

            <input type="text"
              placeholder="Enter Your Occupation"
              onChange={handleChange('occupation')}
              defaultValue={values.occupation}
            />
            <br />

            <input type="text"
              placeholder="Enter Your City"
              onChange={handleChange('city')}
              defaultValue={values.city}
            />
            <br />


            <input type="text"
              placeholder="Enter Your Bio"
              onChange={handleChange('bio')}
              defaultValue={values.bio}
            />
            <br />

            <button
              // color="secondary"
              // variant="contained"
              onClick={this.back}
            >Back</button>

            <button
              // color="primary"
              // variant="contained"
              onClick={this.continue}
            >Continue</button>
          </div>
        </>
      </div>
    );
  }
}

export default FormPersonalDetails;
