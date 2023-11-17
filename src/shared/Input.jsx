import React from 'react'

export default function Input({id,title,type,name,changedata,value,cusstomclass,errors}) {
  return (
    <div className="mb-3">
 <label className="from-name" htmlFor={id}>{title}</label>
    <input type={type} name={name} className={`form-control  ${cusstomclass}`} id={id} value={value} onChange={changedata} />
    {errors[name] && <p className='text-danger'>{errors[name]}</p>}

  </div>
  )
}
