import * as Plot from "@observablehq/plot";
import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Fitness() {
  const headerRef = useRef();
  const [data, setData] = useState();
  const xLabel = "Date";

  useEffect(() => {
    d3.csv("/fitness.csv", d3.autoType).then(setData);
  }, []);

  useEffect(() => {
    if (data === undefined) return;

    let maxWeight = data.map((x) => x.Weight);
    maxWeight = Math.max(...maxWeight);

    const chart = Plot.plot({
      marginRight: 100,
      y: {
        grid: true,
        domain: [0, maxWeight + 10],
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
        // Pushups
        Plot.line(data, {
          x: xLabel,
          y: "Pushups",
          stroke: "green",
          marker: "circle",
        }),
        Plot.text(data.slice(0, 1), {
          x: xLabel,
          y: "Pushups",
          text: [". Pushups"],
          textAnchor: "start",
        }),
        // Squats
        Plot.line(data, {
          x: xLabel,
          y: "Squats",
          stroke: "blue",
          marker: "circle",
        }),
        Plot.text(data.slice(0, 1), {
          x: xLabel,
          y: "Squats",
          text: [". Squats"],
          textAnchor: "start",
        }),
        // VR
        Plot.line(data, {
          x: xLabel,
          y: "VR",
          stroke: "purple",
          marker: "circle",
        }),
        Plot.text(data.slice(0, 1), {
          x: xLabel,
          y: "VR",
          text: [". VR"],
          textAnchor: "start",
        }),
        // Bicycle
        Plot.line(data, {
          x: xLabel,
          y: "Bicycling",
          stroke: "red",
          marker: "circle",
        }),
        Plot.text(data.slice(0, 1), {
          x: xLabel,
          y: "Bicycling",
          text: [". Bicycling"],
          textAnchor: "start",
        }),
      ],
    });

    headerRef.current.append(chart);
    return () => chart.remove();
  }, [data]);

  return (
    <Layout>
      <h2 className={utilStyles.headingLg}>Fitness</h2>
      <p>May, 2022</p>
      <header className="App-header" ref={headerRef}></header>
    </Layout>
  );
}
