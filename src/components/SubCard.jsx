import weight from "../assets/weight.svg"
import iconMore from "../assets/icon-more.svg"

const SubCard = ({subTitle, passed}) => {
  return (
    <div className=" w-full border border-[#E4E4E8] p-4 rounded-[4px]">
        <h6 className=" font-semibold text-sm text-primaryText w-full">{subTitle}</h6>
        <div className=" w-full mt-7 flex justify-between items-center">
            <div className="flex gap-2 items-center">
                <img src={weight} alt="weight" width={16} />
                <p className=" text-secondaryText text-[12px] leading-4">{passed}</p>
            </div>
            <div className="">
                <img src={iconMore} alt="more" width={16.5} />
            </div>
        </div>
    </div>
  )
}

export default SubCard
