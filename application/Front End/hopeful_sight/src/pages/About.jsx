import { AboutUsInfo } from "../components/AboutUsInfo";
import kobykern from "../pages/AboutUsImages/kobykernheadshot.jpg";
import nate from "../pages/AboutUsImages/Nate.jpg";
import jacob from "../pages/AboutUsImages/Batman.jpeg";
import miguel from "../pages/AboutUsImages/cool-pic.jpg";
import ali from "../pages/AboutUsImages/ali.png";
import ethan from "../pages/AboutUsImages/imgA.jpg";
import zeke from "../pages/AboutUsImages/78.png";

export function AboutUs() {
  return (
    <>
      <div className="bg-blue-50 p-4">
        <div className="text-center text-5xl font-bold">
          <br />
          Hopeful Sight
        </div>
        <br />
        <br />
        <AboutUsInfo />

        <br />
        <br />
        <br />
        <div className="text-center text-4xl p-4 font-bold">Meet the Team</div>

        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md ">
            <img
              src={kobykern}
              alt="Koby Kern"
              className="rounded-tl-lg rounded-tr-lg w-full h-60 object-cover"
            />

            <div className="text-center p-3">
              <h2 className="text-2xl font-bold">Koby Kern</h2>
              <p className="mt-2">Team Leader</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md ">
            <img
              src={nate}
              alt="nate"
              className="rounded-tl-lg rounded-tr-lg w-full h-60 object-cover"
            />

            <div className="text-center p-3">
              <h2 className="text-2xl font-bold">Nathan Gabriel David</h2>
              <p className="mt-2">Scrum Master</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md ">
            <img
              src={miguel}
              alt="miguel"
              className="rounded-tl-lg rounded-tr-lg w-full h-60 object-cover"
            />

            <div className="text-center p-3">
              <h2 className="text-2xl font-bold">Miguel Maurer</h2>
              <p className="mt-2">Frontend Lead</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md ">
            <img
              src={ali}
              alt="ali"
              className="rounded-tl-lg rounded-tr-lg w-full h-60 object-cover"
            />

            <div className="text-center p-3">
              <h2 className="text-2xl font-bold">Ali Almusawi</h2>
              <p className="mt-2">Front End</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md ">
            <img
              src={jacob}
              alt="jacob"
              className="rounded-tl-lg rounded-tr-lg w-full h-60 object-cover"
            />

            <div className="text-center p-3">
              <h2 className="text-2xl font-bold">Jacob Vazquez</h2>
              <p className="mt-2">Backend Lead</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md ">
            <img
              src={zeke}
              alt="zeke"
              className="rounded-tl-lg rounded-tr-lg w-full h-60 object-cover"
            />

            <div className="text-center p-3">
              <h2 className="text-2xl font-bold">Miguel Melo</h2>
              <p className="mt-2">Back End</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md ">
            <img
              src={ethan}
              alt="ethan"
              className="rounded-tl-lg rounded-tr-lg w-full h-60 object-cover"
            />

            <div className="text-center p-3">
              <h2 className="text-2xl font-bold">Ethan Zheng</h2>
              <p className="mt-2">GitHub Master</p>
            </div>
          </div>
        </div>

        <br />
      </div>
    </>
  );
}
