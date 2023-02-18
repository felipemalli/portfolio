
interface SliderProps {
  cardDataList: { 
    name: string
    image: string
   }[]
}

export const Slider: React.FC<SliderProps> = (cardDataList: SliderProps) => {

  // const [isAllowed, setIsAllowed] = useState<boolean>(false);
  
  console.log(cardDataList)

  return (
    <div className={`flex justify-center items-center gap-[0.938rem]`}>
      {/* {cardDataList.map((_e, _index):CardProps => <Card name={''} image={''} type={'project'}></Card>)} */}
    </div>
  )
}
