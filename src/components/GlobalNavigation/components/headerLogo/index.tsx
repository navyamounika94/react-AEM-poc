import React from 'react';
import zenScroll from 'zenscroll';
import Image from '../image';
import RouterLink from '../routerLink';
import { JSSImage } from '../types';


interface Props {
    field: JSSImage;
}

class HeaderLogo extends React.Component<Props> {
    public render() {
        return (
            <div
                data-metrics-event-name="72.3"
                data-metrics-subsection="Home"
                data-metrics-container="Global Nav"
                data-metrics-nav_category="Lexus Drivers"
                data-metrics-nav_subcategory="Lexus Drivers Logo"
            >
                <RouterLink
                    className="navbar-brand"
                    jss={{
                        value: {
                            href: '/lexusdrivers'
                        }
                    }}
                    onClick={() => {
                        if (window.location.href.endsWith('/lexusdrivers')) {
                            zenScroll.toY(0, 500);
                        }
                    }}
                >
                    <Image
                        id="brandLogo"
                        field={this.props.field}
                    />
                </RouterLink>
            </div>
        );
    }
}

export default HeaderLogo;