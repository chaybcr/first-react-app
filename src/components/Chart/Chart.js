import ChartBar from "./ChartBar";
import styles from  "./Chart.module.css";

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(data=> data.value);
    const totalMaxvalue= Math.max(...dataPointValues);
  return (
    <div className={styles.chart}>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar 
        key={dataPoint.label}
        value={dataPoint.value}
        maxValue={totalMaxvalue}
        label={dataPoint.label} />
      ))}
    </div>
  );
};

export default Chart;
