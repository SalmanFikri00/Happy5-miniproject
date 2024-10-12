import weight from "../assets/weight.svg"
import iconMore from "../assets/icon-more.svg"

const SubCard = () => {
  return (
    <div className=" w-full border p-4 rounded-[4px]">
        <h6 className=" font-semibold text-sm text-primaryText w-full">Re-designed the zero-g doggie bags. No more spills!</h6>
        <div className=" w-full mt-7 flex justify-between items-center">
            <div className="flex gap-2 items-center">
                <img src={weight} alt="weight" width={16} />
                <p className=" text-secondaryText text-[12px]">64%</p>
            </div>
            <div className=" p-[2.5px]">
                <img src={iconMore} alt="more" width={16.5} />
            </div>
        </div>
    </div>
  )
}

export default SubCard
