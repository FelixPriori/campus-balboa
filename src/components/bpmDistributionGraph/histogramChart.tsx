"use client"
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import histogram from "highcharts/modules/histogram-bellcurve"
import accessibility from "highcharts/modules/accessibility"
import HighchartsReact from "highcharts-react-official"
import Highcharts from "highcharts"
import { Data, advancedHistogramData, beginnerHistogramData, intermediateHistogramData } from "./data";
import { Level } from "./bpmDistributionGraph";

histogram(Highcharts)
accessibility(Highcharts);

type HistogramChartProps = {
    level: Level
}

export default function HistogramChart({level}: HistogramChartProps) {
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
            min: 150
        },
        series: [
            {
                type: 'histogram',
                data: null,
            },
        ]
    });

    useEffect(() => {
        setChartOptions({
            series: [
                {
                    type: 'histogram',
                    data: beginnerHistogramData,
                    name: t(`dj.bpm.distribution.beginner`),
                    color: 'var(--color-primary)',
                    visible: level === Level.all || level === Level.beginner,
                    zIndex: 3,
                },
                {
                    type: 'histogram',
                    data: intermediateHistogramData,
                    name: t(`dj.bpm.distribution.intermediate`),
                    color: 'var(--color-secondary)',
                    visible: level === Level.all || level === Level.intermediate,
                    zIndex: 2,
                },
                {
                    type: 'histogram',
                    data: advancedHistogramData,
                    name: t(`dj.bpm.distribution.advanced`),
                    color: 'var(--color-dark)',
                    visible: level === Level.all || level === Level.advanced,
                    zIndex: 1,
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