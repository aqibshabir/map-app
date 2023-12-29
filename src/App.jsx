import ReactMapGL from "react-map-gl";
import "./App.css";

function App() {
  const key = import.meta.env.VITE_MAPBOX;

  return (
    <>
      <ReactMapGL
        mapboxAccessToken={key}
        initialViewState={{
          longitude: -1.2052,
          latitude: 52.633331,
          zoom: 4.5,
        }}
        style={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </>
  );
}

export default App;
