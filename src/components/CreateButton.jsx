import plusIcon from "../assets/plus-purple.svg"

const CreateButton = () => {
  return (
    <button className=" w-[145px] h-9 flex gap-2 p-2 items-center rounded-[8px]">
        <img src={plusIcon} alt="plus" width={16} />
        <p className=" text-sm text-primaryText ">Create new task</p>
    </button>
  )
}

export default CreateButton
