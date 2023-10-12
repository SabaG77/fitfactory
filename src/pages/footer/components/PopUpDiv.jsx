import { Popup } from "react-leaflet";
import { Muscle } from "../../../globalComponents";
export const PopUpDiv = () => {
  return (
    <Popup>
      <div className="pop-up-main">
        <h3 className="pop-up-text">
          FITFACTORY
          <span>
            <Muscle />
          </span>
        </h3>
      </div>
    </Popup>
  );
};
