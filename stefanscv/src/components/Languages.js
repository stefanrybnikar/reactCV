import ProgressBar from 'react-bootstrap/ProgressBar';
import Stack from 'react-bootstrap/Stack';

export default function Languages() {
  return (
    <div>
      <Stack direction="horizontal" gap={2}>
        <p>Slovak</p>
        <ProgressBar now={80} label={`80%`} />
      </Stack>
    </div>
  );
}
