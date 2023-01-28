import { motion } from "framer-motion";

function App() {
  const onClickHandler = () => {
    //
  };
  return (
    <div>
      {/* note this is a motion.button, not just a button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClickHandler}
        className="save-button"
      >
        Launch Modal
      </motion.button>
    </div>
  );
}

export default App;
