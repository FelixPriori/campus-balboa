
export type BpmRangeProps = {
    min: number
    max: number
    name: string
    selected?: boolean
}

export const ranges: BpmRangeProps[] = [
    {
        min: 40,
        max: 100,
        name: 'slowBal'
    },
    {
        min: 100,
        max: 150,
        name: 'awkwardRange'
    },
    {
        min: 150,
        max: 170,
        name: 'beginnerClass'
    },
    {
        min: 170,
        max: 220,
        name: 'bulk'
    },
    {
        min: 180,
        max: 210,
        name: 'comfortableArea'
    },
    {
        min: 190,
        max: 205,
        name: 'sweetSpot'
    },
    {
        min: 210,
        max: 230,
        name: 'competitionRange'
    },
    {
        min: 220,
        max: 350,
        name: 'fastTempo',
    },
]