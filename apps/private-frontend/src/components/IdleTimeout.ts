import { useEffect, useRef } from "react";

const IdleTimeout = ({ idleTime, onIdle }) => {
  const idleTimerRef = useRef(null);

  useEffect(() => {
    const resetTimer = () => {
      clearTimeout(idleTimerRef.current);
      idleTimerRef.current = setTimeout(onIdle, idleTime);
    };

    const handleUserActivity = () => {
      resetTimer();
    };

    // Attach event listeners to relevant user activity events
    document.addEventListener("mousemove", handleUserActivity);
    document.addEventListener("keydown", handleUserActivity);
    document.addEventListener("mousedown", handleUserActivity);
    document.addEventListener("touchstart", handleUserActivity);

    resetTimer(); // Start the initial timer

    return () => {
      clearTimeout(idleTimerRef.current);
      document.removeEventListener("mousemove", handleUserActivity);
      document.removeEventListener("keydown", handleUserActivity);
      document.removeEventListener("mousedown", handleUserActivity);
      document.removeEventListener("touchstart", handleUserActivity);
    };
  }, [idleTime, onIdle]);

  return null; // No UI element for this component
};

export default IdleTimeout;
