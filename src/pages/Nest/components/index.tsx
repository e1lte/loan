import React, { useState, useEffect } from "react"
import echarts from "echarts"

const LineChart = () => {
    const [chartDom, setChartDom] = useState(null)

    useEffect(() => {
        if (!chartDom) return

        const myChart = echarts.init(chartDom)

        const option = {
            xAxis: {
                type: "category",
                data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            },
            yAxis: {
                type: "value",
            },
            series: [
                {
                    data: [150, 230, 224, 218, 135, 147, 260],
                    type: "line",
                },
            ],
        }

        myChart.setOption(option)
    }, [chartDom])

    return (
        <div
            ref={el => setChartDom(el)}
            style={{ width: "400px", height: "300px" }}
        ></div>
    )
}

export default LineChart
