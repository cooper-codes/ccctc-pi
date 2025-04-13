import React, { useCallback, useMemo, useState } from "react";

import Input from "./components/input";
import { Card } from "./components/card";
import { Button } from "./components/button";
import { Wrapper } from "./components/wrapper";
import validateInput from "./helpers/inputValidator";
import { ErrorText } from "./components/errorText";


const App = () => {
    const [value, setValue] = useState<string | number>('')

    const [isValid, errorMessage] = useMemo(() => validateInput(value as string), [value])

    const valueChangedHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }, [])

    const onClickHandler = useCallback(() => {

    }, [])

    return (
        <Wrapper>
            <Card>
                <Input value={value} onChange={valueChangedHandler} />
                <Button disabled={!isValid} onClick={onClickHandler}>Submit</Button>
                <ErrorText text={errorMessage} />
            </Card>
        </Wrapper>
    )
}

export default App
