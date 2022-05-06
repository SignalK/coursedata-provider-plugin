export interface SKPaths {
  [key: string]: any
}

export interface CourseData {
  gc: CourseResult
  rl: CourseResult
}

export interface CourseResult {
  calcMethod?: string
  distance?: number | null
  bearingTrue?: number | null
  bearingMagnetic?: number | null
  velocityMadeGood?: number | null
  timeToGo?: number | null
  estimatedTimeOfArrival?: string | null
  previousPoint?: {
    distance?: number | null
  }
  bearingTrackTrue?: number | null
  bearingTrackMagnetic?: number | null
  crossTrackError?: number | null
}

// ** Delta Message content**
export interface DeltaValue {
  path: string
  value: any
}

// ** Delta Update Message **
export interface DeltaUpdate {
  updates: [
    {
      values: DeltaValue[]
    }
  ]
}

// ** Notification Message **
export interface DeltaNotification extends DeltaValue {
  value: {
    state: ALARM_STATE
    method: ALARM_METHOD[]
    message: string
  }
}

export enum ALARM_STATE {
  nominal = 'nominal',
  normal = 'normal',
  alert = 'alert',
  warn = 'warn',
  alarm = 'alarm',
  emergency = 'emergency'
}

export enum ALARM_METHOD {
  visual = 'visual',
  sound = 'sound'
}
