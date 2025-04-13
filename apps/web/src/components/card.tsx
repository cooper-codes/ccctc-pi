import React, { PropsWithChildren } from "react";

export const Card = ({ children }: PropsWithChildren<any>) => {
    return (
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md min-h-60">
            {children}
        </div>
    )

} 