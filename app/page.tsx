import React from 'react'
import dynamic from 'next/dynamic'

const Tab = dynamic(() => import('@/components/Tab'), { ssr: false })

function page() {
  return (
    <div>
      <Tab />
    </div>
  )
}

export default page