type handleChangeProps = {
  target: {
    value: string
  }
}

type FormProps = {
  id: number
  searchTerm: string
  handleChange: ({ target }: handleChangeProps) => void
}
