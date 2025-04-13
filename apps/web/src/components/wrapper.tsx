import { PropsWithChildren } from "react";

export const Wrapper = ({ children }: PropsWithChildren) => {

    return (
        <div className="bg-gradient-to-r from-blue-100 to-purple-100 flex justify-center items-center min-h-screen p-4">
            {children}
        </div>
    )

}