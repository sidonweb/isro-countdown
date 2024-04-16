import isro from '../assets/isro.png'
const Title =() => {
    return <div className='flex flex-col pb-7 items-center'>
        <img className='size-36 mt-10' src={isro} />
        <div className='text-white text-xl font-light'>Space and Beyond</div>
    </div>
}

export default Title;