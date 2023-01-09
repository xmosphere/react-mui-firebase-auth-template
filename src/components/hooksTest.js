import React, {useState} from "react";
import { Button } from "@mui/material";

function hooksTest() {
    const [count, setCount] = useState(4)
    return (
        <>
        <button>-</button>
        <span>0</span>
        <button>+</button>
        </>
    )
}
export default hooksTest;