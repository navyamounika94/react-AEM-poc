import { SitecoreBoolean, SitecoreImage, SitecoreLink, SitecoreRichText, SitecoreTextField } from './components/types';

export interface NavItem {}

export interface NavigationMenu { // i.e. 'Resources', 'Service', 'Technology', 'Benefits'
    children: Array<NavigationSubMenu | Carousel>;
    navLabel: SitecoreTextField;
}

export interface Carousel extends NavItem {
     children: CarouselSlide[];
}

export interface CarouselSlide {
    linkoutUrl: SitecoreLink;
    thumbnail: SitecoreImage;
    title: SitecoreTextField;
    videoSlide: SitecoreBoolean;
}

export interface NavigationSubMenu extends NavItem {
    children: NavigationMenuLink[];
    label: SitecoreTextField;
    link: SitecoreLink;
    navLabel: SitecoreTextField;
}

export interface NavigationMenuLink {
    navLabel: SitecoreTextField;
    navLink: SitecoreLink;
    navIcon: SitecoreImage;
}

export interface NavigationSelectVehicle {
    children: NavItem[];
    navLabel: SitecoreTextField;
}

export interface NavigationContentBlock extends NavItem {
    body: SitecoreRichText;
    title: SitecoreTextField;
}

export interface VehicleModelSelector extends NavItem {
    bottomText: SitecoreRichText;
    buttonLabel: SitecoreTextField;
    subTitle: SitecoreTextField;
    title: SitecoreTextField;
    vINLabel: SitecoreTextField;
    vehicleSelectorDefaultText: SitecoreTextField;
    yearSelectorDefaultText: SitecoreTextField;
}

export interface ManageGarage extends NavItem {
    children: ManageGarageItem[];
    manageGarageLink: SitecoreLink;
    manageGarageText: SitecoreTextField;
    title: SitecoreTextField;
}

export interface ManageGarageItem {
    carImage: SitecoreImage;
    carModel: SitecoreTextField;
    description: SitecoreRichText;
    findDealerLabel: SitecoreTextField;
    findDealerLink: SitecoreLink;
    title: SitecoreTextField;
}

export interface NavigationError extends NavItem {
    body: SitecoreRichText;
    buttonLabel: SitecoreTextField;
    successPageUrl: SitecoreLink;
    title: SitecoreTextField;
}

export interface NavigationHeaderLogo {
    description: SitecoreRichText;
    image: SitecoreImage;
    title: SitecoreTextField;
}

export interface GlobalNavMetrics {
    'data-metrics-container': string;
    'data-metrics-event-name': string;
}