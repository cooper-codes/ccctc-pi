import { memo } from "react";

interface ResultTextProps {
    text: string
}

export const ResultText = memo(({ text }: ResultTextProps) => {
    if (!text) return null

    return (
        <h4 className="mt-5 text-green-400 text-center">{text}</h4>
    )
})

