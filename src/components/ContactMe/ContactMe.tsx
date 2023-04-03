import React from "react";

type Props = {};

const ContactMe = (props: Props) => {
  return (
    <div className="flex items-center">
      <div className="flex flex-col">
        <div className="flex flex-col items-center gap-6">
          <p className="text-Green">04. What's Next?</p>
          <p className="text-center text-6xl text-LightSlate font-bold">
            Get In Touch
          </p>
          <p className="text-lg text-center text-Slate font-bold max-w-2xl">
            Although I’m not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </p>
          <a
            href="mailto:adham.hassan7499@gmail.com"
            className="hover:cursor-pointer hover:text-Green bg-transparent border border-Green text-Green hover:bg-greenTint hover:border-Green transition duration-500 px-7 py-4 rounded-md mt-5"
          >
            Say Hello
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
