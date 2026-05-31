import { createContext, useContext, useState } from 'react'
import './modal.css'
import helpicon from '../assets/help.png'


//createContext lets you create a context that components can provide or read.
//Context lets the parent component make some information available to any component in the tree below it without passing it explicitly through props
const ModalContext = createContext();

// Provider to wrap 
export function ModalProvider({children}) {

    /* Default values */
    const [modal, setModal] = useState({isOpen: false, title: "", message: "", iconVisible: false, cmdVisable: false});

    /* Load the passed contents of the module */
    const loadModal = ({title, message, showIcon, showCmd}) => {
        setModal({isOpen: true, title, message, iconVisible: showIcon, cmdVisable: showCmd});
    };

    const closeModal = () => { setModal({isOpen: false, title: "", message: "", iconVisible: false, cmdVisable: false})};

    return(
        <>
        <ModalContext.Provider value={{modal, loadModal, closeModal}}>
            {children}
            <Modal />
        </ModalContext.Provider>
        </>
    );
}

//Modal UI
function Modal() {

    const {modal, loadModal, closeModal} = useModal();

    return(
        <>
        {/* Return if modal true */}
        {modal.isOpen && (

            <div className="modal">
                <div className="blurring" onClick={closeModal}></div>

                <div className="modal-content">
                    
                    {/* Graphic */}
                    {modal.iconVisible && (
                    <div className="help-modal-ico-wrapper">
                        <img className='help-modal-ico' src={helpicon}></img>
                    </div>
                    )}
                    
                    {modal.title && <h3>{modal.title}</h3>}
                    {modal.message && <p style={{whiteSpace: "pre-line"}}>{modal.message}</p>}

                    {modal.cmdVisable && (
                        <div className='command-pane'>
                            <p> <i>/timer hh mm ss</i> - sets a timer for the specified time</p>
                            <p> <i>/yout</i> - launch Youtube</p>
                            <p><i>/proton</i> - launch ProtonMail</p>
                            <p><i>/tuta</i> - launch Tuta Mail</p>
                            <p><i>/crono</i> - launch Cronometer</p>
                            <p><i>/trans</i> - launch Google Translate</p>
                            <p><i>/maps</i> - launch Google Maps</p>
                            <p><i></i></p>
                        </div>
                    )}
                        
                </div>
            </div>

        )}
        </>
    );
}

//Hook
export function useModal() { return useContext(ModalContext); }
