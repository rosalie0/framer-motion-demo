import { motion } from "framer-motion";
import Backdrop from "../Backdrop";

// define the animation
const dropIn = {
  hidden: {
    opacity: 0,
    y: "-100vh", // start it above the viewport, before interacted with
  },
  visible: {
    opacity: 1,
    y: "0", // land it in the middle of our screen
    // Give it a 'springy' animation:
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25, // this controls the power/amplitude of the spring
      stiffness: 500, // this is literally the stiffness of the spring
    },
  },
  exit: {
    opacity: 0,
    y: "100vh", // drop beneath the viewport
  },
};

const Modal = ({ handleClose, text }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal orange-gradient"
        // variants is where you give it your animation object with multiple animation states
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {text}
        <button onClick={handleClose}>Close</button>
      </motion.div>
    </Backdrop>
  );
};
export default Modal;
