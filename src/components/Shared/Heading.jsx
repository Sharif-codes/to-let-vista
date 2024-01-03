const Heading = ({ title, subtitle, center,type }) => {
    return (
      <div className={center ? 'text-center' : 'text-start'}>
        <div className='text-2xl font-bold'>{title}</div>
        <div className='font-light text-neutral-500 mt-2'>{subtitle},{type}</div>
      </div>
    )
  }
  
  export default Heading