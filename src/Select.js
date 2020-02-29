import React from "react";
export default function Select(props) {
  return (
    <select value={props.value} onChange={props.onChange} name={props.name}>
      {props.data.map((o, i) => (
        <option key={i} value={o.value}>
          {o.name}
        </option>
      ))}
    </select>
  );
}
