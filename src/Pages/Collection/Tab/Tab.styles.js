export const classes = {
  container: { width: "100%" },

  noCollectionsFound: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: "100%",
    height: "100%",
    color: "#C9C9C9",
    marginTop: "100px",
  },

  noCollectionsFoundFont: {
    fontFamily: "'Inter-Regular', sans-serif",
    fontStyle: "normal",
  },

  styledTab: {
    fontFamily: "'Inter-Regular', sans-serif",
    color: "#1A1919",
    "&.Mui-selected": {
      color: "#D3841D",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },

    "&:hover": {
      color: "#D3841D",
      opacity: 1,
    },
  },

  styledTabs: {
    borderBottom: "1px solid #e8e8e8",
    "& .MuiTabs-indicator": {
      backgroundColor: "#D3841D",
    },
  },
};
