import ReactMapGL from "react-map-gl";
import "./App.css";

function App() {
  const key = import.meta.env.VITE_MAPBOX;

  return (
    <>
      <ReactMapGL
        mapboxAccessToken={key}
        initialViewState={{
          longitude: -2.5209,
          latitude: 53.945,
          zoom: 5,
        }}
        style={{
          position: "absolute",
          zIndex: 0,
          overflow: "hidden",
          width: "100vw",
          height: "100vh",
        }}
        mapStyle="mapbox://styles/mapbox/light-v10"
      />
    </>
  );
}

export default App;
