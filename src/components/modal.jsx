import { useEffect, useState, useRef } from 'react'
import './modal.css'
import helpicon from '../assets/help.png'

export default function modal() {

    /* Hide on launch */
    const [modal, setModal] = useState(false);

    const toggleModal = () => { setModal(!modal); }

    return(
        <>
        <button className="help" onClick={toggleModal}>
            <img src={helpicon}></img>
        </button>
        
        {/* Return if modal true */}
        {modal && (

            <div className="modal">
                <div className="blurring" onClick={toggleModal}></div>

                <div className="modal-content">
                    <div className="help-modal-ico-wrapper">
                        <img className='help-modal-ico' src={helpicon}></img>
                    </div>
                    
                    <h3>Information</h3>
                    <p>This is a poly-search page allowing the user to run searches across a multitude of different search engines all from one location.</p>
                    <p>Click the button beneath the search bar to swtich search engines before typing your query into the search box and pressing Enter.</p>
                    <p>Several commands - deliniated by the '/' symbol - are also recognized by the search bar, some of which are listed below:</p>

                    <div className='command-pane'>
                        <p> <i>/timer hh mm ss</i> - sets a timer for the specified time</p>
                        <p> <i>/youtube</i> - launch Youtube</p>
                        <p><i>/proton</i> - launch ProtonMail</p>
                        <p><i>/tuta</i> - launch Tuta Mail</p>
                        <p><i></i></p>
                    </div>
                        
                </div>
            </div>

        )}
        </>
    );


}