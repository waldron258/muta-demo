import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";

import { classes } from "./Checkbox.styles";

const BpIcon = styled("span")(({ theme }) => classes.bpIcon);

const BpCheckedIcon = styled(BpIcon)(classes.BpCheckedIcon);

const BpCheckbox = (props) => {
  return (
    <Checkbox
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ "aria-label": "Checkbox demo" }}
      {...props}
    />
  );
};

const CustomCheckbox = () => {
  return <BpCheckbox />;
};

export default CustomCheckbox;
