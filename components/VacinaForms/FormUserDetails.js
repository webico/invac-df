import React, { Component } from 'react';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    // eslint-disable-next-line react/prop-types
    const { values, handleChange } = this.props;

    return (
      <div>
        <>
          <div
          // open
          // fullWidth
          // maxWidth='sm'
          >
            {/* <AppBar title="Enter User Details" /> */}
            {/* <TextField
              placeholder="Enter Your First Name"
              label="First Name"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              margin="normal"
              fullWidth
            /> */}

            <input type="text"
              placeholder="Enter Your First Name"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
            />
            <br />
            {/* <TextField
              placeholder="Enter Your Last Name"
              label="Last Name"
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
              margin="normal"
              fullWidth
            /> */}

            <input type="text"
              placeholder="Enter Your Last Name"
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
            />
            <br />
            {/* <TextField
              placeholder="Enter Your Email"
              label="Email"
              onChange={handleChange('email')}
              defaultValue={values.email}
              margin="normal"
              fullWidth
            /> */}

            <input type="email"
              placeholder="Enter Your Your Email"
              onChange={handleChange('email')}
              defaultValue={values.email}
            />
            <br />
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

export default FormUserDetails;
