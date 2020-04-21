import { ServiceInterval } from '../maintenanceSchedule';

export interface Vehicle {
    // Required values
    description: string;
    isSelected: boolean;
    make: string;
    model: string;
    modelCode: string;
    nickname?: string;
    vehicleId: number;
    vehicleOfInterestId: number;
    vin?: string;
    year: string;
    yearMakeModel: string;

    // Values that are used somewhere in the app, but are optional
    preferredDealer?: PreferredDealer;
    safetyConnectInd?: boolean;
    serviceConnectEnabled?: boolean;
    default_flag?: boolean;

    // Values included by DCS in the getVehicles request, but that are not used in LDNg
    associationIndicator?: string;
    createdDate?: number;
    currentVehicleMileage?: number;
    customerProductRole?: string;
    driverHabitMiles?: number;
    driverHabitUnits?: string;
    driveType?: string;
    effectiveDt?: number;
    enformDiagnosticsFull?: boolean;
    enformDiagnosticsLight?: boolean;
    enformDiagnosticsLightPlus?: boolean;
    entuneEnformInd?: boolean;
    exteriorColorCode?: string;
    grade?: string;
    hashValue?: number;
    headUnitType?: string;
    homeDealerCode?: string;
    keyOffCapableIndicator?: boolean;
    lastServiceRemMileage?: string;
    neverOwnedFlag?: boolean;
    ownershipStartDate?: number;
    transmission?: string;
    vdsection?: string;
    wmidentifier?: string;

    // Values that are not included in DCS repsonses, but are added by our application
    maintenanceSchedule?: ServiceInterval[];
}

export interface PreferredDealer {
    address?: {
        addressLine1?: string;
        addressLine2?: string;
        city?: string;
        state?: string;
        zipCode?: string;
        countryCode?: string;
    };
    dealerCode?: string;
}