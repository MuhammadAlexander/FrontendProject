const CardData= (props)=>{

const {card} = props

    return(
        <>
            {card.map((pic,index)=>{
                return(
                    <div>
                        <img src={`https://github.com/MuhammadAlexander/image-data/blob/main/Indotrading/${pic}.png?raw=true`} key={index} className="w-screen h-full object-cover" alt=""/>
                    </div>
                )

            })}
        </>
      
    )

}

export default CardData;