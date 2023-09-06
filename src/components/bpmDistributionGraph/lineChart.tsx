"use client"
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import accessibility from "highcharts/modules/accessibility"
import HighchartsReact from "highcharts-react-official"
import Highcharts from "highcharts"
import { intermediateHistogramData, beginnerHistogramData, advancedHistogramData } from "./data";
import { Level } from "./bpmDistributionGraph";

accessibility(Highcharts);

type LineChartProps = {
    level: Level
}

export default function LineChart({level}: LineChartProps) {
    const t = useTranslations('Resources');
    const chartRef = useRef();
    const [chartOptions, setChartOptions] = useState({
        title: {
            text: null,
        },
        legend: {
            enabled: false,
        },
        xAxis: {
            type: 'number',
            labels: {
                format: `${t('dj.bpm.distribution.y')} {value:.0f}`,
            },
            title: {
                text: null
            },
        },
        yAxis: {
            labels: {
                format: '{value:.0f} BPM',
            },
            opposite: false,
            title: {
                text: null
            },
        },
        series: [
            {
                type: 'line',
                data: null,
            },
        ]
    });

    useEffect(() => {
        setChartOptions({
            series: [
                {
                    type: 'line',
                    data: beginnerHistogramData,
                    name: t(`dj.bpm.distribution.beginner`),
                    color: 'var(--color-primary)',
                    visible: level === Level.all || level === Level.beginner
                },
                {
                    type: 'line',
                    data: intermediateHistogramData,
                    name: t(`dj.bpm.distribution.intermediate`),
                    color: 'var(--color-secondary)',
                    visible: level === Level.all || level === Level.intermediate
                },
                {
                    type: 'line',
                    data: advancedHistogramData,
                    name: t(`dj.bpm.distribution.advanced`),
                    color: 'var(--color-dark)',
                    visible: level === Level.all || level === Level.advanced
                },
                
            ]
        } as any)
    }, [level])

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={chartOptions}
            constructorType="chart"
            ref={chartRef}
        />
    )
}