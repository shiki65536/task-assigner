import React, { useState, useEffect } from 'react';
import useDocument from '../../hooks/useDocument';
import { useNavigate } from 'react-router-dom';

function ProjectComment({ setStore, user, id }) {
    const { comments } = useDocument(id);
    const navigate = useNavigate();

    const [boardMsg, setBoardMsg] = useState('');
    const [msgCommentor, setMsgCommentor] = useState({});

    const handleComment = (e) => {
        e.preventDefault();
        setStore('projects', id, msgCommentor, boardMsg);
        setBoardMsg('');
        navigate(`/project/${id}`);
    }

    useEffect(() => {
        if (user) {
            setMsgCommentor({ displayName: user.displayName, photoURL: user.photoURL, id: user.uid })
        }
    }, [user])

    return (
        <>
            <div className='comment-area'>
                <div className='project-area'>
                    <div className='page-title'>
                        <h4>Discussion Board</h4>
                        {typeof comments == 'undefined' && 'No Discussion yet.' }
                    </div>
                    <div className='board'>
                        {typeof comments !== 'undefined' &&
                            comments.map((c) => {
                                return (
                                    <li className='comment' key={c.commentor.id + c.msg}>
                                        <div className='author'>
                                            <img className='avatar' src={c.commentor.photoURL} alt={c.commentor.displayName} />
                                            <span>{c.commentor.displayName}</span>
                                            <span className='comment-date'>{c.time && new Date(c.time.seconds * 1000).toDateString()}</span>
                                        </div>
                                        <span className='message'>
                                            {c.msg}
                                        </span>
                                    </li>)
                            }).reverse()}
                    </div>
                </div>

                {user &&
                    <form className='comment-control' onSubmit={handleComment}>
                        <div className="page-title"><h4>Join Discussion</h4></div>
                        <label>
                            <span>Leave Message: </span>
                            <textarea
                                required
                                onChange={(e) => { setBoardMsg(e.target.value) }}
                                value={boardMsg}
                            ></textarea>
                        </label>
                        <button className='btn'>Discuss</button>

                    </form>
                }
            </div>

        </>

    )
}

export default ProjectComment