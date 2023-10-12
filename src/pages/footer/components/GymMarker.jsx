import { Marker } from "react-leaflet";
import { Icon } from "leaflet";
import { PopUpDiv } from "./PopUpDiv";

export const GymMarker = () => {
  const customIcon = new Icon({
    iconUrl: require("../../../images/gym-marker.png"),
    iconSize: [60, 60],
  });

  return (
    <Marker position={[42.26950571307085, 42.67143730347168]} icon={customIcon}>
      <PopUpDiv />
    </Marker>
  );
};
