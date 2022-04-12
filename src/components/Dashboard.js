import React,{useState} from 'react'
import './Dashboard.css'
import ProjectList from './ProjectList';
import useCollection from '../hooks/useCollection';
import DashboardFilter from './DashboardFilter';
import useAuthContext from '../hooks/useAuthContext';

function Dashboard() {
  const { collections } = useCollection('projects');
  const { user } = useAuthContext();
  const [filter, setFilter] = useState('all')

  const changeFilter = (newFilter) => {
    setFilter(newFilter)
  }

  const projects = collections ? collections.filter(collection => {
    switch(filter) {
      case 'all':
        return true;
      case 'mine':
        let assignedToMe = false
        collection.assignedList.forEach(u => {
          if(user){
            if (u.id === user.uid) {
            assignedToMe = true
          }}
        })
        return assignedToMe
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
    </div>

  )
}

export default Dashboard