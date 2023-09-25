const Button = ({label, borderRadius, color}) => {

    return(
        <div className={` text-[16px]  w-full h-full ${borderRadius} ${color}`}>
        <a className='flex justify-center pt-1  '>{label}</a>
      </div>
    )
}

export default Button;