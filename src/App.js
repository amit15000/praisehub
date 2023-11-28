import "./App.css";
import Testimonials from "./components/Testimonials";
import data from "./data";

function App() {
  console.log(data);
  return (
    <div className="flex flex-col w-[100vw] justify-center items-center bg-gray-200">
      <h1 className="text-green-600">Our Testimonials</h1>
      <div></div>
      <Testimonials reviews={data}></Testimonials>
    </div>
  );
}

export default App;
