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
 
 import React, {Component} from 'react';
 import {MapTo} from '@adobe/cq-react-editable-components';
 import { Card, CardHeader,CardBody, CardSubtitle, CardTitle } from 'reactstrap';

 require("./manual.css");
  
 
 const manualsEditConfig = {
 
     emptyLabel: 'Manuals',
 
     isEmpty: function(props) {
        //return true;
    }
 };
 
 export class manuals extends Component {
   
     render() {
                return (
                    <div className="row">
                    <div className="lgrid ld-6tile hi">
                        <div className="LdGrid_GridContainer__2bjrR">
                        <div className="LdGrid_row__yhiy1">
                        <div className="LdGrid_col_xs_12__8uqox LdGrid_col_sm_6__31ZI2 LdGrid_col_md_12__1kcTb grid-tile" >
                                        <div className="ld-panel-tile ld-tile-fh manuals-tile">
                                            <Card className="w-100 h-100 manual-warranty-card">
                                                <CardHeader className="title-inline manual-card-header">
                                                    <CardTitle tag="h6" className="manual-card-title" style={{fontSize:"16px"}}>
                                                         Manuals and Warranty
                                                            <a href={this.props.ViewAllLink} className="manual-card-link viewAllText">
                                                                 View all
                                                            </a>
                                                    </CardTitle>
                                                    {
                                                        <CardSubtitle className="manual-card-sub-title">{this.props.WarrantyMessage}</CardSubtitle>
                                                    }
                                                </CardHeader>
                                                <div>
                                                <CardBody className="manual-warranty-card-body">
                                                    <div className="manual-div">
                                                    <span>
                                                        <a href="https://staging.drivers.lexus.com/t3Portal/document/om-s/PMV0003U/xhtml/PMV0003U.html" >
                                                        <p className="pdf-icon" style={{fontWeight:700}}>PDF</p>
                                                        <div className="manual-title">
                                                            <p style={{fontSize:"13px",lineHeight:"21px",fontWeight:700}}>Lexus 2016 CT200H Owners Manual ...</p>
                                                            <p className="manual-link"style={{fontWeight:700,lineHeight:'21px'}}>
                                                                Read manual
                                                            </p>
                                                        </div>
                                                        </a>
                                                        </span>
                                                    </div>
                                                    <hr></hr>
                                                    <div className="manual-div">
                                                    <span>
                                                        <a href="https://staging.drivers.lexus.com/t3Portal/document/om-s/PMV0003U/xhtml/PMV0003U.html" >
                                                        <p className="pdf-icon" style={{fontWeight:700}}>PDF</p>
                                                        <div className="manual-title">
                                                            <p style={{fontSize:"13px",lineHeight:"21px",fontWeight:700}}>Lexus 2016 CT200H Owners Manual ...</p>
                                                            <p className="manual-link"style={{fontWeight:700,lineHeight:'21px'}}>
                                                                Read manual
                                                            </p>
                                                        </div>
                                                        </a>
                                                        </span>
                                                    </div>
                                                </CardBody>
                                                </div>
                                                
                                            </Card>
                                        </div>
                                    </div>
                             
                            <div className="LdGrid_col_xs_12__8uqox LdGrid_col_sm_12__3ukne LdGrid_col_md_4__1QyB0 ">
                                
                                <div className="LdGrid_row__yhiy1">
                                    <div className="LdGrid_col_xs_6__3XFiK grid-tile" >
                                        <div className="ld-panel-tile ld-tile-xs service-history-tile">
                                          
                                            <Card className="w-100 center-card" >
                                                <CardHeader className="card-front title-inline content-wrapper">
                                                    <div>
                                                        <div>
                                                            <CardTitle tag="h6" className="iconWrapper">
                                                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNi44IDI3Ij48cGF0aCBkPSJNNi42IDIyLjhINC45Yy0uNSAwLS45LS4yLTEuMS0uNS0uNC0uNS0uMS0xLjMtLjEtMS4zLjEtLjYuNS0xIDEuMi0xSDhjLjQgMCAuNy4xLjguMy4xLjIuMS41IDAgLjctLjEuMi0uMy40LS43LjlsLS4xLjJjLS41LjctMSAuNy0xLjQuN3ptLS4zLS41aC4xYy4zIDAgLjcgMCAxLjEtLjRsLjEtLjJjLjQtLjUuNi0uNy43LS45LjEtLjEuMS0uMiAwLS4yIDAgMC0uMS0uMS0uNC0uMWgtM2MtLjMgMC0uNi4xLS43LjYtLjEuMi0uMi42IDAgLjkuMS4yLjMuMy43LjNoMS40eiIvPjxwYXRoIGQ9Ik01LjggMjUuOWMtLjEgMC0uMSAwIDAgMEgzLjRjLS43IDAtMi0uNC0yLTEuOHYtNC44aC44VjI0YzAgLjkgMS4xIDEgMS4yIDFoMi4yYy4yIDAgLjcgMCAxLS4zLjMgMCAuNC0uMi40LS40aC44YzAgLjUtLjIuOS0uNSAxLjEtLjUuNS0xLjMuNS0xLjUuNXptMjEuMy05Ljh2LS4zYy0uMS0uNC0uMi0xLjEuNS0xLjUuMy0uMi42LS40LjgtLjYuNC0uMy43LS41LjktLjZoLjFjLjMtLjEuNi0uMyAxLjEtLjQuNS0uMSAxLjYtLjQgMS42LS40aC4xYy4yIDAgLjctLjIgMSAuNC4xLjMuMyAxIC41IDEuN3YuMmMuMS4zLS4xLjctLjUuOC0uNS4xLTIuOS44LTUuOS45bC0uMi0uMnptNS40LTMuNWgtLjNzLTEgLjMtMS42LjRjLS41LjEtLjcuMi0xIC40aC0uMWMtLjEuMS0uNS4zLS44LjUtLjMuMi0uNi40LS44LjYtLjQuMy0uNC42LS4zIDEgMi44LS4yIDUuMS0uOCA1LjUtLjkuMSAwIC4xLS4xLjEtLjJ2LS4yYy0uMS0uNS0uMy0xLjQtLjQtMS42LS4yLjEtLjIgMC0uMyAwek05LjcgMTYuMWgtLjJjLTMtLjItNS40LS44LTUuOS0uOS0uMy0uMS0uNS0uNC0uNS0uOHYtLjJjLjItLjguMy0xLjUuNS0xLjcuMy0uNi44LS40IDEtLjRoLjFzMS4xLjMgMS42LjRjLjUuMS44LjMgMS4xLjRoLjFjLjIuMS41LjMuOS42LjMuMi41LjQuOC42LjcuNS42IDEuMi41IDEuNXYuNXptLTYtMS40Yy40LjEgMi43LjcgNS41LjkuMS0uNCAwLS43LS4zLTEtLjMtLjItLjYtLjQtLjgtLjYtLjMtLjItLjYtLjUtLjgtLjVoLS4xYy0uMy0uMS0uNS0uMi0xLS40LS41LS4xLTEuNi0uNC0xLjYtLjUtLjMtLjEtLjMgMC0uNC4xLS4yLjMtLjQgMS4yLS41IDEuN3YuMmMtLjEgMCAwIC4xIDAgLjF6Ii8+PHBhdGggZD0iTTEyLjIgMTcuNWMtMS40IDAtNi4zLS4zLTYuMy0uMy0zLjctLjItNC4zLTEuOS00LjYtMi42bC41LS4yYy4zLjcuOCAyIDQuMiAyLjIgMCAwIDQuOS4zIDYuMy4zbC0uMS42em0xOCA1LjNjLS40IDAtLjktLjEtMS4zLS42bC0uMi0uMmMtLjQtLjUtLjYtLjctLjYtLjktLjEtLjMtLjEtLjUgMC0uNy4xLS4yLjQtLjMuOC0uM0gzMmMuNiAwIDEgLjMgMS4yIDEgMCAwIC4zLjctLjEgMS4zLS4yLjMtLjYuNS0xLjEuNWgtMS42Yy0uMS0uMS0uMS0uMS0uMi0uMXptLTEuMy0yLjNjLS4zIDAtLjQuMS0uNC4xdi4yYy4xLjEuMi40LjYuOGwuMS4yYy4zLjUuNy40IDEuMS40aDEuNmMuMyAwIC41LS4xLjYtLjMuMi0uMy4xLS43IDAtLjktLjEtLjUtLjQtLjYtLjctLjZoLTIuOXptLTEwLjUtMi42Yy0xIDAtMS44LS42LTEuOC0xLjQgMC0uOC44LTEuNCAxLjgtMS40czEuOC42IDEuOCAxLjRjMCAuNy0uOCAxLjQtMS44IDEuNHptMC0yLjRjLS43IDAtMS4zLjQtMS4zLjlzLjYuOSAxLjMuOWMuNyAwIDEuMy0uNCAxLjMtLjlzLS42LS45LTEuMy0uOXoiLz48cGF0aCBkPSJNMTguNSAyNC43Yy0uMSAwLS4xIDAgMCAwLTQuNCAwLTEzLjctLjItMTQuNy0uMy0xLjItLjItMS41LS44LTEuNy0xLjUtLjItLjYtLjctNC42LS43LTUgMC0uMi0uMS0zLjEtLjItNC4yIDAtMS4zLjktMS45IDEuNC0yLjIuMS0uOS42LTEuNi44LTEuOWwtLjEtLjNjLS43LS4xLTEuNC0uNC0xLjUtLjUtLjQtLjItLjctLjYtLjgtMS0uMS0uNCAwLS44LjMtMS4xLjYtLjcgMS45LS44IDIuNi0uOC40IDAgLjcuMS45LjIuMi4yLjIuNS4yLjZ2MS4yaC45QzYuNSA2LjQgOC40IDMgOC44IDIuNWMuMi0uMy42LS42LjYtLjcgMS0uNiA2LjUtLjggOC42LS44aDEuNmMyLjEgMCA3LjYuMiA4LjUuOC4xIDAgLjUuNC43LjcuNC41IDIuMyAzLjggMi45IDUuM2guMlY2LjZjMC0uMSAwLS40LjItLjYuMi0uMi41LS4zLjktLjIuNyAwIDIgLjEgMi42LjguMy40LjMuOC4zIDEtLjEuNS0uNS44LS44IDFIMzVjLS4xIDAtLjkuMy0xLjMuNGwtLjEuM2MuMi4zLjggMS4xLjggMi4xLjUuMyAxLjQuOSAxLjQgMi4yIDAgMS4xLS4yIDMuOS0uMiA0LjIgMCAuMy0uNSA0LjMtLjcgNS0uMi43LS41IDEuNC0xLjcgMS41LTEuMS4yLTEwLjQuNC0xNC43LjR6TTQuMSA2LjZjLS4xIDAtLjEgMCAwIDAtLjYgMC0xLjguMS0yLjIuNi0uMS4xLS4yLjMtLjIuNXMuMi40LjQuNWMuMy4xIDEuMS40IDEuNS41LjIgMCAuMy4xLjMuM2wuMS44YzAgLjEgMCAuMy0uMS4zIDAgMC0uOC44LS43IDEuNyAwIC4yLS4xLjMtLjIuNCAwIDAtMS4xLjUtMS4xIDEuNiAwIC4xLjIgMy45LjIgNC4yIDAgLjMuNSA0LjIuNyA0LjguMS41LjMuOSAxLjEgMSAuOS4xIDkuOS4zIDE0LjYuMyA0LjcgMCAxMy43LS4yIDE0LjYtLjMuOC0uMS45LS41IDEuMS0xIC4yLS41LjctNC40LjctNC44IDAtLjMuMi00IC4yLTQuMiAwLTEuMS0xLjEtMS42LTEuMS0xLjYtLjEtLjEtLjItLjItLjItLjQgMC0uOC0uNS0xLjctLjgtMS45LS4xLS4xLS4xLS4yLS4xLS4zbC4xLS44YzAtLjIuMi0uMy4zLS4zLjMgMCAxLjEtLjMgMS41LS40LjItLjEuNC0uMy40LS41IDAtLjEgMC0uMi0uMS0uMy0uNC0uNS0xLjUtLjUtMi4xLS42aC0uM3YxLjVjMCAuMi0uMi40LS40LjRoLS45Yy0uMiAwLS4zLS4xLS40LS4zLS4zLTEuMi0yLjQtNC45LTIuOC01LjQtLjItLjMtLjUtLjYtLjUtLjYtLjUtLjMtNS0uNy04LS43SDE4Yy0zIDAtNy41LjMtOC4xLjdsLS41LjVjLS40LjYtMi41IDQuMy0yLjggNS41IDAgLjItLjIuMy0uNC4zSDQuNmMtLjIgMC0uNC0uMi0uNC0uNFY2LjVjLjEuMSAwIC4xLS4xLjF6Ii8+PHBhdGggZD0iTTMxIDguNGMtLjkgMC04LjEtLjMtMTMuMy0uMy01LjUgMC0xMS4zLjMtMTEuNC4zdi0uOGMuMSAwIDUuOS0uMyAxMS40LS4zIDUuMiAwIDEyLjUuMyAxMy4zLjN2Ljh6Ii8+PHBhdGggZD0iTTI3LjEgMjQuMUg5LjhjLS44IDAtMS4xLS4zLTEuMy0uNi0uMy0uNS0uMS0xLjEgMC0xLjMuMi0uMyAyLjgtNC4zIDMuMi00LjguMS0uMS4yLS4yLjItLjMuMi0uMy40LS42LjQtLjd2LS4zYy0uMi0uNS0uNy0xLjItLjgtMS40LS4zLS4zLS41LS42LS41LS42LS4yLS40LTEuMi0xLjYtNS01LjZsLjUtLjVjMi45IDMuMSA0LjYgNSA1LjEgNS43IDAgMCAuMi4yLjUuNi4zLjQuNyAxIC45IDEuNnYuMWMuMS4yLjEuNS4xLjd2LjFzLS4yLjQtLjUuOGwtLjMuM2MtLjQuNS0yLjkgNC40LTMuMSA0LjctLjEuMS0uMS40IDAgLjYuMS4yLjQuMi42LjJoMTcuM2MuMiAwIC41IDAgLjYtLjIuMS0uMiAwLS41IDAtLjYtLjItLjMtMi43LTQuMi0zLjEtNC43bC0uMy0uM2MtLjMtLjQtLjUtLjgtLjUtLjl2LS4xYzAtLjIgMC0uNC4xLS44di0uMWMuMi0uNC41LS45LjktMS40LjMtLjQuNS0uNi41LS42LjctMS4xIDUuNC01LjggNS41LTUuOWwuMS0uMS41LjUtLjEuMWMtMSAxLTQuOCA0LjktNS40IDUuOCAwIDAtLjIuMy0uNS42LS40LjYtLjcgMS0uOCAxLjMgMCAuMS0uMS4yLS4xLjMuMS4xLjIuNC40LjdsLjIuM2MuNS41IDMgNC41IDMuMiA0LjguMS4yLjMuOCAwIDEuMy0uMS40LS40LjctMS4yLjd6Ii8+PHBhdGggZD0iTTI0LjYgMTcuNVYxN2MxLjQgMCA2LjItLjMgNi4zLS4zIDMuNC0uMiAzLjktMS41IDQuMi0yLjJsLjIuMS4yLjFjLS4zLjgtLjkgMi4zLTQuNiAyLjUgMCAwLTQuOS4zLTYuMy4zeiIvPjxwYXRoIGQ9Ik0yNC43IDIyLjhIMTIuMWMtLjYgMC0uOS0uMi0xLjEtLjQtLjMtLjQtLjEtMSAuMS0xLjMuMS0uMy42LTEuMiAxLTJsLjUtMWMuNC0uOC4xLTEuNC0uMS0xLjhWMTZoLjJsLjItLjJ2LjFjLjIuNC44IDEuMi4yIDIuNCAwIDAtLjIuNS0uNSAxLS4zLjYtLjkgMS43LTEgMi0uMS4yLS4zLjYtLjEuOS4xLjIuNC4yLjcuMmgxMi42Yy4zIDAgLjYgMCAuNy0uMi4xLS4yLjEtLjUtLjEtLjgtLjEtLjMtLjctMS40LTEtMmwtLjUtMWMtLjYtMS4yLS4xLTIgLjMtMi40di0uMWwuNC40Yy0uMy40LS42IDEtLjIgMS45IDAgMCAuMi41LjUgMWwxIDJjLjIuNS4zIDEgLjEgMS4zLS40LjItLjguMy0xLjMuM3oiLz48cGF0aCBkPSJNMTIuMyAxOC45aDEyLjJ2LjVIMTIuM3ptNi4yLTQuMWMtMy40IDAtNS44IDAtNi43LS4xdi0uNWMuOSAwIDMuMy4xIDYuNi4xaDYuOHYuNWgtNi43ek0zMS4xIDI2Yy0uMiAwLTEgMC0xLjUtLjUtLjMtLjMtLjUtLjctLjUtMS4xaC44YzAgLjMuMS40LjIuNi4zLjMuOC4zIDEgLjNoMi4zYy4xIDAgMS4yLS4xIDEuMi0xdi01aC44djVjMCAxLjQtMS4zIDEuOC0yIDEuOGgtMS4yYy0uNC0uMS0xLS4xLTEuMS0uMXoiLz48L3N2Zz4=" className="statusIcon subscriptionStatus-icon"/>
                                                            </CardTitle>
                                                        </div>
    
                                                        <div className="card-title">
                                                            <CardTitle className="card-title" tag="h5">
                                                               Service history
                                                            </CardTitle>
                                                        </div>
    
                                                        <div className="card-title">
                                                            <CardTitle>
                                                                <p className="card-linkout-text card-title" style={{fontWeight:700,lineHeight:'21px'}}>View history</p>
                                                            </CardTitle>
                                                        </div>
                                                    </div>
                                                </CardHeader>
                                            </Card>
                                        </div>
    
                                    </div>
                                    <div className="LdGrid_col_xs_6__3XFiK grid-tile" >
                                        <div className="ld-panel-tile ld-tile-xs subscriptionTile">
                                          
                                            <Card className="w-100 center-card" >
                                                <CardHeader className="card-front title-inline content-wrapper">
                                                    <div>
                                                        <div>
                                                            <CardTitle tag="h6" className="iconWrapper">
                                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABYElEQVR42oyUsUoDQRCG1wuaQot7BDtz2OQNDBpPn8DaTsVA8Al8hNSGQHwD+6RILOTARkGDQhRrJaBIGoWQ/BP+Dcu6u+fAF3IzN//NzeycUm7bBhdgCH7IkL4d9Q8rgR4YgDOQgCJJ6BvwnpJPZAu8gxNQCDxMYjUwYs6fSj5A1fCVwRX4JG0QG/Fd5iwqWwIZn6ItNgQaZArurAJOmSsa8yoeHa9zaFWgxSrWa0puNcLPAWiBiSV0Cb6M62tHvybMFQ31wonkWZsVrTv6KxrzM1LMESlTpOGIrVBDffPCZ9KnNzY6dsTXtNBz6HDBzh1NNm0TvEqzb8F+QEimdw/6nrhM/Ub+7IGHwGnuUcx3yiU3lYo6YAyOPTf3A9UeMbdrr4hrs6esyja9IolvaaWyyPBXOH5tUWhpzcoyfirqYAMsg1VOp85YljPpxRKnoCljBb/swxN9qV5S02YCDABl3FLh3y9QHAAAAABJRU5ErkJggg==" className="statusIcon subscriptionStatus-icon"/>
                                                            </CardTitle>
                                                        </div>
    
                                                        <div className="card-title">
                                                            <CardTitle className="card-title" tag="h5">
                                                               Subscription status
                                                            </CardTitle>
                                                        </div>
    
                                                        <div className="card-title">
                                                            <CardTitle>
                                                                <p className="card-linkout-text card-title" style={{fontWeight:700,lineHeight:'21px'}}>View subscription</p>
                                                            </CardTitle>
                                                        </div>
                                                    </div>
                                                </CardHeader>
                                            </Card>
                                        </div>
    
                                    </div>
                                </div>
                                <div className="LdGrid_row__yhiy1">
                                    <div className="LdGrid_col_xs_12__8uqox LdGrid_col_sm_6__31ZI2 LdGrid_col_md_12__1kcTb grid-tile" >
                                        <div className="ld-Tile-Info ld-panel-tile ld-tile-fw indicator-lights-tile">
                                          
                                            <Card className="w-100 center-card" >
                                                <CardHeader className="card-front title-inline content-wrapper">
                                                    <div>
                                                        <div>
                                                            <CardTitle tag="h6" className="iconWrapper">
                                                            <img className="service-card-image2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWBAMAAAAoU0G7AAAALVBMVEX///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAOrOgAAAADnRSTlMAECAwQFBggKCwwNDg8It9l8oAAAClSURBVBjTY2AAAbYEBgTgOYDEyXuGxDnRg2CzPdJDaOJp4EBoylNggmpiCe+6wcDQu6LUgYEh993r6YkMDGKV+95dY+CAm5rXwMDQBzWI7QWQgEmBJGBSYAmg1FMQGdcAUfAERPhB2MyPQKSeAZjD+gBE8gWAOewLGLy3MHAVgDlcDV6v1i3hWABx86xXDizrVkLczfcK6ESWdWCdDD4QS48wMAAAbCEtB3PyLbwAAAAASUVORK5CYII=" alt=""></img>
                                                            </CardTitle>
                                                        </div>
    
                                                        <div className="card-title">
                                                            <CardTitle className="card-title" tag="h5">
                                                              Indicator lights
                                                            </CardTitle>
                                                        </div>
    
                                                        <div className="card-title">
                                                            <CardTitle>
                                                                <p className="card-linkout-text card-title" style={{fontWeight:700,lineHeight:'21px'}}>Learn more</p>
                                                            </CardTitle>
                                                        </div>
                                                    </div>
                                                </CardHeader>
                                            </Card>
                                        </div>
    
                                    </div>
                                   
                                </div>
                                
                            </div>
                            <div className="LdGrid_col_xs_12__8uqox LdGrid_col_sm_12__3ukne LdGrid_col_md_4__1QyB0 ">
                                
                                
                                <div className="LdGrid_row__yhiy1">
                                <div className="LdGrid_col_xs_12__8uqox LdGrid_col_sm_6__31ZI2 LdGrid_col_md_12__1kcTb grid-tile" >
                                        <div className="ld-panel-tile ld-tile-fh teamsiteVideo video-tile">
                                            <a className="w-100 h-100 quick-tips-text-card quick-tips-card card">
                                                <div className="quick-tips-img card-img">
                                                <img alt="Quicktip image cap" src="https://i.ytimg.com/vi/xCNvMLRkvd8/maxresdefault.jpg"/>
                                                </div>
                                                
                                                <div className="d-flex card-img-overlay">
                                                    <div className="text-center align-self-center mx-auto">
                                                    <h6 className="card-title iconWrapper">
                                                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAgMTIwIj48cGF0aCBkPSJNNzUuNSA1OS4xbC0yOS0xNi43Yy0uNy0uNC0xLjUuMS0xLjUuOXYzMy41YzAgLjguOCAxLjMgMS41LjlsMjktMTYuN2MuNy0uNS43LTEuNSAwLTEuOXoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz48L3N2Zz4=" alt="icon-img" className="statusIcon"/>
                                                    </h6>
                                                    </div>
                                                </div>
                                                
                                            </a>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                            </div>
                            </div>
                        </div>
                        </div>
                );
                                                
     }
 }
 
 MapTo('TMNA/components/Manuals')(manuals, manualsEditConfig);
 