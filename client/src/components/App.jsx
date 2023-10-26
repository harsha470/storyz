import { Switch } from "@headlessui/react";
import { useState } from "react";

const APP_NAME = import.meta.env.VITE_APP_NAME;

export default function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <div className="dark:bg-[#0f1217]">
        <div className="absolute right-3 top-3">
          <Switch
            checked={isDark}
            onChange={(check) => {
              check
                ? document.body.classList.add("dark")
                : document.body.classList.remove("dark");
              setIsDark(check);
            }}
            className={`${
              isDark
                ? "bg-gray-200"
                : "bg-gradient-to-r from-[#dcd1fa] to-[#bdfee4]"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Enable notifications</span>
            <span
              className={`${
                isDark
                  ? "translate-x-6 bg-[#0f1217]"
                  : "translate-x-1 bg-gradient-to-r from-[#ab87ff] to-[#3ce9a4]"
              } inline-block h-4 w-4 transform rounded-full transition `}
            />
          </Switch>
        </div>
        <div className="flex flex-col items-center justify-center h-screen dark:text-white ">
          <h1 className="mb-5 text-5xl font-bold ">
            Welcome to{" "}
            <span className="text-transparent bg-gradient-to-r from-[#ab87ff] to-[#3ce9a4] bg-clip-text">
              {APP_NAME}
            </span>
          </h1>
          <p>
            {APP_NAME} is a simple blog application that allows users to
            effortlessly share their stories and connect with their audience.
          </p>
        </div>
      </div>
    </>
  );
}
