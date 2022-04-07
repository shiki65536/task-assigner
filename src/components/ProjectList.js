import React from 'react'
import './ProjectList.css';
import { FaRegClock, FaRegComments, FaRegUserCircle, FaPaperclip } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function ProjectList({ project }) {
  const { title, detail, dueDate, createdBy, category, assignedList, id, comments } = project;

  return (
    <div className='list'>
      <section className='section'>
        <div className='section-center'>
          <Link to={`/project/${id}`}>
            <div className='project-list'>
              <div className='list-header'>
               
                <h4>{title}</h4>
                <span className='category'>{category}</span>
              </div>
  

              <div className='list-footer'>
                <div className='info'><span><FaRegClock /> {dueDate}</span>
              
                  <span><FaRegComments /> {comments? comments.length : '0'}</span>

                  <span><FaRegUserCircle /> {assignedList &&
                  assignedList.length}</span>
                </div>



                {createdBy && <img className='avatar' src={createdBy.photoURL} alt={createdBy.displayName} /> }


              </div>
              {/* {assignedList &&
                  assignedList.map((member) => { return <div className='assgnList' key={member.id}><img className='avatar' src={member.photoURL} alt={member.displayName} />  </div> })
                } */}
            </div>
          </Link>

        </div>
      </section>



    </div>
  )
}

export default ProjectList