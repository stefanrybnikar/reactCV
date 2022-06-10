export default function Heading(props) {
  const color = '#0582ca';
  return (
      <div>
          <h2 style={{ color: color }} align="left">{props.label}</h2>
      

        
      <hr style={{
          color: color,
          backgroundColor: color,
          height: 5,
        }}
      />

    </div>
  );
}
