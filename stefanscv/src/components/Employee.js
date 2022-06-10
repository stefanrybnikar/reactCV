export default function Employee (props) {
  return (
    <div>
      <h2 align="left">{props.position}</h2>
      <h3 align="left">{props.name}</h3>
      <h4 align="left">{props.dates}</h4>
      <p align="left"> {props.text}</p>
    </div>
  );
}


