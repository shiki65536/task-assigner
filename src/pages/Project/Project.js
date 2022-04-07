import React from 'react'
import './Project.css'
import { useParams } from 'react-router-dom';
import useAuthContext from '../../hooks/useAuthContext';
import useFirestore from '../../hooks/useFirestore';
import ProjectDetail from './ProjectDetail';
import ProjectComment from './ProjectComment';

function Project() {
  const { id } = useParams();
  const { user } = useAuthContext();
  const { delStore, updateStore } = useFirestore();

  return (
    <section className='section'>
      <div className='section-center'>
        <div className="project">
        <ProjectDetail delStore={delStore} user={user} id={id} />
        <ProjectComment setStore={updateStore} user={user} id={id}/>
        </div>
      </div>
    </section>
  )
}


export default Project