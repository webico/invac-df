import React, { Component } from 'react';
// import Dialog from '@material-ui/core/Dialog';
// import AppBar from '@material-ui/core/AppBar';
// import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';

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
          // open
          // fullWidth
          // maxWidth='sm'
          >
            {/* <AppBar title="Enter Personal Details" /> */}
            {/* <TextField
              placeholder="Enter Your Occupation"
              label="Occupation"
              onChange={handleChange('occupation')}
              defaultValue={values.occupation}
              margin="normal"
              fullWidth
            /> */}

            <input type="text"
              placeholder="Enter Your Occupation"
              onChange={handleChange('occupation')}
              defaultValue={values.occupation}
            />
            <br />
            {/* <TextField
              placeholder="Enter Your City"
              label="City"
              onChange={handleChange('city')}
              defaultValue={values.city}
              margin="normal"
              fullWidth
            /> */}

            <input type="text"
              placeholder="Enter Your City"
              onChange={handleChange('city')}
              defaultValue={values.city}
            />
            <br />
            {/* <TextField
              placeholder="Enter Your Bio"
              label="Bio"
              onChange={handleChange('bio')}
              defaultValue={values.bio}
              margin="normal"
              fullWidth
            /> */}

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
