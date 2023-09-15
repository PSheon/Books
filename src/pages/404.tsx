// ** Next Import
import Image from "next/image";
import Link from "next/link";

// ** Assets
import CuteFaceImg from "src/assets/images/pages/error/cute-face.png";

const Error404 = () => {
  return (
    <div className="flex flex-col bg-gray-100 h-screen justify-center py-24">
      <center className="m-auto">
        <Image src={CuteFaceImg} alt="cute face" width={225} height={250} />

        <div className=" tracking-widest mt-4">
          <span className="text-gray-500 text-6xl block">
            <span>4 0 4</span>
          </span>
          <span className="text-gray-500 text-xl">
            Sorry, We couldn't find what you are looking for!
          </span>
        </div>
      </center>
      <center className="mt-6">
        <Link
          href="/"
          className="text-gray-500 font-mono text-xl bg-gray-200 p-3 rounded-md hover:shadow-md"
        >
          Go back
        </Link>
      </center>
    </div>
  );
};

export default Error404;
