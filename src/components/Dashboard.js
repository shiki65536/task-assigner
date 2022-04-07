import React,{useState} from 'react'
import './Dashboard.css'
import ProjectList from './ProjectList';
import useCollection from '../hooks/useCollection';
import DashboardFilter from './DashboardFilter';

function Dashboard() {
  const { collections } = useCollection('projects');
  const [filter, setFilter] = useState('all')

  const changeFilter = (newFilter) => {
    setFilter(newFilter)
  }

  const projects = collections ? collections.filter(collection => {
    switch(filter) {
      case 'all':
        return true;
      case 'development':
      case 'design':
      case 'sales':
      case 'marketing':
        return collection.category === filter;
      default:
        return true;
    }

  }) : null;



  return (

      <div className='dashboard'>
      {collections && <DashboardFilter changeFilter={changeFilter} />}
      <div className='projects'>
      {!projects ? null :
       projects.map(project => <ProjectList key={project.id} project={project} />)}          
        </div>



      {/* 
        {!collections ? null :
          collections.map(collection => <ProjectList key={collection.id} project={collection} />)}
      */}
    </div>

  )
}

export default Dashboard