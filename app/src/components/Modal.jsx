import React from 'react'


const Modal = ({ closeModal, children }) => {
    const closeicon = () => (
        <i onClick={closeModal} className="fas fa-times" style={{
            color: 'black',
            padding: '10px',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            border: 0,
            position: 'absolute',
            top: '0.3rem',
            right: '0.5rem',
        }}></i>
    );

    return (
        <div className="overlay">
            <div className="content">
                {closeicon()}
                {children}
            </div>
        </div>
    )
}

export default Modal