import { Text } from '@sitecore-jss/sitecore-jss-react';
import classnames from 'classnames';
import get from 'lodash.get';
import sortBy from 'lodash.sortby';
import toPairs from 'lodash.topairs';
import React from 'react';
import { ReactCookieProps } from 'react-cookie';
import { Settings } from 'react-slick';
import { Dropdown, DropdownMenu, DropdownToggle, Form, FormGroup, Input, ListGroup, ListGroupItem } from 'reactstrap';
import selectedVehicleJson from '../../GlobalNavigation/LdVehicleSelector/SelectedVehicle.json';
import ModelYearJson from '../../GlobalNavigation/ModelYearJson.json';
import Image from '../components/image';
import { modelFormat, modelStrip } from '../components/models';
import PageLoader from '../components/PageLoader';
import RichText from '../components/RichText';
import RouterLink from '../components/routerLink';
import { SafePureComponent, SafePureComponentState } from '../components/SafePureComponent';
import { JSSRichText, JSSText } from '../components/types';
import { Vehicle } from '../components/vehicle';
import { Viewport } from '../components/Viewport';
import ImageSlider from '../ImageSlider';
import { Carousel, NavigationContentBlock, NavigationMenuLink, NavigationSelectVehicle, NavigationSubMenu, VehicleModelSelector } from '../types';
import Garage from './Garage';
import axios, { AxiosResponse } from 'axios';
const defaultVehicleLabel = 'Select a Vehicle';
const defaultModelLabel = 'SELECT A VEHICLE';
const defaultYearLabel = 'SELECT A YEAR';


function clearCookie(name: string) {
    const exdate = new Date();
    exdate.setDate(exdate.getDate() - 1);
    const extString = '; expires=' + exdate.toUTCString();
    const domainString = ';domain=.lexus.com;path=/';
    const cookieValue = '' + extString + domainString;
    document.cookie = name + '=' + cookieValue;
}

interface OwnProps extends ReactCookieProps {
    isLoggedIn: boolean;
    selectedGarageVehicle: Vehicle | null;
    SelectVehicle?: {
        children: NavigationSelectVehicle[];
    };
    isOpen: boolean;
    toggle: () => void;
    toggleNav: () => void;
    onMouseOver?: () => void;
    onMouseLeave?: () => void;
    onVehicleSelected: () => void;
    onOptionClicked: () => void;
    viewport: Viewport;
}
export class vehicleModelYearList {
    [model: string]: string[];
}
type Props = OwnProps;
interface State extends SafePureComponentState {
    isDefaultView: boolean;  // Starts as true. Becomes false when a vehicle is selected using vehicle dropdowns (not using garage).
    isLoggedIn: boolean;
    isVehicleDetailsLoading: boolean;
    isVehicleLoadingError: boolean;
    moduleLabel: string; // Label for nav heading. Starts as 'Select a Vehicle', then changes to '${Year} ${Model}'
    selectedModel: string; // Vehicle model selected in dropdown
    selectedYear: string; // Vehicle year selected in dropdown
    modelYearData: {
        [model: string]: string[]
    }; // Contains all model and year combinations available to the user
    yearList?: string[]; // Contains all the years available to the user for the selected model
    isModelSelected: boolean;
}

class LdVehicleSelector extends SafePureComponent<Props, State> {
    public static defaultProps = {
        isLoggedIn: false,
        selectedGarageVehicle: selectedVehicleJson,
        viewport: 'DESKTOP'
    };

    public componentName = 'LdVehicleSelector';

    public settings: Settings;

    constructor(props: Props) {
        super(props);

        this.state = {
            isDefaultView: false,
            isLoggedIn: this.props.isLoggedIn,
            isModelSelected: false,
            isVehicleDetailsLoading: false,
            isVehicleLoadingError: false,
            modelYearData: {},
            moduleLabel: defaultVehicleLabel,
            selectedModel: defaultModelLabel,
            selectedYear: defaultYearLabel,
        };

        this.settings = {
            centerMode: false,
            dots: true,
            infinite: true,
            lazyLoad: 'ondemand',
            slidesToScroll: 1,
            slidesToShow: 1,
            speed: 500,
            variableWidth: true,
        };
    }
    navya=async ()=>{
        var myHeaders = new Headers();
        myHeaders.append("Access-Control-Request-Method", "GET");
        myHeaders.append("x-api-key","CIzm7ytLco5j7FINAtTGm1xAqDODwrVd8zHhtXZ1");
        myHeaders.append("X-BRAND","L");
        //let x:{[model: string]: string[]};
        let x=await fetch("https://region1.test.eos.toyota.com/v1/vehicle/model-year-list?format=model-year", {
            headers: myHeaders
        }).then((response) => {
           // console.log(response.json())
            return response.json()
         //   return  response.data
        }).then((json)=>{

            let jsonObject = json.data.vehicleModelYearList as Object;
            Object.setPrototypeOf(jsonObject, vehicleModelYearList.prototype);
          console.log( jsonObject);
          return jsonObject;
           // console.log(json.data.vehicleModelYearList)
        //    return (json.data.vehicleModelYearList).map(
        //        (my:[string, string[]])=>{
        //           return my
        //         });
        })
      //  return x
    }

    public getModelYearData = () => {
      
       this.navya();
      return ModelYearJson.vehicleModelYearList                         
        }

    /**
     * Given a model, return the list of years that correlate to that model
     */
    public getYearListForModel = (selectedModel: string): undefined | string[] => {
        const modelYearData = this.getModelYearData();

        // Run model-strip on all keys modelYearData and on the selected Model, just
        // in case the model string from the <option> tag differs from the model string in the DCS service response.
        const formattedModelYearData: {[model: string]: string[]} = {};
        for (const model of Object.keys(modelYearData)) {
            const yearList = modelYearData[model];
            formattedModelYearData[modelStrip(model)] = yearList;
        }

        return formattedModelYearData[modelStrip(selectedModel)];
    }

     /**
      * Given a model, return true/false depends on whether model exists in data.
      */
    public validateModelWithData = (selectedModel: string): undefined | boolean => {
        const modelYearData = this.getModelYearData();
        const model = modelStrip(selectedModel).replace(/^([A-Z][A-Z])F/, '$1 F');
        return model in modelYearData;
    }

    /**
     * Reset component state based on the currently selected Vehicle
     */
    public loadSelectedVehicle = () => {
        if (!!this.props.selectedGarageVehicle  && this.validateModelWithData(this.props.selectedGarageVehicle.model)) {
            const model = this.props.selectedGarageVehicle.model;
            const year = this.props.selectedGarageVehicle.year;

            this.setState({
                isModelSelected: true,
                moduleLabel: year + ' ' + modelFormat(model),
                selectedModel: model,
                selectedYear: year,
                yearList: this.getYearListForModel(model),
            });
        } else { // No vehicle is selected
            const modelYearData = this.getModelYearData();
            this.setState({
                isModelSelected: false,
                modelYearData,
                moduleLabel: defaultVehicleLabel,
                selectedModel: defaultModelLabel,
                selectedYear: defaultYearLabel,
                yearList: undefined,
            });
        }
    }


    public resetVehicleSelection = () => {
        if (this.props.isLoggedIn) {
            clearCookie('last-viewed-cars');
            clearCookie('ldng-logged-out-selected-vehicle');
        } else {
            clearCookie('ldng-logged-out-selected-vehicle');
        }

        this.setState({
            isDefaultView: true,
            isModelSelected: false,
            moduleLabel: defaultVehicleLabel,
            selectedModel: defaultModelLabel,
            selectedYear: defaultYearLabel,
        });

    }

    public handleModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.props.onOptionClicked();

        const selectedModel = e.target.value;
        const yearList = this.getYearListForModel(selectedModel);

        this.setState({
            selectedModel,
            selectedYear: defaultYearLabel,
            yearList,
        });
    }

    public handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedYear = e.target.value;
        this.props.onOptionClicked();
        this.setState({
            isDefaultView: (this.state.selectedModel === defaultModelLabel && this.state.selectedYear === defaultYearLabel),
            selectedYear,
        });
    }

    public handleVehicleSelection = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        this.props.onVehicleSelected();

        if (this.state.selectedModel.toLowerCase() !== defaultModelLabel.toLowerCase() && this.state.selectedYear.toLowerCase() !== defaultYearLabel.toLowerCase()) {
            this.setState({
                moduleLabel: this.state.selectedYear + ' ' + this.state.selectedModel
            });

        }
    }


    public ModelSelectionDropdown = (props: {
        isDefaultView: boolean;
        selectedModel: string;
        modelYearData: {
            [model: string]: string[];
        };
        handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    }) => {
        return (
            <FormGroup className="col-12 select-model">
                <Input
                    type="select"
                    name="select"
                    id="m-selector"
                    onChange={props.handleChange}
                    value={modelStrip(props.selectedModel)}
                    onClick={() => { this.props.onOptionClicked(); }}
                    onMouseDown={() => { this.props.onOptionClicked(); }}
                >
                    {(props.selectedModel === defaultModelLabel) && <option>{modelFormat(props.selectedModel)}</option>}
                    {
                        sortBy(toPairs(props.modelYearData), 0).map((entries: [string, string[]]) => {
                            const model = entries[0];
                            return (
                                <option
                                    key={modelStrip(model)}
                                    value={modelStrip(model)}
                                >
                                    {modelFormat(model)}
                                </option>
                            );
                        })
                    }
                </Input>
            </FormGroup>
        );
    }

    public YearSelectionDropdown = (props: {
        isDefaultView: boolean;
        selectedYear: string;
        selectedModel: string;
        yearList?: string[];
        modelYearData: {
            [model: string]: string[];
        };
        handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    }) => {
        let yearList;
        {props.yearList ? yearList = props.yearList : yearList = props.modelYearData[props.selectedModel] ; }
        let yearOptions: JSX.Element[] = [];
        if (yearList) {
            yearList.sort((a: string, b: string) => {
                return parseInt(b, 10) - parseInt(a, 10);
            });

            yearOptions = yearList.map((year: string, i: number) => (
                <option
                    key={i}
                    value={year}
                >
                    {year}
                </option>
            ));
        }


        return (
            <FormGroup className="col-12 select-year">
                <Input
                    type="select"
                    name="select"
                    id="yr-selector"
                    onChange={props.handleChange}
                    value={props.selectedYear}
                    onClick={() => { this.props.onOptionClicked(); }}
                    onMouseDown={() => { this.props.onOptionClicked(); }}
                >
                    {(props.selectedYear === defaultYearLabel || yearList === undefined) ? <option>{props.selectedYear}</option> : null}
                    {yearOptions}
                </Input>
            </FormGroup>
        );
    }

    /**
     * Shown to the right of the model-year selector in logged-out view.
     * When there is no vehicle selected
     */
    public VehicleCopy = (props: { title: JSSText, isModelSelected: boolean, body: JSSRichText }) => {
        return (
            <div className={`col-12 col-sm-6 col-md-4 col-panel defaultView`}>
                <h4> <Text field={props.title} /></h4>
                <div className="d-flex flex-row flex-wrap">
                    <RichText field={props.body} />
                </div>
            </div>
        );
    }

    /**
     * Shown to the right of the model-year selector in logged-out view.
     * When there is a vehicle selected
     */
    public QuickLinksSection = (props: { isModelSelected: boolean, vehicleLabel: string, QuickLinks: NavigationSubMenu }) => {
        return (
            <div className={`col-12 col-sm-6 col-md-4 col-panel`}>
                <h4>
                    {props.vehicleLabel} <Text field={props.QuickLinks.navLabel.jss} />
                </h4>

                <hr className="ld-hrule" />

                <ListGroup className="d-flex flex-row flex-wrap">
                    {props.QuickLinks.children &&
                        props.QuickLinks.children.map((child: NavigationMenuLink, index: number) => {
                            return (
                                <ListGroupItem key={index}>
                                    <div
                                        data-metrics-event-name="72.3"
                                        data-metrics-container="Global Nav"
                                        data-metrics-nav_category="Vehicle Module"
                                        data-metrics-nav_subcategory={child.navLabel.jss.value}
                                    >
                                        <RouterLink
                                            field={child.navLink}
                                        >
                                            <Text field={child.navLabel.jss} />
                                            <Image className="navlink-icon" lazyLoad={false} field={child.navIcon.jss} />
                                        </RouterLink>
                                    </div>
                                </ListGroupItem>
                            );
                        })
                    }
                </ListGroup>
            </div>
        );
    }

    public componentDidMount() {
        const modelYearData = this.getModelYearData();
        this.setState({
            isDefaultView: this.state.isModelSelected,
            modelYearData,
        });

        this.loadSelectedVehicle();
    }

    public componentDidUpdate(prevProps: Props) {
        if (this.props.selectedGarageVehicle !== prevProps.selectedGarageVehicle) {
            this.loadSelectedVehicle();
        }
    }

    // tslint:disable-next-line
    public safeRender() {
        if (!this.props.SelectVehicle) {
            return null;
        }

        const modelYearData = this.getModelYearData();

        const navigationDatasource = this.props.SelectVehicle.children[0];

        const benefitsDescription = this.props.SelectVehicle.children[0].children[0] as NavigationContentBlock;
        const carModelSelector = this.props.SelectVehicle.children[0].children[1] as VehicleModelSelector;
        const carousel = this.props.SelectVehicle.children[0].children[2] as Carousel;
        const quickLinks = this.props.SelectVehicle.children[0].children[3] as NavigationSubMenu;

        let GarageContent: JSX.Element;
        GarageContent = (
            <Garage
                onVehicleSelected={this.props.onVehicleSelected}
            />
        );

        const { yearList, selectedYear, selectedModel, moduleLabel, isLoggedIn, isVehicleDetailsLoading, isModelSelected } = this.state;
        const vinLabel = get(carModelSelector, 'children[1].vINLabel.jss', { value: '' });
        const vin = get(this.props, 'selectedGarageVehicle.vin', '');
        const showClearLink =
            (!this.props.isLoggedIn && this.props.selectedGarageVehicle !== null) ||
            (this.props.isLoggedIn && this.props.selectedGarageVehicle !== null);

        return (
            <Dropdown
                nav={true}
                inNavbar={(this.props.viewport !== Viewport.MOBILE)}
                tag="div"
                className={classnames({
                    'garage-auth': isLoggedIn,
                    'vehicle-dpd': true
                })}
                isOpen={this.props.isOpen}
                toggle={this.props.toggle}
                onMouseOver={() => {
                    if (this.props.onMouseOver) {
                        this.props.onMouseOver();
                    }
                }}
                onMouseLeave={this.props.onMouseLeave}
            >

                {navigationDatasource.navLabel && <>
                    <DropdownToggle
                        nav={true}
                        className={classnames({
                            'ld-caret': true,
                            'selectVehicle-nav': isLoggedIn,
                            'selectVehicle-nav-unauth': !isLoggedIn
                        })}
                        id="nav-bar-selectVehicle-tab"
                        data-metrics-nav_category="My Vehicle"
                        data-metrics-nav_subcategory="My Vehicle"
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); }}
                    >
                        {this.props.viewport === Viewport.MOBILE ?
                            <div className="text-hide closePanel">Before</div>
                            : null
                        }
                        {moduleLabel}

                        {(this.props.viewport === Viewport.MOBILE && isLoggedIn && this.props.selectedGarageVehicle && this.props.selectedGarageVehicle.vin) &&
                            <div className="displayVin">
                                <Text field={vinLabel} />
                                {vin}
                            </div>
                        }
                        {this.props.viewport === Viewport.MOBILE ?
                            <div className="text-hide closeMenu" onClick={this.props.toggleNav}>after</div>
                            : null
                        }
                    </DropdownToggle>

                    <DropdownMenu className="ld-submenu">
                        {navigationDatasource.children &&
                            <div className="row veh-selector">
                                {this.props.viewport === Viewport.MOBILE && isLoggedIn &&
                                    <div
                                        className={classnames({
                                            'col-12': true,
                                            'col-panel': true,
                                            'col-sm-6': true
                                        })}
                                    >
                                        {
                                            isVehicleDetailsLoading ?
                                                <PageLoader />
                                                :
                                                <div>
                                                    {GarageContent}
                                                </div>
                                        }
                                    </div>
                                }
                                <div
                                    className={classnames({
                                        'col-12': true,
                                        'col-lg-4': true,
                                        'col-panel': true,
                                        'col-sm-6': true,
                                        'select-vehicle-div': true
                                    })}
                                >
                                    <p className="col veh-copy">{carModelSelector.title.jss.value}</p>
                                    <Form>
                                        <div className="row">
                                            <div className="col-12 vehiclepanel">
                                                {showClearLink &&
                                                    <div className="clearLink">
                                                        <a onClick={this.resetVehicleSelection}>
                                                            {carModelSelector.subTitle.jss.value}
                                                        </a>
                                                    </div>
                                                }
                                                <this.ModelSelectionDropdown
                                                    selectedModel={selectedModel}
                                                    modelYearData={modelYearData}
                                                    handleChange={this.handleModelChange}
                                                    isDefaultView={this.state.isDefaultView}
                                                />

                                                <this.YearSelectionDropdown
                                                    selectedYear={selectedYear}
                                                    selectedModel={selectedModel}
                                                    yearList={yearList}
                                                    modelYearData={modelYearData}
                                                    handleChange={this.handleYearChange}
                                                    isDefaultView={this.state.isDefaultView}
                                                />

                                                <FormGroup className="col-12 veh-submit-div">
                                                    <input
                                                        type="button"
                                                        className="btn-black btn-block veh-submit"
                                                        onClick={this.handleVehicleSelection}
                                                        value={carModelSelector.buttonLabel.jss.value}
                                                    />
                                                </FormGroup>
                                                <div
                                                    data-metrics-event-name="73.2"
                                                    data-metrics-action={carModelSelector.bottomText.jss.value}
                                                    data-metrics-module="Vehicle Module"
                                                >
                                                    {(!isLoggedIn && this.state.isModelSelected) &&
                                                        <RichText
                                                            className="veh-caption"
                                                            field={carModelSelector.bottomText.jss}
                                                            data-metrics-event-name="73.2"
                                                        />
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </Form>
                                </div>

                                {isLoggedIn ?
                                    <> {this.props.viewport !== Viewport.MOBILE &&
                                        <div
                                            className={classnames({
                                                'col-12': true,
                                                'col-lg-8': true,
                                                'col-panel': true,
                                                'col-sm-6': true
                                            })}
                                        >
                                            {
                                                isVehicleDetailsLoading ?
                                                    <PageLoader />
                                                    :
                                                    <div> {GarageContent} </div>
                                            }
                                        </div>
                                    } </>
                                    :
                                    <>
                                        {isModelSelected ?
                                            <this.QuickLinksSection
                                                isModelSelected={this.state.isModelSelected}
                                                QuickLinks={quickLinks}
                                                vehicleLabel={this.state.moduleLabel}
                                            />
                                            :
                                            <this.VehicleCopy
                                                isModelSelected={this.state.isModelSelected}
                                                title={benefitsDescription.title.jss}
                                                body={benefitsDescription.body.jss}
                                            />
                                        }
                                        <div className="col-12 col-md-4 col-panel un-authPanel">
                                            <div className="col imagecolumn">
                                                {!!carousel && this.props.isOpen &&
                                                    <ImageSlider
                                                        settings={this.settings}
                                                        sliderContent={carousel.children}
                                                        category="Vehicle Module"
                                                        id="vehnavSlider"
                                                    />}
                                            </div>
                                        </div>
                                    </>
                                }
                            </div>
                        }
                    </DropdownMenu>
                </>
                }
            </Dropdown>
        );
    }
}

export default LdVehicleSelector;
