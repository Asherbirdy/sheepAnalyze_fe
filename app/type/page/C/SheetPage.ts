import type { GoogleSheet } from '~/type'

export interface SheetStateData {
  modalForm: {
    name: string
    api: string
  }
}
export interface SheetStateFeature {
  modal: {
    status: boolean
  }
}
