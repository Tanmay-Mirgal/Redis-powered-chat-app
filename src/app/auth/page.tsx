"use client"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { Skeleton } from '@/components/ui/skeleton'
import Image from 'next/image'
import AuthButtons from './AuthButtons'

const page = () => {
    return (
        <div className="flex h-screen w-full">

            <div className="flex-1 flex flex-col overflow-hidden bg-[#651c2b] dark:bg-[#651c2b55] relative justify-center items-center ">
                {/* //left side */}


                <div className="flex flex-col gap-2 px-4 
                xl:ml-40 text-center md:text-start font-semibold ">
                    <img src="/redis-logo.svg" alt="" className='absolute -left-1/4 pointer-events-none select-none -z-1 opacity-25 -bottom-52 lg:scale-125 xl:scale-100 scale-[2]' />

                    <Image
                        src={'/logo.png'}
                        alt='Redistash logo '
                        width={763}
                        height={173}
                        className="mt-20 w-[420px] z-0 pointer-events-none select-none " />
                    <p className="text-2xl md:text-3xl text-balance z-10">
                        The <span className='bg-red-500 px-2 font-bold text-white '>ULTIMATE</span>chat app
                    </p>
                    <p className='text-2xl md:text-3xl text-balance z-10'>You <span className='bg-red-500 px-2 font-bold text-white'>NEED TO</span>build</p>

                    <AuthButtons />
                </div>
            </div>
            {/* Right  side */}
            <div className="flex-1 relative overflow-hidden justify-center items-center hidden md:flex">
                <Image
                    src={'/hero-right.png'}
                   fill
                    alt=""
                    className=' object-cover dark:opacity-60 opacity-90 pointer-events-none select-none h-full'
                />
            </div>

        </div>
    )
}

export default page
