import { ChangeEvent, MouseEvent } from "react"

export interface IBoardWriteProps {
  isEdit: boolean
  data?: any
}

export interface IMyVariables{
  number: number
  writer?: string
  title?: string
  contents?: string
}

export interface IBoardWriteUIProps{
  onClickSummit: (event: MouseEvent<HTMLButtonElement>) => void
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
  onChangecontents: (event: ChangeEvent<HTMLInputElement>) => void
  isEdit: boolean
  data?: any
}