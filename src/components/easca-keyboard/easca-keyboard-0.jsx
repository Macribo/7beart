

import React from 'react';
import './easca-keyboard.css';
import './easca-keyboard.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import useState from 'react-bootstrap/Modal';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import { Link } from 'react-router-dom';




export function Easca0() {
	// const [show, setShow] = useState(false);
  
	const handleClose = () => {} //setShow(false);
	const handleShow = () =>{} //setShow(true);
  
	return (
	  <div>
		<Button variant="primary" onClick={handleShow}>
		  easca
		</Button>
  
		<Modal
		 onHide={handleClose}>
		  <Modal.Header closeButton>
			<Modal.Title>Modal heading</Modal.Title>
		  </Modal.Header>
		  <Modal.Body>

		  //   just fada mode
			  <div id="fada-mode" className="">
				<div className="btn-group btn-group-lg" id="e-line" role="group" aria-label="...">					
				  <button type="button"  className="btn-right btn btn-outline-dark">é</button>
				  <button type="button"  className="btn-left btn btn-outline-dark">ꞃ</button>
				  <button type="button"  className="btn-right btn btn-outline-dark">ṫ</button>
				  <button type="button"  className="btn btn-left btn-outline-dark">ú</button>
				  <button type="button"  className="btn-right btn btn-outline-dark">í</button>
				  <button type="button"  className="btn btn-left btn-outline-dark">ó</button>
				  <button type="button"  className="btn-right btn btn-outline-dark">ṗ</button>
				</div>
				<div className="btn-group btn-group-lg" id="a-line" role="group" aria-label="...">					
				  <button type="button" className="btn-left btn btn-outline-dark">á</button>
				  <button type="button" className="btn-right btn btn-outline-dark">ṡ</button>
				  <button type="button"  className="btn-left btn btn-outline-dark">ḋ</button>
				  <button type="button"  className="btn-right btn btn-outline-dark">ḟ</button>
				  <button type="button"  className="btn-left btn btn-outline-dark">ġ</button>
				  <button type="button"  className="btn-right btn btn-outline-dark" />
				  <button type="button"  className="btn-left btn btn-outline-dark" />
				</div>
				<div className="btn-group btn-group-lg" id="c-line" role="group" aria-label="...">					
				  <button type="button"  className="btn-right btn btn-outline-dark">ċ</button>
				  <button type="button"  className="btn-left btn btn-outline-dark">ḃ</button>
				  <button type="button"  className="btn-right btn btn-outline-dark" />			<button type="button"  className="btn-left btn btn-outline-dark">ṁ</button>
				  <button type="button"  className="btn-right btn btn-outline-dark" />
				  <button type="button"  className="btn-left btn btn-outline-dark" />
				  <button type="button"  className="btn-right btn btn-outline-dark">7</button>
				</div>
				<div className="btn-group btn-group-lg" id="shift-line" role="group" aria-label="...">					
				  <button type="button" id="undo" className="btn-right btn btn-outline-dark">
					<i className="fa fa-undo" />
				  </button>
				  <button type="button" id="fada" className="btn-left btn btn-outline-dark">Ᵹ</button>
				  <button type="button" className="space btn btn-outline-dark"> </button>
				  <button type="button" id="copy" data-clipboard-target="#output" className="btn-left btn btn-outline-dark">													<i className="fa fa-copy" />
				  </button>
				  <button type="button" className="btn-right btn btn-outline-dark"><i className="fa fa-arrow-right" /></button>
				</div>
			  </div>
	


		  </Modal.Body>
		  <Modal.Footer>
			<Button variant="secondary" onClick={handleClose}>
			  Close
			</Button>
			<Button variant="primary" onClick={handleClose}>
			  Save Changes
			</Button>
		  </Modal.Footer>
		</Modal>
	  </div>
	);
  }
  




// export class Easca0 extends React.Component {
// 	constructor() {
// 	  super();
// 	  this.state = {};
// 	}
	
	

