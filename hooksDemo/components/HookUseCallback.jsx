import React from 'react'

function HookUseCallback({msg}) {
    msg()
  return (
    <div>
      <h1>I'm child component</h1>
    </div>
  )
}

export default React.memo(HookUseCallback)
