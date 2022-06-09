import ProgressBar from 'react-bootstrap/ProgressBar'

export default function Languages () {
    return (
      <div>
        <p>Slovak</p> <ProgressBar now={80} label={`80%`} />
      </div>
    );
  }