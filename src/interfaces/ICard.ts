export type ILinkName = 'Certificate' | 'Code' | 'Browser' | 'API'
export type IBottonRightTag = 'Hours' | 'Browser'
export interface ICard {
  name: string,
  type: string,
  creator: string,
  description: string,
  inProgress: boolean,
  image?: string,
  techAreas: {
    frontend?: {
      inProgress?: boolean,
      skills: string[],
    },
    backend?: {
      inProgress?: boolean,
      skills: string[],
    },
    devops?: {
      inProgress?: boolean,
      skills: string[],
    },
  },
  links: {
    name: ILinkName,
    link: string,
  }[],
  bottonRightTag?: {
    name: IBottonRightTag,
    value?: number
  },
}