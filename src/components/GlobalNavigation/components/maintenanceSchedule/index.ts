export interface ScheduleMaintenance {
  warningList?: any;
  businessExceptionList?: any;
  statusType?: any;
  statusCode?: any;
  statusDescription?: any;
  errorMessage?: any;
  vin?: any;
  division?: any;
  model?: any;
  modelYear?: any;
  language: string;
  outputType: string;
  lastKnownMileage: string;
  specialInstrctionId?: any;
  operCondId?: any;
  engineTransDrive: EngineTransDrive[];
  splInstructions: SplInstruction[];
  operatingConditions: OperatingCondition[];
  scheduleMaintenanceDetails: ScheduleMaintenanceDetail[];
  serviceIntervalList: ServiceIntervalList;
  status: boolean;
}

export interface ServiceIntervalList {
  serviceInterval: ServiceInterval[];
}

export interface ServiceInterval {
  interval?: any;
  serviceIntervalMileage: string;
  mileageUnit: string;
  serviceIntervalTime: string;
  timeUnit: string;
}

export interface ScheduleMaintenanceDetail {
  interval: 'NEXT' | 'CURRENT';
  intervalMileage: string;
  mileageUnit: string;
  serviceIntervalTime: string;
  timeUnit: string;
  maintenanceTasksList: MaintenanceTasksList;
}

export interface MaintenanceTasksList {
  maintenanceTask: MaintenanceTask[];
}

export interface MaintenanceTask {
  intervalNote?: string;
  operCondDesc: string;
  operCondNotes?: any;
  operCondlongDesc?: any;
  servItemDesc: string;
  servItemNotes?: string;
  servMaintItemNotes?: any;
  servItemLongDesc?: any;
  operCondSort: string;
  servItemSort?: string;
  servActionSort: string;
}

export interface OperatingCondition {
  operCondid: string;
  operCondDesc: string;
}

export interface SplInstruction {
  specialInstructionId: string;
  specialInstructionDesc: string;
}

export interface EngineTransDrive {
  engine: string;
  transmission: string;
  driveType: string;
}