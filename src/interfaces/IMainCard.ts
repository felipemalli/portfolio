export interface ITextContent {
  text: string
  className: string
}

export interface IImageContent {
  image: string
  subtitle?: string
  className: string
}

export interface IMainProject {
  name: string
  description: string
  theme: {
    name: string
    subtheme: {
      name: string
      selectedPage: number
      pages: (ITextContent | IImageContent)[][]
    }[]
  }[]
}
