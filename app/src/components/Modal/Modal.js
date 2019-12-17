import React from "react";
import "./modal.css";

function Modal(props) {
    return (
        <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-body text-center display-3">
                        {props.body}
                    </div>
                    <div className="modal-footer">
                        <button 
                            type="button" 
                            className="btn btn-secondary" 
                            data-dismiss="modal"
                            >
                                Close
                            </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal