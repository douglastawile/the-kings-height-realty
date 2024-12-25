import { useEffect } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  useEffect(() => {
    document.title = `Contact Us | The Kings Height Realty`;

    return () => {
      document.title = `The Kings Height Realty`;
    };
  }, []);

  return (
    <div className="h-screen bg-gradient-to-r from-white to-gray-200 dark:bg-gradient-to-r dark:from-gray-900 dark:to-black">
      <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Contact Us
      </h1>

      <h3 className="my-2 text-2xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-slate-400">
        You can reach us for more enquiries:{" "}
      </h3>
      <div className="my-4">
        <article className="group block max-w-lg my-4 mx-2 sm:mx-auto rounded-lg shadow-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500 dark:bg-slate-700">
          <div className="flex items-center space-x-3">
            <div className="flex">
              <FaPhoneAlt className="mx-3 my-1 text-2xl dark:text-slate-300" />
              <h3 className="text-slate-900 text-xl group-hover:text-white text-sm font-bold dark:text-slate-300">
                Phone Call
              </h3>
              <p className="text-center mx-4 text-lg font-semibold dark:text-slate-300">
                Or
              </p>
              <FaWhatsapp className="mx-3 my-1 text-2xl dark:text-slate-300" />
              <h3 className="text-slate-900 text-xl group-hover:text-white text-sm font-bold dark:text-slate-300">
                WhatsApp
              </h3>
            </div>
          </div>
          <p className="text-slate-500 text-center font-semibold group-hover:text-white text-2xl dark:text-slate-400">
            0558105151
          </p>
        </article>

        <article className="group block max-w-lg my-4 mx-2 sm:mx-auto rounded-lg shadow-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500 dark:bg-slate-700">
          <div className="flex items-center space-x-3">
            <div className="flex">
              <MdEmail className="mx-3 my-1 text-2xl dark:text-slate-300" />
              <h3 className="text-slate-900 text-xl group-hover:text-white text-sm font-bold dark:text-slate-300">
                Email Address
              </h3>
            </div>
          </div>
          <a
            href="mailto:thekingsheightrealty@gmail.com"
            className="text-slate-500 text-center font-semibold group-hover:text-white text-2xl dark:text-slate-400 hover:underline"
          >
            thekingsheightrealty@gmail.com
          </a>
        </article>
      </div>
    </div>
  );
};

export default Contact;
