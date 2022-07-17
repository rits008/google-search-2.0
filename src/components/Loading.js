import React from 'react';
import Loader from 'react-loader-spinner'
import {ScaleLoader} from 'react-spinners'


//loading={loading}
function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
    <ScaleLoader height={25} width={4} /> 
  </div>
  )
}

export default Loading;