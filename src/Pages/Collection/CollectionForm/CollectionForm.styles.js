export const classes = {
  formButton: {
    marginTop: "15px",
    fontFamily: "'Inter-Regular', sans-serif",
    justifyContent: "space-evenly",
    fontSize: "15px",
    fontWeight: "bold",
    width: "100%",
    backgroundColor: "#EBB36B",
    color: "white",
    borderRadius: "3px",
    "&:hover": {
      backgroundColor: "#d4a160",
    },
  },
  formControl: {
    "& label.Mui-focused": {
      color: "#EBB36B",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#EBB36B",
      },
    },
  },
  formDisabledButton: {
    "&.MuiButtonBase-root:disabled": {
      backgroundColor: "#F7F7F7",
      color: "#C9C9C9",
      cursor: "not-allowed",
      pointerEvents: "auto",
    },
  },

  formSection: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    margin: "5px 0px",
  },

  formSectionTitle: {
    color: "#4D4D4D",
    textAlign: "left",
    fontFamily: "'Inter-Regular', sans-serif",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "15px",
    lineHeight: "24px",
    margin: "10px 0px",
  },

  formStyles: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    textAlign: "center",
    justifyContent: "space-evenly",
    width: "100%",
    overflow: "auto",
  },

  formTitle: {
    textAlign: "left",
    fontFamily: "'Inter-Regular', sans-serif",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "28px",
    lineHeight: "40px",
    marginBottom: "30px",
  },

  paymentSection: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-end",
  },

  sectionContainer: {
    display: "flex",
    justifyContent: "space-between",
  },

  textFieldStyles: {
    "& .MuiOutlinedInput-input": {
      "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
        WebkitAppearance: "none",
      },
    },
    "& label.Mui-focused": {
      color: "#EBB36B",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#EBB36B",
      },
    },
    width: "46.5%",
  },
};
