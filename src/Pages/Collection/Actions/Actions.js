import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { SearchOutlined, AddCircleOutlineOutlined } from "@mui/icons-material";
import { classes } from "./Actions.styles";

const Actions = (props) => {
  const handleOpenModal = () => props.setOpenModal(true);

  return (
    <Box sx={classes.container}>
      <TextField
        sx={classes.textField}
        size="small"
        id="search"
        label="Buscar"
        InputProps={{
          fontSize: "10px",
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end">
                <SearchOutlined />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button
        onClick={handleOpenModal}
        startIcon={<AddCircleOutlineOutlined sx={classes.iconButton} />}
        size="small"
        sx={classes.button}
      >
        Nueva entrada
      </Button>
    </Box>
  );
};

export default Actions;
