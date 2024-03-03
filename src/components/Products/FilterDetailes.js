import { Button } from '@mui/material'
import React from 'react'

function FilterDetailes({setIsFilterOpen}) {
  return (
    <div>
        <Button variant='outlined' onClick={() => setIsFilterOpen(false)} size='small'>
            Close
        </Button>
    </div>
  )
}

export default FilterDetailes