import React, { useCallback, useMemo, useState } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";

import Input from "./components/input";
import { Card } from "./components/card";
import { Button } from "./components/button";
import { Wrapper } from "./components/wrapper";
import validateInput from "./helpers/inputValidator";
import { ErrorText } from "./components/errorText";
import { ResultText } from "./components/resultText";
import { GetArea } from "./queries/circle";


const App = () => {
    const [value, setValue] = useState<string | number>('')
    const [resultText, setResultText] = useState<string>('')
    const [hasSubmitted, setHasSubmitted] = useState(false)

    const [isValid, errorMessage] = useMemo(() => validateInput(value as string), [value])

    const valueChangedHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
        // Reset ResultText when user changes input
        setResultText('')
        setHasSubmitted(false)
    }, [])

    const [query, { loading }] = useLazyQuery(GetArea)

    const onClickHandler = useCallback(async () => {
        const { data: { areaOfCircle }, error } = await query({
            variables: { input: { radius: parseFloat(value as string) } }
        })

        if (areaOfCircle) {
            setResultText(`The area is: ${areaOfCircle}`)
            setHasSubmitted(true)
        } else if (error) {
            console.warn(error.message)
        }
    }, [value])

    const onKeyDownHandler = useCallback((event: React.KeyboardEvent) => {
        if (event.key === 'Enter' && isValid) {
            onClickHandler()
        }
    }, [isValid])

    return (
        <Wrapper>
            <Card>
                <Input value={value} onChange={valueChangedHandler} onKeyDown={onKeyDownHandler} />
                <Button disabled={!isValid || loading || hasSubmitted} onClick={onClickHandler}>Submit</Button>
                <ErrorText text={errorMessage} />
                <ResultText text={resultText} />
            </Card>
        </Wrapper>
    )
}

export default App
