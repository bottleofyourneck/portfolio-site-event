import React from 'react'
import Button from '@mui/material/Button';
import "../assets/styles/Modal.scss"
import ReactDom from "react-dom"
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Modal({ onClose, open, children }: { onClose: any, open: any, children: any}) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-container">
        {children}
      </div>
    </>,
    document.getElementById("portal")!
  )
}
