import React from 'react'
import useDocument from '../../hooks/useDocument';
import { useNavigate } from 'react-router-dom';
import { FaRegCalendarPlus, FaRegCalendarTimes, FaUserEdit, FaUserFriends, FaRegTrashAlt } from 'react-icons/fa';
import ProjectDelete from './ProjectDelete';


function ProjectDetail({ delStore, user, id }) {
    const { title, detail, createdBy, createdAt, assignedList, category, dueDate } = useDocument(id);
    const navigate = useNavigate();

    const handleDelete = (e) => {
        e.preventDefault();
        delStore('projects', id);
        navigate('/');
    }

    return (
        <div className='project-area'>
            <div className='project-header'>
                <div className='info'>
                    <div className='title'><h3>{title}</h3></div>
                    <div className='category'>{category} </div>
                </div>
                <div className='timeline'>
                    <span><FaRegCalendarPlus /> {createdAt && new Date(createdAt.seconds * 1000).toLocaleDateString().replaceAll('/', '-')}</span>
                    <span><FaRegCalendarTimes /> {dueDate && dueDate.replaceAll('-0', '-')}</span>
                    <span><FaUserEdit /> {createdBy && createdBy.displayName}</span>

                </div>
            </div>
            <div className='project-main'>
                {detail}
            </div>
            <div className='project-footer'>
                
                <div className='member'><FaUserFriends /> {assignedList && assignedList.map(member => {
                    return <img className='avatar' key={member.id} src={member.photoURL} alt={member.displayNmae} />
                })}
                </div>
            </div>
            {createdBy && user && createdBy.id === user.uid && <div className='edit-panel'> <button onClick={() => document.getElementById('del-moal').classList.remove('hide')}><FaRegTrashAlt /></button></div>}

          

            <ProjectDelete handleDelete={handleDelete} />

        </div>

    )
}

export default ProjectDetail;

