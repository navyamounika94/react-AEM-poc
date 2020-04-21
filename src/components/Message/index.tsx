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
 $ npm install --save react-router-dom
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import React, { Component } from 'react';
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
//import { Link } from "react-router-dom";
import { RouteComponentProps, withRouter } from 'react-router';
import { MapTo } from '@adobe/cq-react-editable-components';
require('./Message.css');

const displayMessageEditConfig = {

    emptyLabel: 'DisplayMessage',

    isEmpty: function (props: any) {
        console.log(props);
        return true;
    }
};

interface Props {
    fields: {
        description?: string;
        primaryButtonLink: string;
        primaryButtonText?: string;
        supportContent?: string
        title?: string;
        verticalCenterAlign?: boolean;
        name: string;
    };

}

class Message extends Component<Props, any> {

    constructor(props: Props) {
        super(props);
    }
    // props are only for display purpose. Actual values come from AEM component propeerties.
    public static defaultProps: Props = {
        fields: {
            description: "We sent password reset instructions to <strong>abc@gmail.com</strong>. If you didn't receive the email, please check your spam folder",//RichText
            primaryButtonLink: "/lexusdrivers/account/login",//link
            primaryButtonText: "OK",//textbox
            supportContent: "RESEND PASSWORD RESET EMAIL",//RichText
            title: "Success",//textbox
            verticalCenterAlign: true,//checkbox
            name: "DisplayMessage" //textbox
        }
    };

    render() {
        let boxClass = 'pg-box';
        if (this.props.fields.verticalCenterAlign === false) {
            boxClass = '';
        }
        return (
            <div className={`row dispMsgWrapper ${boxClass}`} >
                <div className="col">
                    <Card className="text-center">
                        <CardBody>
                            {this.props.fields.title && <CardTitle>
                                {this.props.fields.title}
                            </CardTitle>}
                            {this.props.fields.description && <CardText className="col-8 m-auto" tag="div">
                                {this.props.fields.description}
                            </CardText>}
                            {this.props.fields.primaryButtonLink && this.props.fields.primaryButtonText &&
                                <CardText tag="h5">
                                    <a href={this.props.fields.primaryButtonLink} className="btn-black  btn btn-secondary" target="">{this.props.fields.primaryButtonText}</a>
                                </CardText>
                            }
                            {this.props.fields.supportContent &&
                                <CardText tag="h5">
                                    <a className="rich-text-anchor active" aria-current="page" href="/lexusdrivers/account/forgot-password"> {this.props.fields.supportContent}</a>
                                </CardText>
                            }
                        </CardBody>
                    </Card>
                </div>
            </div>

        );

    }
}

export default MapTo('sample/components/Message')(Message, displayMessageEditConfig);
 // change to correct path of AEM component