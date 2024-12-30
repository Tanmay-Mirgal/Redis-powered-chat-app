import { Button } from '@/components/ui/button'
import React from 'react'

const AuthButtons = () => {
  return (
    <div className='flex flex-col flex-1 gap-3 md:flex-row relative z-50 mt-10'>
        <Button className='w-full' variant={'outline'}>Sign up</Button>
        <Button className='w-full' variant={'default'}>Login</Button>
      
    </div>
  )
}

export default AuthButtons
