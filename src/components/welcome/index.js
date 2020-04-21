import React, { Component } from 'react';
import { MapTo } from '@adobe/cq-react-editable-components';

const welcomeTilesEditConfig = {

    emptyLabel: 'welcomeTiles',

    isEmpty: function (props) {
        return true;
    }
};

class welcomeTiles extends Component {
    render() {
        return (
            <div className="container-fluid ld-pagecontent">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="wc-grid">
                                    <div className="LdGrid_GridContainerFluid__353lR">
                                        <div className="LdGrid_row__3UM1_">
                                            <div className="LdGrid_xs_center__xyK2M">
                                                <h3 className="panel-title">{this.props.title}</h3></div>
                                        </div>
                                    </div>
                                    <div className="grid-wrapper">
                                        <div className="LdGrid_GridContainer__2mY3R">
                                            <div data-testid="wc-tile" className="d-flex">
                                                {/*this.props.welcomeTileItems.map((tile, index) =>
                                                    <div className="wc-column" key={index}>
                                                        <div className="tile-default tile-lg wc-tile">
                                                            <span>
                                                                <a href="/lexusdrivers/service" target="">
                                                                    <div className="img-wrapper">
                                                                        <img alt="Service By Lexus" width="100%" id={"tileImg-"+index} className="card-img" src={tile.imgpath}/>
                                                                        <p className="disclaimer-text card-text">
                                                                            <small id="disclaimerText-0" className="text-muted"></small>
                                                                        </p>
                                                                    </div>
                                                                    <div className="text_overlay">
                                                                        <p className="card-text">{tile.text}</p>
                                                                        <div role="group" className="btn-group">
                                                                            <a href="/lexusdrivers/service" className="wc-btn btn btn-secondary" target="" id={"tileBtn-"+index}>{tile.btntext}</a>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                )*/}
                                                <div className="wc-column">
                                                    {this.props.welcomeTileItems[0] &&
                                                        <div className="tile-default tile-lg wc-tile">
                                                            <span>
                                                                <a href={this.props.welcomeTileItems[0].link} target="">
                                                                    <div className="img-wrapper">
                                                                        <img alt="Service By Lexus" width="100%" id="tileImg-0" className="card-img" src={this.props.welcomeTileItems[0].imgpath} />
                                                                        <p className="disclaimer-text card-text">
                                                                            <small id="disclaimerText-0" className="text-muted"></small>
                                                                        </p>
                                                                    </div>
                                                                    <div className="text_overlay">
                                                                        <p className="card-text">{this.props.welcomeTileItems[0].text}</p>
                                                                        <div role="group" className="btn-group">
                                                                            <a href={this.props.welcomeTileItems[0].link} className="wc-btn btn btn-secondary" target="" id="tileBtn-0">{this.props.welcomeTileItems[0].btntext}</a>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </span> 
                                                        </div>
                                                    }
                                                </div>
                                                <div className="wc-column">
                                                    {this.props.welcomeTileItems[1] &&
                                                        <div className="tile-default tile-md wc-tile">
                                                            <span>
                                                                <a href={this.props.welcomeTileItems[1].link} target="">
                                                                    <div className="img-wrapper">
                                                                        <img alt="Service By Lexus" width="100%" id="tileImg-1" className="card-img" src={this.props.welcomeTileItems[1].imgpath} />
                                                                        <p className="disclaimer-text card-text">
                                                                            <small id="disclaimerText-0" className="text-muted"></small>
                                                                        </p>
                                                                    </div>
                                                                    <div className="text_overlay">
                                                                        <p className="card-text">{this.props.welcomeTileItems[1].text}</p>
                                                                        <div role="group" className="btn-group">
                                                                            <a href={this.props.welcomeTileItems[1].link} className="wc-btn btn btn-secondary" target="" id="tileBtn-0">{this.props.welcomeTileItems[1].btntext}</a>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </span>
                                                        </div>
                                                    }
                                                    {this.props.welcomeTileItems[2] &&
                                                        <div className="tile-default tile-md wc-tile">
                                                            <span>
                                                                <a href={this.props.welcomeTileItems[2].link} target="">
                                                                    <div className="img-wrapper">
                                                                        <img alt="Service By Lexus" width="100%" id="tileImg-1" className="card-img" src={this.props.welcomeTileItems[2].imgpath} />
                                                                        <p className="disclaimer-text card-text">
                                                                            <small id="disclaimerText-0" className="text-muted"></small>
                                                                        </p>
                                                                    </div>
                                                                    <div className="text_overlay">
                                                                        <p className="card-text">{this.props.welcomeTileItems[2].text}</p>
                                                                        <div role="group" className="btn-group">
                                                                            <a href={this.props.welcomeTileItems[2].link} className="wc-btn btn btn-secondary" target="" id="tileBtn-0">{this.props.welcomeTileItems[2].btntext}</a>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </span>
                                                        </div>
                                                    }
                                                </div>
                                                {this.props.welcomeTileItems[3] &&
                                                    <div className="wc-column">
                                                        <div className="tile-default tile-lg wc-tile">
                                                            <span>
                                                                <a href={this.props.welcomeTileItems[3].link} target="">
                                                                    <div className="img-wrapper">
                                                                        <img alt="Service By Lexus" width="100%" id="tileImg-3" className="card-img" src={this.props.welcomeTileItems[3].imgpath} />
                                                                        <p className="disclaimer-text card-text">
                                                                            <small id="disclaimerText-0" className="text-muted"></small>
                                                                        </p>
                                                                    </div>
                                                                    <div className="text_overlay">
                                                                        <p className="card-text">{this.props.welcomeTileItems[3].text}</p>
                                                                        <div role="group" className="btn-group">
                                                                            <a href={this.props.welcomeTileItems[3].link} className="wc-btn btn btn-secondary" target="" id="tileBtn-3">{this.props.welcomeTileItems[3].btntext}</a>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="ld-hrule" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MapTo('TMNA/components/welcomeTiles')(welcomeTiles, welcomeTilesEditConfig);