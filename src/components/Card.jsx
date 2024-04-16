const Card = ({count, title}) => {
    return <div class="flex justify-center items-center h-32">
        <div class=" bg-opacity-30 w-full h-full text-center border bg-gray-950 border-gray-100 flex flex-col text-gray-200 font-light text-2xl backdrop-blur-sm rounded-lg p-8">
            <div>{count}</div>
            <div>{title}</div>
        </div>
    </div>

}

export default Card