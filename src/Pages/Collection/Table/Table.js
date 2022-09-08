import { Fragment, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  tableCellClasses,
  TableRow,
  Typography,
  Fade,
  Modal,
  Backdrop,
} from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";

import Checkbox from "../../../Components/Custom/Checkbox";
import CollectionDetail from "../CollectionDetail/CollectionDetail";

import { classes } from "./Table.style";

import { formatDate, currencyFormat } from "../../../Utils/Common";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: classes.tableCellHead,
  [`&.${tableCellClasses.body}`]: classes.tableCellBody,
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const CustomTable = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const [currentCollection, setCurrenCollection] = useState();
  const [currentCollectionKey, setCurrenCollectionKey] = useState(-1);

  const handleOpenModal = (currentCollection, key) => {
    setCurrenCollection(currentCollection);
    setCurrenCollectionKey(key);
    setOpenModal(true);
  };
  const handleCloseModal = () => setOpenModal(false);

  const removeCollectionHandler = (key) => {
    props.setCollections((previousCollections) => {
      const updatedCollections = previousCollections.filter(
        (collection, index) => index !== key
      );
      props.cookies.set("collections", updatedCollections, {
        path: "/",
      });
      return updatedCollections;
    });
    setOpenModal(false);
  };

  return (
    <Fragment>
      <TableContainer sx={classes.tableContainer}>
        <Table sx={classes.tableContainer} aria-label="simple table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell align="center">
                <Checkbox />
              </StyledTableCell>
              <StyledTableCell align="center">Código</StyledTableCell>
              <StyledTableCell align="center">Fecha</StyledTableCell>
              <StyledTableCell align="center">
                Punto de Recolección
              </StyledTableCell>
              <StyledTableCell align="center">Estado</StyledTableCell>
              <StyledTableCell align="center">Materiales</StyledTableCell>
              <StyledTableCell align="center">Pago Total</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {props.collections.map((row, key) => {
              const formattedDate = formatDate(row.creationDate);
              return (
                <StyledTableRow key={key} sx={classes.tableRow}>
                  <StyledTableCell
                    align="center"
                    sx={{
                      "&:hover": {
                        cursor: "default",
                      },
                    }}
                  >
                    <Checkbox />
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    onClick={() => handleOpenModal(row, key)}
                  >
                    {row.code}
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    onClick={() => handleOpenModal(row, key)}
                  >
                    {formattedDate}
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    onClick={() => handleOpenModal(row, key)}
                  >
                    {row.collectionPoint}
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    sx={{ minWidth: "100px" }}
                    onClick={() => handleOpenModal(row, key)}
                  >
                    <Box
                      key={key}
                      sx={[
                        classes.statusContainer,
                        {
                          backgroundColor:
                            key % 3 === 0
                              ? "#EBFAE2"
                              : key % 3 === 1
                              ? "#e0eaf6"
                              : "#ffddd8",
                        },
                      ]}
                    >
                      <Typography
                        sx={[
                          classes.statusFont,
                          {
                            color:
                              key % 3 === 0
                                ? "#4F9C20"
                                : key % 3 === 1
                                ? "#0085CA"
                                : "#cf142b",
                          },
                        ]}
                      >
                        {key % 3 === 0
                          ? "Recogido"
                          : key % 3 === 1
                          ? "En progreso"
                          : "Cancelado"}
                      </Typography>
                    </Box>
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    sx={{ maxWidth: "200px" }}
                    onClick={() => handleOpenModal(row, key)}
                  >
                    {row.materials.map((material, key) => (
                      <Box key={key} sx={classes.materialContainer}>
                        <Typography sx={classes.materialFont}>
                          {material.value}
                        </Typography>
                      </Box>
                    ))}
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    onClick={() => handleOpenModal(row, key)}
                  >
                    {currencyFormat(row.totalPayment)}
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <Box sx={classes.modalContainer}>
            <CollectionDetail
              currentCollection={currentCollection}
              currentCollectionKey={currentCollectionKey}
              removeCollectionHandler={removeCollectionHandler}
            />
          </Box>
        </Fade>
      </Modal>
    </Fragment>
  );
};

export default CustomTable;
