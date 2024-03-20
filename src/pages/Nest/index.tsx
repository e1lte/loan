import { request } from "@umijs/max"
import { Button } from "antd"
import React from "react"
import LineChart from "./components/index"

type Props = {}

const index = (props: Props) => {
    const GetEvent = async () => {
        const res = fetch("api/event")
        console.log(res)
    }

    return (
        <div>
            index
            <Button onClick={GetEvent}>click</Button>
            {/* <LineChart /> */}
        </div>
    )
}

export default index
