import React from 'react'
import dynamic from 'next/dynamic';

const Pranam = dynamic(() => import('../../components/pranamservice/Pranam'), {
  ssr: false,
});


const PranamPage = () => {
  return (
    <div>
        <Pranam/>
    </div>
  )
}

export default PranamPage