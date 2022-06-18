import * as Plot from "@observablehq/plot";
import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";
import utilStyles from "../styles/utils.module.css";

export default function Fitness() {
  const weightRef = useRef();
  const excerciseRef = useRef();
  const [data, setData] = useState();
  const xLabel = "Date";

  useEffect(() => {
    d3.csv("/fitness.csv", d3.autoType).then(setData);
  }, []);

  useEffect(() => {
    if (data === undefined) return;
    const dataset = data.slice(0, 10);
    const dataset2 = data.slice(0, 10);

    const weights = dataset.map((x) => x.Weight);
    const maxWeight = Math.max(...weights);
    const minWeight = Math.min(...weights);

    const chart1 = Plot.plot({
      marginRight: 100,
      y: {
        grid: true,
        domain: [minWeight - 1, maxWeight + 1],
      },
      marks: [
        // Weght
        Plot.line(dataset, {
          x: xLabel,
          y: "Weight",
          stroke: "red",
          strokeWidth: 3,
          marker: "circle",
        }),
        Plot.text(dataset.slice(0, 1), {
          x: xLabel,
          y: "Weight",
          text: [". Weight"],
          textAnchor: "start",
        }),
      ],
    });

    const chart2 = Plot.plot({
      marginRight: 100,
      y: {
        grid: true,
        domain: [0, 10],
      },
      marks: [
        // Weght
        Plot.line(dataset2, {
          x: xLabel,
          y: "PullUps",
          stroke: "red",
          strokeWidth: 3,
          marker: "circle",
        }),
        Plot.text(dataset2.slice(0, 1), {
          x: xLabel,
          y: "PullUps",
          text: [". Pull Ups"],
          textAnchor: "start",
        }),
      ],
    });

    weightRef.current.append(chart1);
    excerciseRef.current.append(chart2);
    return () => chart.remove();
  }, [data]);

  return (
    <>
      <h2 className={utilStyles.headingLg}>Fitness</h2>
      <p>
        <i>
          Can't see any charts? You might need to allow JavaScript on this page.
        </i>
      </p>
      <h3 className={utilStyles.headingLg}>Weight Chart</h3>
      <header className="App-header" ref={weightRef}></header>
      <h3 className={utilStyles.headingLg}>Activities to be charted</h3>

      <header className="App-header" ref={excerciseRef}></header>
      <ul>
        <li>Pull ups</li>
        <li>Push ups</li>
        <li>Squats</li>
        <li>Swimming</li>
        <li>VR</li>
        <li>Cycling</li>
      </ul>
    </>
  );
}
