import * as Plot from "@observablehq/plot";
import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";
import utilStyles from "../styles/utils.module.css";

export default function Fitness() {
  const weightRef = useRef();
  const headerRef = useRef();
  const [data, setData] = useState();
  const xLabel = "Date";

  useEffect(() => {
    d3.csv("/fitness.csv", d3.autoType).then(setData);
  }, []);

  useEffect(() => {
    if (data === undefined) return;

    const weights = data.map((x) => x.Weight);
    const maxWeight = Math.max(...weights);
    const minWeight = Math.min(...weights);

    const chart = Plot.plot({
      marginRight: 100,
      y: {
        grid: true,
        domain: [minWeight - 1, maxWeight + 1],
      },
      marks: [
        // Weght
        Plot.line(data, {
          x: xLabel,
          y: "Weight",
          stroke: "red",
          strokeWidth: 3,
          marker: "circle",
        }),
        Plot.text(data.slice(0, 1), {
          x: xLabel,
          y: "Weight",
          text: [". Weight"],
          textAnchor: "start",
        }),
      ],
    });

    weightRef.current.append(chart);
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
