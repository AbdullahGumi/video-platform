
const CustomButton = ({ 
    text, 
    color,
    backgroundColor,
    borderRadius,
    icon,
    disabled,
    fontWeight,
    fontSize,
    width,
    height,
    handleClick,
    className,
    }) => {
    return (
        <button onClick={handleClick} className={`space-x-3 flex flex-row justify-center items-center ${className}`}
                style={{
                    fontSize: fontSize ? fontSize : '16px',
                    color: color ? color : '#F4FBF4',
                    backgroundColor: backgroundColor ? backgroundColor : '#403D50',
                    borderRadius: borderRadius ? borderRadius : '8px',
                    fontWeight: fontWeight ? fontWeight : '600',
                    width: width ? width : '196px',
                    height: height ? height : '50px',
                }} 
                disabled={disabled}>
            {text && <span>{text}</span> }{icon && <span>{icon}</span> }
        </button>
    )
}

export default CustomButton