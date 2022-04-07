import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Create.css';
import useFirestore from '../hooks/useFirestore';
import Select from 'react-select'
import useCollection from '../hooks/useCollection';
import useAuthContext from '../hooks/useAuthContext';


function Create() {

    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('')
    const [dueDate, setDueDate] = useState('');
    const [category, setCategory] = useState('');
    const { addStore } = useFirestore();
    const { collections } = useCollection('users');
    const { user} = useAuthContext();
    const [createdBy, setCreatedBy]= useState({})
    const [members, setMembers] = useState([]);
    const [assignList, setAssignList] = useState([])
    const navigate = useNavigate();

    const categories = [
        { value: 'development', label: 'Development' },
        { value: 'design', label: 'Design' },
        { value: 'sales', label: 'Sales' },
        { value: 'marketing', label: 'Marketing' },
      ]

    const handleSubmit = (e) => {
        e.preventDefault();
        addStore(title, detail, dueDate, createdBy, category, assignedList);
        navigate('/');
    }
    const assignedList = assignList.map(u => {
        return { 
          displayName: u.value.displayName, 
          photoURL: u.value.photoURL,
          id: u.value.id
        }
      })

    useEffect (()=>{
        if(user){
            setCreatedBy({displayName: user.displayName,photoURL: user.photoURL, id: user.uid})
        }
    },[user])

    useEffect(()=>{       
        setMembers(collections.map( user=>  {
            return {value:{...user, id: user.id}, label: user.displayName}
        }));
    }, [collections])

    return (
        <div className='create'>
            <section className='section'>
                <div className='page-title'>
                    <h3>New Project</h3>
                </div>
                <div className='main'>
                    <form className='form-control' onSubmit={handleSubmit}>
                        <label>
                            <span>Project Name:</span>
                            <input
                                required
                                type='text'
                                onChange={(e) => { setTitle(e.target.value) }}
                                value={title}
                            />
                        </label>
                        <label>
                            <span>Project Details:</span>
                            <textarea
                                required
                                onChange={(e) => { setDetail(e.target.value) }}
                                value={detail}
                            ></textarea>
                        </label>
                        <label>
                            <span>Due Date:</span>
                            <input
                                required
                                type='date'
                                onChange={(e) => { setDueDate(e.target.value) }}
                                value={dueDate}
                            />
                        </label>
                        <label>
                            <span>Category:</span>
                            <Select 
                            onChange={(option)=>setCategory(option.value)}
                            options={categories} 
                            />
                        </label>
                        <label>
                            <span>Assign to:</span>
                            <Select 
                            onChange={(option)=>setAssignList(option)}
                            options={members} 
                            isMulti
                            />

                        </label>

                        <button className='btn'>Add Project</button>

                    </form>
                </div>

            </section>
        </div>
    )
}

export default Create