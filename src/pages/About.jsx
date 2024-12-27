// import { useEffect } from "react";
// import { Card } from "flowbite-react";
// import { Link } from "react-router-dom";
// import { FaFacebookF, FaInstagramSquare } from "react-icons/fa";

// const About = () => {
//   useEffect(() => {
//     document.title = `About Me | The Kings Height Realty`;

//     return () => {
//       document.title = `The Kings Height Realty`;
//     };
//   }, []);

//   return (
//     <main className=" h-screen dark:bg-slate-900">
//       <header>
//         <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
//           About Me
//         </h1>
//       </header>

//       <section>
//         <Card className="max-w-xl mx-4 sm:mx-auto mt-8 mb-16">
//           <div className="flex flex-col items-center pb-10">
//             <img
//               src="/profile.jpg"
//               height={200}
//               width={200}
//               alt="Portrait of Abubakar Yussif"
//               className="mb-3 rounded-full shadow-lg"
//               loading="lazy"
//             />
//             <h2 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
//               Abubakar Yussif
//             </h2>
//             <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
//               Mr. Abubakar Yussif is the CEO of The Kings Height Realty and a
//               Property Consultant with over three years of experience.
//             </p>

//             <h3 className="mt-2 text-lg text-slate-600 font-semibold dark:text-slate-400">
//               Follow me on social media:
//             </h3>
//             <div className="mt-4 flex space-x-3 lg:mt-6">
//               <Link
//                 to="https://www.facebook.com/profile.php?id=100066314719313"
//                 target="_blank"
//                 aria-label="Visit Abubakar Yussif's Facebook profile"
//                 className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
//               >
//                 <FaFacebookF className="mx-2 text-lg" />
//                 Facebook
//               </Link>
//               <Link
//                 to="https://www.instagram.com/the_kings_height.realty?igsh=YzljYTk1ODg3Zg=="
//                 target="_blank"
//                 aria-label="Visit Abubakar Yussif's Instagram profile"
//                 className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
//               >
//                 <FaInstagramSquare className="mx-2 text-lg" />
//                 Instagram
//               </Link>
//             </div>
//           </div>
//         </Card>
//       </section>
//     </main>
//   );
// };

// export default About;

import { useEffect } from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagramSquare } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    document.title = `About Me | The Kings Height Realty`;

    return () => {
      document.title = `The Kings Height Realty`;
    };
  }, []);

  return (
    <main className="h-screen">
      <header>
        <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          About Me
        </h1>
      </header>

      <section>
        <Card className="max-w-xl mx-4 sm:mx-auto mt-8 mb-16 bg-slate-200 dark:bg-slate-800">
          <div className="flex flex-col items-center pb-10">
            <img
              src="/profile.jpg"
              height={200}
              width={200}
              alt="Portrait of Abubakar Yussif"
              className="mb-3 rounded-full shadow-lg"
              loading="lazy"
            />
            <h2 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Abubakar Yussif
            </h2>
            <p className="text-md text-gray-600 dark:text-gray-400 mb-4">
              Mr. Abubakar Yussif is the CEO of The Kings Height Realty and a
              Property Consultant with over three years of experience.
            </p>

            <h3 className="mt-2 text-lg text-slate-600 font-semibold dark:text-slate-400">
              Follow me on social media:
            </h3>
            <div className="mt-4 flex space-x-3 lg:mt-6">
              <Link
                to="https://www.facebook.com/profile.php?id=100066314719313"
                target="_blank"
                aria-label="Visit Abubakar Yussif's Facebook profile"
                className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
              >
                <FaFacebookF className="mx-2 text-lg" />
                Facebook
              </Link>
              <Link
                to="https://www.instagram.com/the_kings_height.realty?igsh=YzljYTk1ODg3Zg=="
                target="_blank"
                aria-label="Visit Abubakar Yussif's Instagram profile"
                className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
              >
                <FaInstagramSquare className="mx-2 text-lg" />
                Instagram
              </Link>
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
};

export default About;
