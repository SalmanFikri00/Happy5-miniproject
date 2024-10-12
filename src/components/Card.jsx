import SubCard from "./SubCard"

const Card = () => {
  return (
    <div className=" border p-1 rounded-[4px] w-[306px]">
        <div className=" p-2">
            <h5 className="text-secondaryText text-[12px] leading-5">Q1 2019</h5>
            <h4 className=" text-sm mt-1 text-secondaryText font-semibold">January - March</h4>
            <div className=" mt-4 ">
                <SubCard />
            </div>
        </div>
    </div>
  )
}

export default Card
