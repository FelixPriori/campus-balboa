import accessibility from "highcharts/modules/accessibility"
import Highcharts from "highcharts"
import LineChart from './lineChart';
import HistogramChart from './histogramChart';
import styles from './bpmDistributionGraph.module.scss'
import Legend from './legend';

accessibility(Highcharts);

export enum Level {
    all = 'all',
    beginner = 'beginner',
    intermediate = 'intermediate',
    advanced = 'advanced'
}

type BpmDistributionGraphProps = {
    level: Level
}

export default function BpmDistributionGraph({level}: BpmDistributionGraphProps) {
    return (
        <div className={styles.distribution}>
            <Legend />
            <LineChart level={level} />
            <Legend />
            <HistogramChart level={level} />
        </div>
    );
}