import { PropsWithChildren } from "react";


export const Button = ({ children, ...rest }: PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>) => {
    return <button
        className="enabled:bg-gradient-to-r enabled:from-blue-400 enabled:to-blue-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full transition duration-100 ease-in-out transition-transform enabled:hover:scale-102 cursor-pointer disabled:cursor-no-drop disabled:bg-gray-300"
        {...rest}>{children}
    </button>;
};
