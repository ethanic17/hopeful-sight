import aboutphoto from "../pages/AboutUsImages/kidwithglasses.jpg";

export function AboutUsInfo() {
  return (
    <div className="bg-white p-4 rounded-lg w-3/5 h-[700px] shadow-md mx-auto">
      <div>
        <img
          src={aboutphoto}
          alt="photo"
          className="object-cover w-full h-full rounded-lg bg-transparent"
        />
      </div>
      <br />
      <h1 className="text-2xl text-center font-semibold">
        Helping the world one pair at a time
      </h1>

      <hr className="border-t-2 my-4 w-1/2 mx-auto border-blue-500" />
      <h2 className="text-xl text-center">
        Hopeful Sight is a non-profit and nonpartisan organization that helps
        the less fortunate acquire life altering vision correcting glasses.
      </h2>
    </div>
  );
}
