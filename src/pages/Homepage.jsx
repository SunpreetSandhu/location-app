import { Link } from "react-router-dom";
import AppNav from "../components/AppNav";
import PageNav from "../components/PageNav";
function Homepage() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h1>TravelTracer</h1>
      <Link to="/app">Go to the app</Link>
    </div>
  );
}

export default Homepage;
