import { useEffect, useRef } from "react";

const Modal = function Modal({ open, children }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return (
    <dialog className="modal" ref={dialog}>
      {open ? children : null}
    </dialog>
  );
};

export default Modal;
