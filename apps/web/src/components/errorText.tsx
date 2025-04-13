import { memo } from "react";

interface ErrorTextProps {
    text: string
}

export const ErrorText = memo(({ text }: ErrorTextProps) => {
    if (!text) return null

    return (
        <h4 className="mt-5 text-red-400 text-center">{text}</h4>
    )
})

