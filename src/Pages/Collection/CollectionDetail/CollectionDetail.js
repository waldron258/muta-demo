import { Delete } from "@mui/icons-material";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";

import { formatDate, currencyFormat } from "../../../Utils/Common";
import { classes } from "./CollectionDetails.styles";

const CollectionDetail = (props) => {
  return (
    <Box sx={classes.container}>
      <Box sx={classes.deleteButtonContainer}>
        <Tooltip title="Borrar recolección">
          <IconButton
            size="small"
            aria-label="delete"
            onClick={() =>
              props.removeCollectionHandler(props.currentCollectionKey)
            }
          >
            <Delete />
          </IconButton>
        </Tooltip>
      </Box>
      <Box sx={classes.detailSection}>
        <Typography
          sx={[
            classes.detailTypography,
            classes.sectionTitle,
            { fontSize: "16px" },
          ]}
        >
          {formatDate(props.currentCollection.creationDate)}
        </Typography>
        <Typography sx={[classes.detailTypography, classes.userCode]}>
          {props.currentCollection.code}
        </Typography>
      </Box>

      <Box sx={classes.detailSection}>
        <Typography sx={[classes.detailTypography, classes.sectionTitle]}>
          Usuario
        </Typography>
        <Typography sx={[classes.detailTypography, classes.userName]}>
          Juan Pérez
        </Typography>
      </Box>

      <Box sx={classes.detailSection}>
        <Typography sx={[classes.detailTypography, classes.sectionTitle]}>
          Material Recolectado
        </Typography>
        {props.currentCollection.materials.map((material, key) => (
          <Box key={key} sx={classes.quantitiesContainer}>
            <Typography sx={[classes.detailTypography]}>
              {material.fullValue}
            </Typography>
            <Typography
              sx={[classes.detailTypography, classes.collectionQuantities]}
            >
              {`${props.currentCollection[material.key]} ${
                material.unit !== undefined ? material.unit : ""
              }`}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box sx={classes.detailSection}>
        <Typography sx={[classes.detailTypography, classes.sectionTitle]}>
          Pago
        </Typography>
        <Typography sx={[classes.detailTypography]}>
          {currencyFormat(props.currentCollection.totalPayment)}
        </Typography>
      </Box>
    </Box>
  );
};

export default CollectionDetail;
