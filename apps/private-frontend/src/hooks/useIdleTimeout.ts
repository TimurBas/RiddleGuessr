import { useEffect, useRef } from "react";

interface IdleTimeoutProps {
  idleTime: number;
  onIdle: () => void;
}

const IdleTimeout: React.FC<IdleTimeoutProps> = ({ idleTime, onIdle }) => {
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const resetTimer = () => {
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }
      idleTimerRef.current = setTimeout(() => onIdle(), idleTime);
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
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }
      document.removeEventListener("mousemove", handleUserActivity);
      document.removeEventListener("keydown", handleUserActivity);
      document.removeEventListener("mousedown", handleUserActivity);
      document.removeEventListener("touchstart", handleUserActivity);
    };
  }, [idleTime, onIdle]);

  return null; // No UI element for this component
};

export default IdleTimeout;
