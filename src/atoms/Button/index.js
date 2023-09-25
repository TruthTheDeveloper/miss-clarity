const Button = ({label}) => {

    return(
        <div className='bg-pink text-[16px]  w-full h-full rounded-[50px]'>
        <a className='flex justify-center pt-1 text-text-white '>{label}</a>
      </div>
    )
}

export default Button;