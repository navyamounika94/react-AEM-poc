/* xtslint:disable*/
import React from 'react';
import { SafePureComponent, SafePureComponentState } from '../../components/SafePureComponent';

interface OwnProps {
    errMsg?: string;
    onVehicleSelected?: () => void;
}

type Props = OwnProps;

class Garage extends SafePureComponent<Props, SafePureComponentState> {
    public componentName = 'Garage';

    // tslint:disable-next-line:cognitive-complexity
    public safeRender() {

        return (
            <>
                <div>Garage for Logged in case</div>
            </>
        );
    }
}

export default Garage;
// xtslint:enable*/