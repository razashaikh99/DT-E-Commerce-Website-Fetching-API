import { useNavigate } from 'react-router-dom'
import ButtonLoader from './ButtonLoader'

export default function Button({ isDisabled = false, navigate, onClick, className, isBgColor = false, isColor = false, icon = false, ...props }) {


    return (
        <button
            onClick={onClick}
            disabled={isDisabled}
            type={props.type}
            className={`${className} ${isBgColor ? isBgColor : 'contact-gradient'} ${isColor ? isColor : 'text-white'} w-full font-semibold py-3 px-4 rounded-full transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer `}
        >
            {isDisabled ? <ButtonLoader /> :
                <>
                    {icon &&
                        <span>{icon}</span>
                    }
                    {props.text}
                </>
            }

        </button>

    )
}
