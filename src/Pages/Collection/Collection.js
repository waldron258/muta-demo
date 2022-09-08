import { useState, useEffect, useCallback, useMemo } from "react";

import Cookies from "universal-cookie";

import Actions from "./Actions/Actions";
import Tab from "./Tab/Tab";
import Table from "./Table/Table";

import { classes } from "./Collection.styles";

import {
  Box,
  Modal,
  Backdrop,
  Fade,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import CollectionForm from "./CollectionForm/CollectionForm";

const Collection = () => {
  const [openModal, setOpenModal] = useState(false);

  const [collections, setCollections] = useState([]);
  const cookies = useMemo(() => new Cookies(), []);

  const initializeCollections = useCallback(() => {
    cookies.get("collections") === undefined
      ? setCollections([])
      : setCollections(cookies.get("collections"));
  }, [cookies]);

  useEffect(() => {
    initializeCollections();
  }, [initializeCollections, cookies]);

  const [openAlert, setOpenAlert] = useState(false);

  const handleOpenAlert = () => setOpenAlert(true);

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  return (
    <Box sx={classes.container}>
      <Typography sx={classes.title}>Recolecciones</Typography>

      <Actions setOpenModal={setOpenModal} />

      <Tab
        collections={collections}
        table={
          <Table
            collections={collections}
            setCollections={setCollections}
            cookies={cookies}
          />
        }
      />

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <Box sx={classes.modalContainer}>
            <CollectionForm
              setCollections={setCollections}
              setOpenModal={setOpenModal}
              cookies={cookies}
              handleOpenAlert={handleOpenAlert}
            />
          </Box>
        </Fade>
      </Modal>

      <Snackbar
        anchorOrigin={classes.snackbarStyles}
        open={openAlert}
        autoHideDuration={3500}
        onClose={handleCloseAlert}
      >
        <Alert
          severity="success"
          elevation={6}
          variant="filled"
          onClose={handleCloseAlert}
        >
          ¡Se ha agregado la recolección!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Collection;
