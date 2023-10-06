import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  return null;
};

export default ScrollToTop;
