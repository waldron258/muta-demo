export const classes = {
  button: {
    fontFamily: "'Inter-Regular', sans-serif",
    justifyContent: "space-evenly",
    fontSize: "16px",
    fontWeight: "bold",
    width: "200px",
    backgroundColor: "#EBB36B",
    color: "white",
    borderRadius: "4px",
    "&:hover": {
      backgroundColor: "#d4a160",
    },
  },

  container: {
    display: "flex",
    justifyContent: "space-between",
    margin: "30px 0px",
  },

  iconButton: { width: "26px", height: "26px" },

  textField: {
    "& label.Mui-focused": {
      color: "#EBB36B",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#EBB36B",
      },
    },
  },
};
