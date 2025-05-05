import type { GoogleSheet } from '~/type'

export interface SheetStateData {
  currentSheet: GoogleSheet | null
}
export interface SheetStateFeature {
  modal: {
    status: boolean
  }
}
