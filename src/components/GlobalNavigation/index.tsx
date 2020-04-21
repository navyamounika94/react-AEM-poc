import classnames from 'classnames';
import React from 'react';
import Helmet from 'react-helmet';
import { Collapse, Nav, Navbar, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import HeaderLogo from './components/headerLogo';
import { SafePureComponent, SafePureComponentState } from './components/SafePureComponent';
import { SitecoreImage } from './components/types';
import { Viewport } from './components/Viewport';
import globalNavJson from './GlobalNav.json';
import LdNavCenter from './LdNavCenter';
import LdNavProfile from './LdNavProfile';
import LdNavSearch, { LdNavSearch as GlobalSearch } from './LdNavSearch';
import LdVehicleSelector from './LdVehicleSelector';
import { NavigationHeaderLogo, NavigationMenu, NavigationMenuLink, NavigationSelectVehicle } from './types';


interface OwnProps {
    experienceEditorActive: boolean;
    firstName: string;
    isLoggedIn: boolean;
    navigationItems?: {
        fields?: {
            HeaderLogo: {
                // This is an array, but there should only be 1 HeaderLogo.
                children: NavigationHeaderLogo[];
            };
            LoggedIn: {
                children: NavigationMenuLink[];
            };
            LoggedOut: {
                children: NavigationMenuLink[];
            };
            NavigationLinks: {
                children: NavigationMenu[];
            }
            SelectVehicle: {
                // This is an array, but there should only be 1 SelectVehicle item
                children: NavigationSelectVehicle[];
            };
        }
    };
    viewport: Viewport;
}

type Props = OwnProps;

interface State extends SafePureComponentState {
    dropdownOpen: boolean;
    headerLogo: SitecoreImage | null;
    isSearchOpen: boolean;
    isOpen: boolean;
    openIndex: number | null;
}

class GlobalNavigation extends SafePureComponent<Props, State> {
    public static defaultProps = {
        experienceEditorActive: false,
        firstName: 'Lexus',
        isLoggedIn: false,
        navigationItems: {
            fields: {
                HeaderLogo: globalNavJson.HeaderLogo,
                LoggedIn: globalNavJson.LoggedIn,
                LoggedOut: globalNavJson.LoggedOut,
                NavigationLinks: globalNavJson.NavigationLinks,
                SelectVehicle: globalNavJson.SelectVehicle
            }
        }
    };
    public componentName = 'GlobalNavigation';
    public graphQLResult: any = []; // TODO: Refactor this component so this.graphQLResult isn't used to store data.
    public currentView = this.props.viewport;
    public searchElem: React.RefObject<GlobalSearch>;
    public searchInput: React.RefObject<HTMLInputElement>;

    public lockItem: boolean = false; // When true, disables mouseenter and mouseleave events

    constructor(props: Props) {
        super(props);
        this.searchElem = React.createRef();
        this.searchInput = React.createRef();
        this.state = {
            dropdownOpen: false,
            headerLogo: null,
            isOpen: false,
            isSearchOpen: false,
            openIndex: null,

        };
    }

    public componentDidMount() {
        if (this.props.experienceEditorActive) {
            document.body.className = 'exp-editor-body';
        }
        if (this.props.isLoggedIn === false) {
            this.setState({
                dropdownOpen: true
            });
        }
        if (this.props.navigationItems && this.props.navigationItems.fields) {
            this.setState({
                headerLogo: this.props.navigationItems.fields.HeaderLogo.children[0].image,
            });

            this.graphQLResult = this.props.navigationItems.fields;
        }
    }

    public componentWillUnmount() {
        document.body.className = '';
    }

    public componentDidUpdate(prevProps: Props) {
        if (this.props.navigationItems !== prevProps.navigationItems && this.props.navigationItems && this.props.navigationItems.fields) {
            this.setState({
                headerLogo: this.props.navigationItems.fields.HeaderLogo.children[0].image,
            });

            this.graphQLResult = this.props.navigationItems.fields;
            this.graphQLResult.isLoggedIn = this.props.isLoggedIn;
            this.graphQLResult.firstName = this.props.firstName;
        }

        if (this.props.viewport !== prevProps.viewport) {
            this.graphQLResult.isTablet = this.props.viewport === Viewport.TABLET;
        }

        if (this.props.firstName !== prevProps.firstName) {
            this.graphQLResult.firstName = this.props.firstName;
            this.forceUpdate();
        }

        if (this.props.navigationItems !== prevProps.navigationItems) {
            this.graphQLResult.isTablet = this.props.viewport === Viewport.TABLET;
        }
    }

    /**
     * Toggle the currently-opened navigation item.
     *
     * If the navbar is already open to the given tab (and locked), the nav is closed
     * If the navbar is open to a different tab, the tab is switched (and locked)
     * If the navbar is closed, it is opened and switched to the given tab (and locked).
     *
     * When a nav item is 'locked', it does not response to mouse enter / mouse exit events.
     */
    public toggleItem = (index: number) => {
        if (this.state.openIndex === index) {
            if (this.lockItem) { // Item is already open, and locked. Close it
                this.setState({
                    isOpen: false,
                    openIndex: null,
                });

                this.lockItem = false;
            } else { // Item is open, but not locked. Lock it
                this.lockItem = true;
            }
        } else { // Item is closed, open and lock it.
            this.setState({
                isOpen: true,
                openIndex: index,
            });

            this.lockItem = true;
        }
    }

    public toggleNavbar = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    public toggleProfileDropdown = () => {
        this.setState((prevState: State) => ({
            dropdownOpen: !prevState.dropdownOpen,
        }));
    }

    public onMouseEnter = () => {
        if (!this.state.dropdownOpen && !this.state.isOpen) {
            this.setState({
                dropdownOpen: true,
            });
        }
    }

    public onMouseExit = () => {
        if (this.state.dropdownOpen) {
            this.setState({
                dropdownOpen: false,
            });
        }
    }

    public onMouseOver = (index: number) => {
        if (!this.lockItem && (!this.state.isOpen || this.state.openIndex !== index) && !this.state.dropdownOpen) {
            this.setState({
                isOpen: true,
                openIndex: index
            });
        }
    }

    public onMouseLeave = (index: number) => {
        if (this.state.isOpen && !this.lockItem) {
            this.setState({
                isOpen: false,
                openIndex: null
            });
        }
    }

    public onOptionClicked = () => {
        this.setState({
            isOpen: true,
            openIndex: 0,
        });
        this.lockItem = true;
    }

    /**
     * When the search bar is open, detects all clicks on the page, and closes the searchbar
     * if any thing is clicked outside of the search section.
     */
    public searchOnClick = (e: MouseEvent) => {
        const searchInput: HTMLInputElement | null = this.searchInput.current;
        const searchContainer: HTMLElement | null = searchInput && searchInput.parentElement;

        if (!!searchContainer && searchContainer.contains(e.target as Node | null)) {
            return;
        } else {
            this.toggleSearchbar();
        }
    }

    public toggleSearchbar = () => {
        this.setState(
            {
                isSearchOpen: !this.state.isSearchOpen,
            },
            () => {
                if (this.state.isSearchOpen) {
                    document.addEventListener('click', this.searchOnClick, false);

                    // Focus the input element after a slight timeout (for the search-open animation)
                    setTimeout(
                        () => {
                            if (this.state.isSearchOpen && this.searchInput.current) {
                                this.searchInput.current.focus();
                            }
                        },
                        300
                    );
                } else {
                    document.removeEventListener('click', this.searchOnClick, false);

                    if (this.searchElem.current) {
                        this.searchElem.current.setState({
                            searchInput: ''
                        });
                    }
                }
            }
        );
    }

    /**
     * Called anytime a link in the globalnav is clicked. On link clicks, the global nav is closed.
     *
     * NOTE: if the link is external, the page reload before this function gets executed. The close behavior is only relevant to internal links.
     */
    public onLinkClick = () => {
        if (this.state.isOpen) {
            this.toggleNavbar();
        }
    }

    public getFixedProperty = (): string => {
        return (this.props.experienceEditorActive) ? '' : 'top';
    }

    public onVehicleSelected = () => {

        this.lockItem = true; // Prevent mouse-hover events until the closing animation is finished
        this.setState(
            {
                isOpen: false,
                openIndex: null,
            },
            () => {
                // Unlock item after .9 seconds (length of the closing animation)
                setTimeout(() => { this.lockItem = false; }, 900);
            }
        );
    }

    public DesktopView = () => {
        return (
            <Navbar
                expand="lg"
                className={classnames({
                    'exp-editor-nav': this.props.experienceEditorActive,
                    'row': true
                })}
                fixed={this.getFixedProperty()}
            >
                <div className="container">

                    {!!this.state.headerLogo &&
                        <HeaderLogo
                            field={this.state.headerLogo.jss}
                        />
                    }

                    <NavbarToggler aria-label="Lexus Drivers" name="navToggler" id="navToggler" onClick={this.toggleNavbar} />

                    <LdVehicleSelector
                        {...this.graphQLResult}

                        isOpen={this.state.isOpen && this.state.openIndex === 0}
                        toggle={() => { this.toggleItem(0); }}
                        onMouseOver={() => { this.onMouseOver(0); }}
                        onMouseLeave={() => { this.onMouseLeave(0); }}
                        toggleNav={this.toggleNavbar}
                        onVehicleSelected={this.onVehicleSelected}
                        onOptionClicked={this.onOptionClicked}
                    />

                    <div className={this.props.isLoggedIn ? 'nm-view-nav' : 'nm-view-nav nm-view-unauth'}>
                        <LdNavCenter
                            {...this.graphQLResult}

                            toggle={this.toggleItem}
                            isOpen={this.state.isOpen}
                            openIndex={this.state.openIndex}
                            onMouseOver={this.onMouseOver}
                            onMouseLeave={this.onMouseLeave}
                            onLinkClick={this.onLinkClick}
                        />
                    </div>
                    <div className="nm-view-nav">
                        <LdNavProfile
                            {...this.graphQLResult}
                            dropdownOpen={this.state.dropdownOpen}
                            toggle={this.toggleProfileDropdown}
                            onMouseEnter={this.onMouseEnter}
                            onMouseExit={this.onMouseExit}
                            onLinkClick={this.toggleProfileDropdown}
                        />
                    </div>

                    <NavItem className="ld-navright" tag="div" onClick={this.toggleSearchbar}>
                        <NavLink id="ld-navSearch">
                            <i data-metrics-nav_category="Search" data-metrics-nav_subcategory="Search" />
                        </NavLink>
                    </NavItem>

                    {/* <Collapse className="search-bar" isOpen={this.state.isSearchOpen}>
                        <LdNavSearch
                            isDesktop={true}
                            ref={this.searchElem}
                            inputRef={this.searchInput}
                            toggleNav={this.toggleNavbar}
                            toggleSearchbar={this.toggleSearchbar}
                        />
                </Collapse> */}
                </div>
            </Navbar >
        );
    }

    public MobileView = () => {
        const ldNavCenter: JSX.Element = (
            <LdNavCenter
                {...this.graphQLResult}

                toggle={(index: number) => {
                    if (this.state.openIndex === index) {
                        this.setState({
                            dropdownOpen: false,
                            openIndex: null,
                        });
                    } else {
                        this.setState({
                            dropdownOpen: false,
                            openIndex: index,
                        });
                    }
                }}
                isOpen={this.state.isOpen}
                openIndex={this.state.openIndex}
                onLinkClick={this.onLinkClick}
            />
        );

        const ldNavProfile: JSX.Element = (
            <LdNavProfile
                {...this.graphQLResult}
                key={1}
                dropdownOpen={this.state.dropdownOpen}
                onLinkClick={this.onLinkClick}
                onClick={() => {
                    this.toggleProfileDropdown();

                    // Close any other open tabs
                    this.setState({
                        openIndex: null
                    });

                    // Scroll to top of nav
                    const topElement = document.querySelector('#nav-bar-selectVehicle-tab');
                    if (topElement) {
                        topElement.scrollIntoView();
                    }
                }}
                // In mobile, we use 'onClick' instead of 'toggle' because toggle is called anytime the page is clicked outside the dropdown (unwanted behavior)
            />
        );

        const headerLogo = this.state.headerLogo;
        const componentsOrder = (this.props.isLoggedIn) ?
            [ ldNavProfile, ldNavCenter ]
            :
            [ ldNavCenter, ldNavProfile ]
        ;

        return (
            <Navbar
                expand="lg"
                className={classnames({
                    'exp-editor-nav': this.props.experienceEditorActive,
                    'row': true
                })}
                fixed={this.getFixedProperty()}
            >
                <div className="container">

                    {!!headerLogo &&
                        <HeaderLogo
                            field={headerLogo.jss}
                        />
                    }

                    {this.props.isLoggedIn ?
                        <NavItem className="ld-navright show-welExp ml-auto welexp">
                            <NavLink
                                data-metrics-event-name="73.6"
                                data-metrics-subsection="Home"
                                data-metrics-module="Welcome Tool Tip Steps"
                                data-metrics-action="Restart"
                                href=""
                                className="text-hide show-welExp"
                                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                    e.preventDefault();
                                }}
                            >
                                Link
                            </NavLink>
                        </NavItem>
                        :
                        null}

                    <NavbarToggler aria-label="Lexus Drivers" name="navToggler" id="navToggler" onClick={this.toggleNavbar} />

                    <Collapse
                        isOpen={this.state.isOpen}
                        navbar={true}
                        className={classnames({
                            'showElemView': true,
                            'vehicle-panelShown': this.state.openIndex === 0
                        })}
                    >
                        <LdVehicleSelector
                            {...this.graphQLResult}
                            isOpen={this.state.openIndex === 0}
                            toggle={() => {
                                if (this.state.openIndex === 0) {
                                    this.setState({
                                        openIndex: null
                                    });
                                } else {
                                    this.setState({
                                        openIndex: 0
                                    });
                                }
                            }}
                            toggleNav={this.toggleNavbar}
                            onVehicleSelected={this.onVehicleSelected}
                            onOptionClicked={this.onOptionClicked}
                        />
                        {/* nav center and navprofile */}
                        {componentsOrder.map((component: JSX.Element, i: number) =>
                            <div
                                key={i}
                                className={classnames({
                                    'nm-view-nav': true,
                                    'vehicle-panelShown': this.state.openIndex === 0
                                })}
                            >
                            {component}
                            </div>)}

                        <NavItem className="ld-navright" tag="div" onClick={this.toggleSearchbar}>
                            <NavLink id="ld-navSearch">
                                <i data-metrics-nav_category="Search" data-metrics-nav_subcategory="Search" />
                            </NavLink>
                        </NavItem>
                    </Collapse>

                    <Collapse
                        className={classnames({
                            'search-bar': true,
                            'vehicle-panelShown': this.state.openIndex === 0
                        })}
                        isOpen={this.state.isOpen}
                    >
                        <LdNavSearch
                            isDesktop={false}
                            ref={this.searchElem}
                            inputRef={this.searchInput}
                            toggleNav={this.toggleNavbar}
                            toggleSearchbar={this.toggleSearchbar}
                        />
                    </Collapse>
                </div>
            </Navbar >
        );
    }

    public TabletView = () => {
        const headerLogo = this.state.headerLogo;
        const isVehicleSelectorOpen = (this.state.isOpen && this.state.openIndex === 0);
        const isCollapseOpen = (this.state.isOpen && !isVehicleSelectorOpen);

        return (
            <Navbar
                expand="lg"
                className={classnames({
                    'exp-editor-nav': this.props.experienceEditorActive,
                    'row': true
                })}
                fixed={this.getFixedProperty()}
            >
                <div className="container">
                    {!!headerLogo &&
                        <HeaderLogo
                            field={headerLogo.jss}
                        />
                    }

                    <Nav className="showView">
                        <LdVehicleSelector
                            {...this.graphQLResult}
                            onVehicleSelected={this.onVehicleSelected}
                            isOpen={isVehicleSelectorOpen}
                            toggle={() => {
                                if (this.state.openIndex === 0) {
                                    this.setState({
                                        isOpen: false,
                                        openIndex: null
                                    });
                                } else {
                                    this.setState({
                                        dropdownOpen: false,
                                        isOpen: true,
                                        openIndex: 0
                                    });
                                }
                            }}
                            toggleNav={this.toggleNavbar}
                            onOptionClicked={this.onOptionClicked}
                        />
                        <LdNavProfile
                            {...this.graphQLResult}
                            dropdownOpen={this.state.dropdownOpen}
                            toggle={this.toggleProfileDropdown}
                            onMouseExit={this.onMouseExit}
                            onLinkClick={this.toggleProfileDropdown}
                        />
                    </Nav>

                    <NavbarToggler
                        name="navToggler"
                        id="navToggler"
                        aria-label="Lexus Drivers"
                        onClick={this.toggleNavbar}
                        data-metrics-module="Hamburger Menu"
                        data-metrics-action="Expand"
                        data-metrics-nav_category="Hamburger Menu"
                        data-metrics-nav_subcategory="Expand"
                    />

                    <Collapse isOpen={isCollapseOpen} navbar={true} className="hideElemView" >
                        <LdNavCenter
                            {...this.graphQLResult}
                            onLinkClick={this.onLinkClick}
                            isOpen={true}
                            openIndex={this.state.openIndex}
                            toggle={(index: number) => {
                                if (this.state.openIndex === index) {
                                    this.setState({
                                        isOpen: true,
                                        openIndex: null
                                    });
                                } else {
                                    this.setState({
                                        isOpen: true,
                                        openIndex: index
                                    });
                                }
                            }}
                        />
                        <NavItem className="ld-navright" tag="div" onClick={this.toggleSearchbar}>
                            <NavLink id="ld-navSearch">
                                <i data-metrics-nav_category="Search" data-metrics-nav_subcategory="Search" />
                            </NavLink>
                        </NavItem>
                    </Collapse>

                    <Collapse className="search-bar" isOpen={isCollapseOpen}>
                        <LdNavSearch
                            isDesktop={false}
                            ref={this.searchElem}
                            inputRef={this.searchInput}
                            toggleNav={this.toggleNavbar}
                            toggleSearchbar={this.toggleSearchbar}
                        />
                    </Collapse>
                </div>
            </Navbar>
        );
    }

    // tslint:disable-next-line: cognitive-complexity
    public safeRender() {
        const isDesktop = (this.props.viewport === Viewport.DESKTOP || this.props.viewport === Viewport.EXTRA_LARGE);
        return (
            <>
                <Helmet
                    bodyAttributes={{
                        'data-nav-state': (this.state.isOpen) ? 'open' : 'closed',
                        'data-search-active': (this.state.isSearchOpen) ? 'open' : 'closed'
                    }}
                />
                <div id="ld-navwrapper" className={this.state.isOpen ? 'open' : 'closed'}>
                    {(() => {
                        if (this.props.viewport !== this.currentView) {
                            this.currentView = this.props.viewport;
                            if (this.state.isOpen) {
                                this.setState({
                                    isOpen: false,
                                    openIndex: null
                                });
                                this.lockItem = false;
                            }
                            if (this.state.isSearchOpen) {
                                this.toggleSearchbar();
                            }
                        }
                        switch (this.props.viewport) {
                            case Viewport.TABLET:
                                return <this.TabletView />;
                            case Viewport.MOBILE:
                                return <this.MobileView />;
                            default:
                                return <this.DesktopView />;
                        }
                    })()}
                </div>
                {((this.state.isOpen && this.state.openIndex !== null) || this.state.openIndex === 0 || (isDesktop && this.state.isSearchOpen)) ? <div className="nav-overlay" /> : null}
            </>
        );
    }
}


export default GlobalNavigation;
