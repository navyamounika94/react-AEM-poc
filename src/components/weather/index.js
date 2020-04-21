/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2018 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import React, { Component } from "react";
import { MapTo } from "@adobe/cq-react-editable-components";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
//import { Link } from "react-router-dom";
import { AzureAD, LoginType, AuthenticationState } from 'react-aad-msal';
import { authProvider } from '../../authProvider';
import { basicReduxStore } from '../../reduxStore';
require("./weather.css");

const weatherEditConfig = {
  emptyLabel: "weather",

  isEmpty: function(props) {
    return true;
  }
};

class weather extends Component {
  constructor(props) {
    super(props);

    // Change the login type to execute in a Popup
    const options = authProvider.getProviderOptions();
    options.loginType = LoginType.Popup;
    authProvider.setProviderOptions(options);
  }
  render() {
    return (
      <div className="w-100">
        <div className="row dispMsgWrapper join-family-card">
          <div className="col">
            <Card>
              <CardBody>
                <CardTitle className="join-family-title">
                  {this.props.title} hi navya mounika
                </CardTitle>
                <CardSubtitle className="join-family-subtitle">
                  {this.props.subtitle}
                </CardSubtitle>
                <CardText className="join-family-text">
                  {this.props.textarea}
                </CardText>
                <AzureAD provider={authProvider} reduxStore={basicReduxStore}>
                    {({ login, logout, authenticationState }) => {
                    const isInProgress = authenticationState === AuthenticationState.InProgress;
                    const isAuthenticated = authenticationState === AuthenticationState.Authenticated;
                    const isUnauthenticated = authenticationState === AuthenticationState.Unauthenticated;

                              if (isAuthenticated) {
                                return (
                                  <React.Fragment>
                                    <p>You're logged in!</p>
                                    <a
                                          className="btn btn-white join-family-button"
                                          id="join-family-register"
                                          onClick={logout}
                                        >
                                          {this.props.label1}
                                    </a>
                                  </React.Fragment>
                                );
                              } else if (isUnauthenticated || isInProgress) {
                                return (
                                  <a
                                      className="btn btn-black join-family-button"
                                      id="join-family-sign-in"
                                      onClick={login}
                                      disabled={isInProgress}
                                      //to={this.props.linkTo}
                                    >
                                      {this.props.label}
                                    </a>
                                );
                              }
                            }}
                          </AzureAD>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

MapTo("TMNA/components/weather")(weather, weatherEditConfig);
