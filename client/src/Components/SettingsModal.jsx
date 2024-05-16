const SettingsModal = ({ visibility=false }) => {
  return (
    <div className={`w-[200px] h-[200px] bg-white/30 rounded-2xl absolute z-2` + (visibility? "hidden" : "")}></div>
  )
}

export default SettingsModal;