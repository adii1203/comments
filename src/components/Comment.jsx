import icon_reply from '../assets/images/icon-reply.svg'
import icon_plus from '../assets/images/icon-plus.svg'
import icon_minus from '../assets/images/icon-minus.svg'
const Comment = ({data}) => {

    if(data.length){
        return(
            <div className='lg:w-[60rem] mx-auto'>
                {
                    data.map((item) => {
                        return(
                            <div key={item.id} className='p-7 font-Rubik bg-neutral-100 mb-7 rounded-lg'>
                                <div className=' flex flex-col-reverse sm:flex-row sm:gap-8  gap-5'>
                                    <div className=' flex items-center justify-between sm:block'>
                                        <div className='flex sm:flex-col items-center bg-neutral-200 justify-center  w-24 sm:w-12 gap-3 sm:px-4 py-3 rounded-xl'>
                                            <img src={icon_plus} alt="" className="cursor-pointer"/>
                                            <p className='text-primary-blue-200 text-md font-500'>{item.score}</p>
                                            <img src={icon_minus} alt="" className="cursor-pointer"/>
                                        </div>
                                        <div className=' sm:hidden flex items-center px-2 gap-1 cursor-pointer'>
                                            <img src={icon_reply} alt="" />
                                            <p className='text-primary-blue-200 font-500 capitalize'>reply</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        <div className='flex item-center justify-between'>
                                            <div className='flex items-center gap-5'>
                                                <img className='w-[34px]' src={require (`../assets/images/avatars/image-amyrobson.png`)} alt="" />
                                                <p className='text-neutral-500 font-700'>{item.user.username}</p>
                                                <p className='text-neutral-400'>{item.createdAt}</p>
                                            </div>
                                            <div className='sm:flex items-center px-2 gap-1 cursor-pointer hidden'>
                                                <img src={icon_reply} alt="" />
                                                <p className='text-primary-blue-200 font-500 capitalize'>reply</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className='text-neutral-400'>{item.content}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    else{
        return(
            <div>No Comment Yet</div>
        )
    }
}

export default Comment