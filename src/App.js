import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  // State and setter functions for open and closing modal:
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const close = () => setModalIsOpen(false);
  const open = () => setModalIsOpen(true);

  const onClickHandler = () => {
    // If the modal is open, close it. otherwise, open it!
    modalIsOpen ? close() : open();
  };

  const text = `Reprehenderit atque autem quasi quis. Nobis repellat quis commodi aperiam est sit officiis. Eum et voluptates sit eos aliquam maiores. Quia asperiores enim est voluptatem libero necessitatibus magnam. Dolor error est asperiores suscipit eius consequuntur molestiae.…`;
  return (
    <div>
      {/* note this is a motion.button, not just a button */}
      <motion.button
        className="save-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClickHandler}
      >
        Launch Modal
      </motion.button>

      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {/* If the modal is open, render it */}
        {modalIsOpen && (
          <Modal modalOpen={modalIsOpen} text={text} handleClose={close} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
