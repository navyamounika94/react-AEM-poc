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
import React from 'react';
import { Page, withModel } from '@adobe/cq-react-editable-components';
import { Card, CardHeader,CardBody, CardSubtitle, CardTitle } from 'reactstrap';
import Message from '../Message';

import SiteLoader from '../siteLoader';
import GlobalNavigation from '../GlobalNavigation'
require('./App.css');

// This component is the application entry point
class App extends Page {
    render() {
        return (
            <div>
            <GlobalNavigation/>
            { this.childComponents }
            { this.childPages }
            <SiteLoader/>
            </div>

        )
    }
}

export default withModel(App);
