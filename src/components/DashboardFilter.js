import { useState } from 'react'

const filterList = ['all', 'development', 'design', 'marketing', 'sales']

function DashboardFilter({changeFilter}) {
    const [currentFilter, setCurrentFilter] = useState('all')

    const handleClick = (newFilter) => {
        setCurrentFilter(newFilter)
        changeFilter(newFilter)
      }

  return (
    <div className='project-filter'>
    <nav>
      <p>Filter: </p>
      {filterList.map((f) => (        
        <button key={f}
          onClick={() => handleClick(f)}
          className={currentFilter === f ? 'active' : ''}
        >{f}</button>
      ))}
    </nav>
  </div>
  )
}

export default DashboardFilter