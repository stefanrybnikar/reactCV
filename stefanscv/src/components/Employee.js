export default function Employee (props) {
  return (
    <div>
      <h2>{props.position}</h2>
      <h3>{props.name}</h3>
      <h4>{props.dates}</h4>
      <p> {props.text}</p>
    </div>
  );
}


