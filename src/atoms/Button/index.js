const Button = ({label, borderRadius, color, syl}) => {

    return(
        <div className={`   w-full h-full ${borderRadius} ${color}`}>
        <a className={` flex justify-center  ${syl} `}>{label}</a>
      </div>
    )
}

export default Button;