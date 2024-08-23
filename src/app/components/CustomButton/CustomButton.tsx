import React from 'react'

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    buttonText:string,
}

const CustomButton:React.FC<CustomButtonProps> = ({buttonText,...props}) => {
  const defaultClasses = "flex items-center justify-center px-4 py-1 text-white  rounded-sm bg-eterationBlue active:bg-eterationBlueActive "
  const combinedClasses = `${defaultClasses} ${props.className}`
  return (
    <button
        className={combinedClasses}
        onClick={props.onClick}
        {...props}
        >
        {buttonText}
    </button>
  )
}

export default CustomButton