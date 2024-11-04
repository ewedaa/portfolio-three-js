import { Html, useProgress } from '@react-three/drei';
function CanvasLoader() {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <span className="canvas-loader" />
      <p
        style={{
          fontSize: 14,
          color: '#f1f1f1',
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress === 0 ? 'Loading...' : `${progress.toFixed(2)}%`}
      </p>
    </Html>
  );
}

export default CanvasLoader;
