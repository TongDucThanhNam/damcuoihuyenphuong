import {Cell, PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer} from "recharts";

interface CountDownProps {
    chartData: any[]
    color: string
    total: number
}

export default function CountDown(
    {
        chartData,
        color,
        total
    } : CountDownProps
) {
    return (
        <ResponsiveContainer
            className="[&_.recharts-surface]:outline-none"
            height="100%"
            width="100%"
        >
            <RadialBarChart
                barSize={10}
                cx="50%"
                cy="50%"
                data={chartData}
                endAngle={-45}
                innerRadius={90}
                outerRadius={70}
                startAngle={225}
            >
                <PolarAngleAxis angleAxisId={0} domain={[0, total]} tick={false} type="number"/>
                <RadialBar
                    angleAxisId={0}
                    animationDuration={1000}
                    animationEasing="ease"
                    background={{
                        fill: "hsl(var(--nextui-default-100))",
                    }}
                    cornerRadius={12}
                    dataKey="value"
                >
                    {chartData.map((_: any, index: any) => (
                        <Cell
                            key={`cell-${index}`}
                            // fill={`hsl(var(--nextui-${color === "default" ? "foreground" : color}))`}
                            fill={"#6696ff"}

                        />
                    ))}
                </RadialBar>
                <g>
                    <text textAnchor="middle" x="50%" y="48%">
                        <tspan className="fill-foreground text-black font-bold text-xl" dy="-0.5em" x="50%">
                            {chartData?.[0].name}
                        </tspan>
                        <tspan className="fill-foreground font-semibold text-2xl" dy="1.5em" x="50%">
                            {(total)}
                        </tspan>
                    </text>
                </g>
            </RadialBarChart>
        </ResponsiveContainer>
    )
}