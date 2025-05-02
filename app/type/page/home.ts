export interface IndexStateData {
  emailVerifiedModal: {
    otp: string
  }
}

export interface IndexStateFeature {
  emailCountdown: {
    status: boolean
    time: number
    countdown: number
  }
}
