# Portfolio

Project to share my knowledge through projects I've done. You can access <a href="https://felipemalli.com/">here</a>!

## Description

I started by designing the design in figma (you can check the figma sketch on code link), and then applied it to the front-end and decided to change some details. 

- <a href="https://www.figma.com/file/nHqcJLhujq8W1bRvWgX4Z4/Felipevm---Portfolio?node-id=0%3A1&t=OozdlhhGbtT6g7L4-1">Figma draft</a>

I intentionally avoided use of auxiliary libraries and frameworks (except one for the subtitle). The slider, animations... I did everything just with typescript, react and tailwind! You can check the `package.json` file to verify all dependencies.

## Future of the project

I will develop a backend for this application soon! Since I developed this frontend project already receiving structured and scalable data, it would be easy to implement the backend. So, I\'m going take this opportunity to train something new with the backend/devops.

The data of knowledge cards in this project follow this structure:
```
type ILinkName = 'Certificate' | 'Code' | 'Browser' | 'API'
type IBottonRightTag = 'Hours' | 'Browser'
interface ICard {
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
    other?: {
      name?: string,
      inProgress?: boolean,
      skills: string[],
    }
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
```

OBS: You can check all interfaces at `src/interfaces`!

## Technologies
- Typescript
- React
- Tailwind
- Figma

I'm also using Vite for faster development.