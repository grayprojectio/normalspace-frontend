import React from 'react';
import classes from './EditResultTask.module.css';


function EditResultTask(props) {
    return (
        <div style={ {
            display: 'flex',
            flexDirection: 'column'
        } }>
            <span>Task 1</span>
            <span>
                The thing you spend the most time with every day
            </span>
            <div style={ {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px dashed #D9D9D9',
                height: '236px',
                marginTop: '12px'
            } }>
                <span>
                    <span style={{
                        fontStyle: 'italic',
                        textDecoration: 'underline'
                    }}>upload</span>
                    { ' ' }or drop files here
                </span>
            </div>
        </div>
    );
}

export default EditResultTask;