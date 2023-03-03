import React from 'react';
import classes from './FilledCell.module.css';
import SmallButton from '../../button/small-button/SmallButton';
import Modal from '../../modal/Modal';
import EditResultTask from './modal-content/EditResultTask';

function FilledCell({ thing, funcShowModal, modalVisible, hover, ...props }) {

    const editThing = () => {
        funcShowModal(true);
    };

    return (
        <>
            <div className={ classes.box + ' ' + (modalVisible || hover ? classes.box_hover : '') }>
                <img
                    draggable={ 'false' }
                    style={ { objectFit: 'contain' } }
                    alt="?"
                    src={ thing.photoUrl }
                />
                <div className={ classes.btn_edit }>
                    <SmallButton onClick={ () => editThing() } value={ 'edit' }/>
                </div>
            </div>

            { modalVisible &&
                <Modal setVisible={ funcShowModal }>
                    <EditResultTask/>
                </Modal>
            }
        </>
    );
}

export default FilledCell;