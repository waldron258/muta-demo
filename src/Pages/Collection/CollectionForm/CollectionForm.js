import { useState, useEffect, useCallback } from "react";

import { classes } from "./CollectionForm.styles";

import {
  Button,
  Typography,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  FormHelperText,
} from "@mui/material";
import { Box } from "@mui/system";

import useInput from "../../../Hooks/use-input";
import { currencyFormat } from "../../../Utils/Common";

const CollectionForm = (props) => {
  const DUMMY_COLLECTION_POINTS = [
    {
      label: "Tienda Los Hermanos Florian",
      value: "Tienda Los Hermanos Florian",
    },
    {
      label: "Tienda Las Flores",
      value: "Tienda Las Flores",
    },
    {
      label: "Tienda Virgen Del Carmen",
      value: "Tienda Virgen Del Carmen",
    },
  ];

  const {
    value: collectionPoint,
    isValid: collectionPointIsValid,
    hasError: collectionPointInputHasError,
    valueChangeHandler: collectionPointChangeHandler,
    inputBlurHandler: collectionPointBlurHandler,
    inputResetHandler: collectionPointResetHandler,
  } = useInput((value) => value !== "");

  const {
    value: ACUWeight,
    isValid: ACUWeightIsValid,
    hasError: ACUWeightInputHasError,
    valueChangeHandler: ACUWeightChangeHandler,
    inputBlurHandler: ACUWeightBlurHandler,
    inputResetHandler: ACUWeightResetHandler,
  } = useInput(
    (value) => value.trim() !== "" && !value.includes("-") && value >= 0
  );

  const {
    value: oilPimpinas,
    isValid: oilPimpinasIsValid,
    hasError: oilPimpinasInputHasError,
    valueChangeHandler: oilPimpinasChangeHandler,
    inputBlurHandler: oilPimpinasBlurHandler,
    inputResetHandler: oilPimpinasResetHandler,
  } = useInput(
    (value) => value.trim() !== "" && !value.includes("-") && value >= 0
  );

  const {
    value: PET,
    isValid: PETIsValid,
    hasError: PETInputHasError,
    valueChangeHandler: PETChangeHandler,
    inputBlurHandler: PETBlurHandler,
    inputResetHandler: PETResetHandler,
  } = useInput(
    (value) => value.trim() !== "" && !value.includes("-") && value >= 0
  );

  const {
    value: PASTA,
    isValid: PASTAIsValid,
    hasError: PASTAInputHasError,
    valueChangeHandler: PASTAChangeHandler,
    inputBlurHandler: PASTABlurHandler,
    inputResetHandler: PASTAResetHandler,
  } = useInput(
    (value) => value.trim() !== "" && !value.includes("-") && value >= 0
  );

  const {
    value: greaseTrapWeight,
    isValid: greaseTrapWeightIsValid,
    hasError: greaseTrapWeightInputHasError,
    valueChangeHandler: greaseTrapWeightChangeHandler,
    inputBlurHandler: greaseTrapWeightBlurHandler,
    inputResetHandler: greaseTrapWeightResetHandler,
  } = useInput(
    (value) => value.trim() !== "" && !value.includes("-") && value >= 0
  );

  const [totalCollectionAmount, setTotalCollectionAmount] = useState(0);

  const updateTotalCollectionAmount = useCallback(() => {
    const updatedTotalCollectionAmount =
      Number(ACUWeight) * 1300 +
      Number(oilPimpinas) * 1000 +
      Number(PET) * 1000 +
      Number(PASTA) * 2000 +
      Number(greaseTrapWeight) * 1500;
    setTotalCollectionAmount(updatedTotalCollectionAmount);
  }, [ACUWeight, oilPimpinas, PET, PASTA, greaseTrapWeight]);

  useEffect(() => {
    updateTotalCollectionAmount();
  }, [updateTotalCollectionAmount]);

  let formIsValid = false;

  if (
    collectionPointIsValid &&
    ACUWeightIsValid &&
    oilPimpinasIsValid &&
    PETIsValid &&
    PASTAIsValid &&
    greaseTrapWeightIsValid &&
    greaseTrapWeightIsValid &&
    totalCollectionAmount > 0
  ) {
    formIsValid = true;
  }

  const resetForm = () => {
    collectionPointResetHandler();
    ACUWeightResetHandler();
    oilPimpinasResetHandler();
    PETResetHandler();
    PASTAResetHandler();
    greaseTrapWeightResetHandler();
  };

  const handleCloseModal = () => {
    props.setOpenModal(false);
    resetForm();
  };

  const formSubmissionHandler = async (event) => {
    event.preventDefault();
    document.activeElement.blur();
    if (formIsValid) {
      const materials = [];
      ACUWeight > 0 &&
        materials.push({
          key: "ACUWeight",
          value: "ACU",
          fullValue: "Aceite de Cocina Usado",
          unit: "Kg",
        });
      oilPimpinas > 0 &&
        materials.push({
          key: "oilPimpinas",
          value: "Pimpina con Aceite",
          fullValue: "Pimpina con Aceite Usado",
        });
      PET > 0 &&
        materials.push({ key: "PET", value: "PET", fullValue: "Pimpina PET" });
      PASTA > 0 &&
        materials.push({
          key: "PASTA",
          value: "Pasta",
          fullValue: "Pimpina Pasta",
        });
      greaseTrapWeight > 0 &&
        materials.push({
          key: "greaseTrapWeight",
          value: "Trampa de grasa",
          fullValue: "Trampa de grasa",
          unit: "Kg",
        });
      const collectionItem = {
        collectionPoint,
        ACUWeight,
        oilPimpinas,
        PET,
        PASTA,
        greaseTrapWeight,
        creationDate: new Date().toISOString(),
        totalPayment: totalCollectionAmount,
        code: "C" + ACUWeight + oilPimpinas + PET + PASTA + greaseTrapWeight,
        materials: materials,
      };
      props.setCollections((previousCollections) => {
        props.cookies.set(
          "collections",
          [...previousCollections, collectionItem],
          {
            path: "/",
          }
        );
        return [...previousCollections, collectionItem];
      });
      handleCloseModal();
      props.handleOpenAlert();
    } else {
      collectionPointBlurHandler();
      ACUWeightBlurHandler();
      oilPimpinasBlurHandler();
      PETBlurHandler();
      PASTABlurHandler();
      greaseTrapWeightBlurHandler();
    }
  };

  return (
    <form style={classes.formStyles} onSubmit={formSubmissionHandler}>
      <Typography id="transition-modal-title" sx={classes.formTitle}>
        Registrar nueva recolección
      </Typography>
      <Box sx={classes.formSection}>
        <FormControl
          sx={classes.formControl}
          size="small"
          error={collectionPointInputHasError}
        >
          <InputLabel id="collection-point">Punto de recolección</InputLabel>
          <Select
            labelId="collection-point"
            id="collection-point"
            label="Punto de recolección"
            value={collectionPoint}
            onChange={collectionPointChangeHandler}
            onBlur={collectionPointBlurHandler}
          >
            {DUMMY_COLLECTION_POINTS.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
          {collectionPointInputHasError && (
            <FormHelperText>¡Debe seleccionar una opción!</FormHelperText>
          )}
        </FormControl>
      </Box>

      <Box sx={classes.formSection}>
        <Typography id="transition-modal-title" sx={classes.formSectionTitle}>
          ACU
        </Typography>
        <Box sx={classes.sectionContainer}>
          <TextField
            InputLabelProps={{ shrink: true }}
            size="small"
            sx={classes.textFieldStyles}
            id="acu-weight"
            label="Peso"
            type="number"
            InputProps={{
              min: 0,
              endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
            }}
            variant="outlined"
            value={ACUWeight}
            onChange={ACUWeightChangeHandler}
            onBlur={ACUWeightBlurHandler}
            error={ACUWeightInputHasError}
            helperText={
              ACUWeightInputHasError && "¡Este campo debe ser por lo menos 0!"
            }
          />
          <TextField
            InputLabelProps={{ shrink: true }}
            size="small"
            sx={classes.textFieldStyles}
            id="oil-pimpinas"
            label="Pimpinas con Aceite"
            type="number"
            InputProps={{
              min: 0,
              endAdornment: <InputAdornment position="end">Uni</InputAdornment>,
            }}
            value={oilPimpinas}
            onChange={oilPimpinasChangeHandler}
            onBlur={oilPimpinasBlurHandler}
            error={oilPimpinasInputHasError}
            helperText={
              oilPimpinasInputHasError && "¡Este campo debe ser por lo menos 0!"
            }
          />
        </Box>
      </Box>
      <Box sx={classes.formSection}>
        <Typography id="transition-modal-title" sx={classes.formSectionTitle}>
          Pimpinas Vacías
        </Typography>
        <Box sx={classes.sectionContainer}>
          <TextField
            InputLabelProps={{ shrink: true }}
            size="small"
            sx={classes.textFieldStyles}
            id="pet"
            label="PET"
            type="number"
            InputProps={{
              min: 0,
              endAdornment: <InputAdornment position="end">Uni</InputAdornment>,
            }}
            variant="outlined"
            value={PET}
            onChange={PETChangeHandler}
            onBlur={PETBlurHandler}
            error={PETInputHasError}
            helperText={
              PETInputHasError && "¡Este campo debe ser por lo menos 0!"
            }
          />
          <TextField
            InputLabelProps={{ shrink: true }}
            size="small"
            sx={classes.textFieldStyles}
            id="pasta"
            label="Pasta"
            type="number"
            InputProps={{
              min: 0,
              endAdornment: <InputAdornment position="end">Uni</InputAdornment>,
            }}
            value={PASTA}
            onChange={PASTAChangeHandler}
            onBlur={PASTABlurHandler}
            error={PASTAInputHasError}
            helperText={
              PASTAInputHasError && "¡Este campo debe ser por lo menos 0!"
            }
          />
        </Box>
      </Box>
      <Box sx={classes.formSection}>
        <Typography id="transition-modal-title" sx={classes.formSectionTitle}>
          Trampas de Grasa
        </Typography>
        <TextField
          InputLabelProps={{ shrink: true }}
          size="small"
          sx={classes.textFieldStyles}
          id="grease-trap-weight"
          label="Peso"
          type="number"
          InputProps={{
            min: 0,
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
          variant="outlined"
          value={greaseTrapWeight}
          onChange={greaseTrapWeightChangeHandler}
          onBlur={greaseTrapWeightBlurHandler}
          error={greaseTrapWeightInputHasError}
          helperText={
            greaseTrapWeightInputHasError &&
            "¡Este campo debe ser por lo menos 0!"
          }
        />
      </Box>
      <Box sx={classes.paymentSection}>
        <Typography
          id="transition-modal-title"
          sx={{
            color: "#9E9E9E",
            fontFamily: "'Inter-Regular', sans-serif",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "13px",
          }}
        >
          Total a pagar
        </Typography>
        <Typography id="transition-modal-title" sx={classes.formSectionTitle}>
          {currencyFormat(totalCollectionAmount)}
        </Typography>
      </Box>
      <Button
        disabled={!formIsValid}
        sx={
          formIsValid
            ? [classes.formButton]
            : [classes.formButton, classes.formDisabledButton]
        }
        type="submit"
      >
        Crear registro
      </Button>
    </form>
  );
};

export default CollectionForm;
