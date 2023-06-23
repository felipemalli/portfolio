interface ITextContent {
  text: string
  className: string
}

interface IImageContent {
  image: string
  subtitle: string
  className: string
}

export interface IMainCard2 {
  theme: string
  subtheme?: string
  pagination: {
    page: number
    content: (ITextContent | IImageContent)[]
  }[]
}
