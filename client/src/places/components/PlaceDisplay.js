import React, { useState, useContext } from "react";

import Card from "../../commons/element/Card";
import Button from "../../commons/formstuff/Button";
import Modal from "../../commons/element/Modal";
import Map from "../../commons/element/Map";
import { AuthsContext } from "../../contextApi/AuthsContext";
import "./PlaceDisplay.css";

const PlaceDisplay = (props) => {
  // For hidding edit/delete btn for unAuth user
  const getAuth = useContext(AuthsContext);

  // State hook and handler for Modal in shared element
  const [showMap, setShowMap] = useState(false);

  const openMap = () => setShowMap(true);
  const closeMap = () => setShowMap(false);

  // State hook and handler for Modal delete btn
  const [confirmDel, setConfirmDelete] = useState(false);

  const warningHandler = () => {
    setConfirmDelete(true);
  };

  const cancelHandler = () => {
    setConfirmDelete(false);
  };

  const deleteHandler = () => {
    setConfirmDelete(false);
    console.log("The place has been deleted successfully");
  };

  return (
    <React.Fragment>
      {/* Modal from element for map display */}
      <Modal
        show={showMap}
        onCancel={closeMap}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMap}>Close</Button>}
      >
        <div className="map-container">
          {/* From Map comp in element */}
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>

      {/* Modal from element for delete button below */}
      <Modal
        show={confirmDel}
        onCancel={cancelHandler}
        header="Warning Alert!!"
        headerClass="bg-warning_color"
        footerClass="place-item__modal-actions"
        footer={
          <React.Fragment>
            <Button inverse onClick={cancelHandler}>
              Cancel
            </Button>

            <Button danger onClick={deleteHandler}>
              Delete
            </Button>
          </React.Fragment>
        }
      >
        <p>Are you sure you want to delete place? Action can't be undone.</p>
      </Modal>

      {/* Place details display with buttons */}
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>

          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>

          <div className="place-item__actions">
            <Button inverse onClick={openMap}>
              View On Map
            </Button>

            {getAuth.loggedIn && (
              <Button to={`/update-place/${props.id}`}>Edit</Button>
            )}

            {getAuth.loggedIn && (
              <Button danger onClick={warningHandler}>
                Delete
              </Button>
            )}
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceDisplay;
