import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';

const onSuccess = (res) => {
    console.log('success:', res);
};
const onFailure = (err) => {
    console.log('failed:', err);
};

class GoogleLoginb extends Component {
    constructor() {
      super();
    }
  render() {
  return (
    <div>
      <GoogleLogin
        clientId="1006458559620-clc8rs6nvjnfknm7s7t9h91bnavlbm9j.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
  </div>
  );
  }
}
export default GoogleLoginb;