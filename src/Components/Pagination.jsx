import { Button } from '@chakra-ui/react'
import React from 'react'

const Pagination = ({total,page,pageHandler}) => {
  const arr=new Array(Math.ceil(total/10)).fill(0);
  return (
    <div>
      {
      arr.map((item,ind)=>
      <Button key={ind+1} ml='5px' variant='solid' isDisabled={page===ind+1} colorScheme='blue' onClick={()=>pageHandler(ind+1)}>{ind+1}</Button>
      )  
      }
    </div>
  )
}

export default Pagination