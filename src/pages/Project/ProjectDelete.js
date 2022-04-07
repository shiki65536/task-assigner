import React from 'react'

function ProjectDelete({handleDelete}) {
    return (
        <div className='del-modal hide' id='del-moal'>
            <div className='del-modal-main'>
                <h4>Do you really want to delete this project?</h4>
            </div>
            <div className='del-modal-footer'>
                <button className='btn' onClick={() => document.getElementById('del-moal').classList.add('hide')}>NO</button>
                <button className='btn' onClick={handleDelete}>YES</button>
            </div>

        </div>
    )
}

export default ProjectDelete