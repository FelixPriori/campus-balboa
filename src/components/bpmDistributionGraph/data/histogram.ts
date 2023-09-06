import { beginnerData, advancedData, intermediateData } from "."

export const beginnerHistogramData = beginnerData.map((d) => d.y)

export const intermediateHistogramData = intermediateData.map((d) => d.y)

export const advancedHistogramData = advancedData.map((d) => d.y)