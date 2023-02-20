import { IChildrenProps } from '../../../interfaces'

export const NavOption: React.FC<IChildrenProps> = ({children}: IChildrenProps) => {
  return (
    <a href='#projects' className="text-[#58656F] tracking-widest font-semibold hover:scale-105">
      {children}
    </a>
  )
}
