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
 import { FormValidationRule} from '../../types';
 import { Redirect } from 'react-router';
 import { FormWithConstraints } from 'react-form-with-constraints-bootstrap4';
 import { MapTo } from '@adobe/cq-react-editable-components';
 import SiteLoader from '../siteLoader';
 //require('./forgotPassword.css');
 
 const ForgotPasswordEditConfig = {
 
     emptyLabel: 'Forgot Password',
     isEmpty: function () {
         return true;
     }
 };
 
     interface DefaultProps{
     description: String;
     emailField: string; //text
     emailRequiredMessage:String; //JSSText
     id: String;
     name: String;
     needMoreHelp:String; // JSSRichText
     sendEmailLabel: String; //JSSText
     successPage: String//JSSLink;
     title: String; //Text
    // emailValidations: FormValidationRule[];
  }
 
 type Props = DefaultProps;
 
 interface State extends ComponentState {
     errorDtl: string;  //AEM
     formErrMsg: string;
     userEmail: string;
     isValidEmail: boolean;
     isLoading:boolean;
 }
 class ForgotPassword extends Component<Props, State> {
    textRef: React.RefObject<HTMLInputElement>;
     constructor(props:Props){
         super(props);
         this.textRef = React.createRef();
         this.state ={
         errorDtl: '',
         formErrMsg: '',
         userEmail: '',
         isValidEmail: false,
         isLoading:false,
         }
     }
     public static defaultProps:Props={
         
             description: "To reset your password, please enter the email associated with your account to receive a password reset link.", //Richtext
             emailField: "EMAIL", //text
             emailRequiredMessage:'', //JSSText
             id: '',
             name: '',
             needMoreHelp:"Need more help?", // JSSRichText
             sendEmailLabel: "Send Email", //JSSText
             successPage: '',//JSSLink;
             title: "Forgot password?" //Text
         
     }
     public form!: FormWithConstraints;
 
       public handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
         const target = e.target as HTMLInputElement;
 
         target.setCustomValidity('');
         this.ValidateEmailData(e.target.value);
        
     }
     public ValidateEmailData(val:any)
     {
        const isValid=this.validateEmail(val);
        let msg='';
        if(!isValid)
        {
            msg="Please enter valid email address";
        }
        this.setState({
            userEmail: val,
            isValidEmail: isValid,
            formErrMsg:msg
        });
     }
    public validateEmail (email) {
         const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
         return re.test(email)
       }
     public handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
         e.preventDefault();
        
         await this.form.validateForm();
         this.ValidateEmailData(this.state.userEmail);
         let _isValidEmail= this.validateEmail(this.state.userEmail);
         if (this.form.isValid() && _isValidEmail) {
             document.body.classList.add('loading-overlay-transparent')
             this.setState({
                 isLoading:true
                 
             })
             setTimeout(() => {
                 this.setState({
                     isLoading: false
               })
               document.body.classList.remove('loading-overlay-transparent')
         
             }, 5000);
             
             //var myHeaders = new Headers();
             // myHeaders.append("Access-Control-Request-Method", "POST");
             // myHeaders.append("x-api-key","aaVxrGqaEJmJg8LHoo5Adf66TtGK6pgsffiA6zAw");
             // myHeaders.append("X-BRAND","L");
             // myHeaders.append("x-client","LDNG");
             // myHeaders.append("x-version","1.0");
             //fetch("https://api.siint.deops.toyota.com/admin/customer/password/{email}",
            const rsp= await fetch("https://api.trumail.io/v2/lookups/JSON?email="+ this.state.userEmail , {
               method: 'POST'
             }).then(function (response) 
             {
                 return response.json();
         }).then(function (json) {
             console.log(json);
         });
         
         }
     }
  
     
      public render(){ 
       
         return(
             <>
 
                 <div className="container-fluid navya acc-bg" id="forgot-password">
                 
 
                 <div className="row justify-content-center " id="titlePanel">
                     <div className="col-12 col-md-11">
                         <h1>{this.props.title}</h1>
                         <div className="subtitle">
                             <div className="m-auto">{this.props.description}</div>
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
                                 placeholder={this.props.emailField}// aem
                                 onChange={this.handleChange}
                                 ref={this.textRef}
                                 className={`form-control icase-field ${this.state.isValidEmail ? 'is-valid' : 'is-invalid'}`
                             }
                             
                             />
                             <div className="text-center invalid-feedback">{this.state.formErrMsg}</div>
                                 <div className="text-center">
                                     <button
                                         
                                         type="submit"
                                         className="btn btn-black "
                                     >
                                         {this.props.sendEmailLabel}
                                     </button>
 
                                 </div>
                         </FormWithConstraints>
                     </div>
                     </div>
                 </div>
                 <div className="row justify-content-center " id="captionPanel">
                     <div className="col-12 col-md-3 need-help-div">
                     <span>
                        <h3 className="caption-link"> {this.props.needMoreHelp} <a className="rich-text-anchor" href="">Contact Us</a></h3>
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