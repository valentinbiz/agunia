import { Outlet } from "react-router-dom";
import Directory from "../../Components/Directory/Directory.Component";

const Home = () => {
 
  return (
    <div>
      <Outlet />
      <Directory />
    </div>
  );
};

export default Home;
