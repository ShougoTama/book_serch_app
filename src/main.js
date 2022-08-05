import { Stack } from "@mui/material"
import { useState } from "react";
import Test, { UserUnko } from "./test";

const Main = () => {
    const {unko,setUnko} = useState(UserUnko)
    return (
    <>
    <Stack direction="row" spansing={2}>
    <div><p>{unko}</p></div>
    </Stack>
    </>
    )
}

export default Main;