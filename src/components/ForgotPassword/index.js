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
 npm i react-form-with-constraints-bootstrap4
 npm install react-form-with-constraints
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import React, { Component, ComponentState } from 'react';
import { Redirect } from 'react-router';
import { FormWithConstraints } from 'react-form-with-constraints-bootstrap4';
import { MapTo } from '@adobe/cq-react-editable-components';
//import { ReactMetricsHandler } from '../../at'
//import { MetricsElement } from 'react-metrics';
import SiteLoader from '../siteLoader';
//require('./forgotPassword.css');



const ForgotPasswordEditConfig = {

    emptyLabel: 'Forgot Password',
    isEmpty: function (props) {
        return true
    }
};


class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.textRef = React.createRef();
        this.state = {
            errorDtl: '',
            formErrMsg: '',
            userEmail: '',
            isValidEmail: false,
            isLoading: false,
        }
    }


    handleChange = async (e) => {
        const target = e.target;

        target.setCustomValidity('');
        this.ValidateEmailData(e.target.value);

    }
    ValidateEmailData(val) {
        const isValid = this.validateEmail(val);
        let msg = '';
        if (!isValid) {
            msg = "Please enter valid email address";
        }
        this.setState({
            userEmail: val,
            isValidEmail: isValid,
            formErrMsg: msg
        });
    }
    // targetView = (viewName, pageName) => {
    //     pageName = 'Forgot Password'
    //     if (typeof window.adobe != 'undefined'
    //         && window.adobe.target
    //         && typeof window.adobe.target.triggerView === 'function') {
    //         window.adobe.target.triggerView(viewName, pageName);
    //     }
    // }
    // track = (eventName, newParams) => {

    //     return new Promise((resolve, reject) => {
    //         console.log('________________________');
    //         console.error(newParams);
    //         console.log('________________________');
    //         fireTag(eventName, newParams);
    //     }).catch((error) => {
    //         console.log('Analytic error ', + error);
    //     });
    // }

    validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(email)
    }

    handleSubmit = async (e) => {


        e.preventDefault();
        //this.track('buttonClick', 'Track');
        //  this.targetView('forgotPassword', 'testing')
        await this.form.validateForm();
        this.ValidateEmailData(this.state.userEmail);
        let _isValidEmail = this.validateEmail(this.state.userEmail);
        if (this.form.isValid() && _isValidEmail) {
            document.body.classList.add('loading-overlay-transparent')
            this.setState({
                isLoading: true

            })
            setTimeout(() => {
                this.setState({
                    isLoading: false
                })
                document.body.classList.remove('loading-overlay-transparent')

            }, 100000000000);


            var myHeaders = new Headers();
            myHeaders.append("Access-Control-Request-Method", "POST");
            myHeaders.append("x-api-key", "aaVxrGqaEJmJg8LHoo5Adf66TtGK6pgsffiA6zAw");
            myHeaders.append("X-BRAND", "L");
            myHeaders.append("x-client", "LDNG");
            myHeaders.append("x-version", "1.0");
            fetch("https://api.siint.deops.toyota.com/admin/customer/password/" + this.state.userEmail, {
                method: 'POST', headers: myHeaders
            }).then(function (response) {
                return response.json();
            }).then(function (json) {
                console.log(json);
            });

        }
    }
    // tryTags = () => {
    //     try {

    //         fireTag("89.4", {
    //             "<subsection>": "Videos",
    //             "<module>": "View",
    //             "<action>": "Play",
    //             "<resource_type>": "Tried from script",
    //             "<resource_category>": "Button Click",
    //             "<resource_title>": "data-tag to check",
    //             "<resource_media>": "Video",
    //             "<events>": "",
    //             "<safety_connect_subscription_status>": "",
    //             "<service_connect_subscription_status>": "",
    //             "<enform_remote_subscription_status>": "",
    //             "<destinations_subscription_status>": "",
    //             "<zip_code>": "",
    //             "<content_model>": "",
    //             "<owner_model_name>": "",
    //             "<owner_model_year>": "",
    //             "<model_name>": "",
    //             "<model_year>": "",
    //             "<registration_type>": "",
    //             "<break_point>": "",
    //             "<orientation>": "",
    //             "<app>": "",
    //             "<items_saved>": "",
    //             "<role>": "",
    //             "<tag_id>": "89.4",
    //             "<login_status>": "",
    //             "<list_rank>": "1"
    //         });
    //     } catch (err) {
    //         console.log('Error' + err)
    //     }
    // }

    render() {
        const {
            description = "To reset your password, please enter the email associated with your account to receive a password reset link.", //Richtext
            emailField = "EMAIL", //text
            emailRequiredMessage = '', //JSSText
            id = '',
            name = '',
            needMoreHelp = "Need more help?", // JSSRichText
            sendEmailLabel = "Send Email", //JSSText
            successPage = '',//JSSLink;
            title = "Forgot password?", //Text
            //emailValidations= FormValidationRule[];
        } = this.props

        return (
            <>

                <div className="container-fluid navya acc-bg" id="forgot-password">
                    <div className="row justify-content-center " id="titlePanel">
                        <div className="col-12 col-md-11">
                            <h1>{title}</h1>
                            <div className="subtitle">
                                <div className="m-auto">{description}</div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center" id="content-panel">
                        <div className="col-12 align-self-center">
                            <div className="row justify-content-center" id="formPanel">
                                <div className="regisForm">
                                    <div className="col-12 col-md-11">
                                        <div className="text-center custom-errmsg">{this.state.errorDtl}</div>
                                    </div>
                                    <div className="form-group">
                                        <FormWithConstraints
                                            autoComplete="off"
                                            ref={(formWithConstraints) => {
                                                if (formWithConstraints) {
                                                    this.form = formWithConstraints;
                                                }
                                            }}
                                            onSubmit={this.handleSubmit}
                                            noValidate={true}
                                            name="accIndvidualname"
                                            className="accForm forgot-password-form"
                                        >

                                            <input
                                                id="userEmail"
                                                name="userEmail"
                                                value={this.state.userEmail}
                                                placeholder={emailField}// aem
                                                onChange={this.handleChange}
                                                ref={this.textRef}
                                                className={`form-control icase-field ${this.state.isValidEmail ? 'is-valid' : 'is-invalid'}`
                                                }

                                            />
                                            <div className="text-center invalid-feedback">{this.state.formErrMsg}</div>
                                            <div className="text-center">
                                                <button
                                                    type="submit"
                                                    className="btn btn-black forgot-password-button"
                                                    data-firetag="80.2"
                                                    data-firetag-param='{"<subsection>": "Profile","<page>": "Manage Your Profile", "<module>": "Profile Info Module","<action>": "Cancel"}'

                                                >
                                                    {sendEmailLabel}
                                                </button>
                                                <a data-firetag="72.3"
                                                    data-model='footer-section'
                                                    data-category='test-footer'
                                                    data-firetag-param='{ "<container>": "Global Footer","<nav_category>":"About Lexus","<nav_subcategory>":"legal" }'
                                                    href='#' target="_self">About</a>
                                            </div>
                                        </FormWithConstraints>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center " id="captionPanel">
                                <div className="col-12 col-md-3 need-help-div">
                                    <span>
                                        <h3 className="caption-link"> {needMoreHelp} <a className="rich-text-anchor" href="">Contact Us</a></h3>
                                    </span>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </>

        );
    }
}


export default MapTo('TMNA/components/text')(ForgotPassword, ForgotPasswordEditConfig);