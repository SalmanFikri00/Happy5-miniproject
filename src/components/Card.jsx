import CreateButton from "./CreateButton"
import SubCard from "./SubCard"

const Card = ({title, periode, dataSubCard}) => {
  return (
    <div className=" border border-[#F2F2F4] borde p-1 rounded-[4px] w-[306px]">
        <div className=" p-2">
            <h5 className="text-secondaryText text-xs">{title}</h5>
            <h4 className=" text-sm mt-[4px] text-secondaryText font-semibold">{periode}</h4>
            <div className=" mt-4 flex flex-col gap-3">
                {
                    dataSubCard.length !== 0? (
                        dataSubCard.map( (data, index) => (
                            <SubCard subTitle={data.subTitle} passed={data.passed} key={index} />
                        ))
                    ) : (
                        <p className="mt-2 text-sm leading-6 text-offText">No Task Available</p>
                    )
                }
            </div>
        </div>
        <div>
            <CreateButton />
        </div>
    </div>
  )
}

export default Card
