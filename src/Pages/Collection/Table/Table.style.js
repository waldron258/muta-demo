export const classes = {
  container: { marginTop: "30px" },

  materialContainer: {
    boxSizing: "border-box",
    display: "inline-block",
    minHeight: "25px",
    margin: "3px 3px",
    padding: "3px 8px",
    gap: "4px",
    border: "2px solid #DEDEDE",
    borderRadius: "4px",
  },

  materialFont: {
    fontFamily: "'Inter-Regular', sans-serif",
    color: "#666666",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "13px",
    lineHeight: "16px",
  },

  modalContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
    boxSizing: "border-box",
    bgcolor: "#FFFFFF",
    border: "3px solid #E0E0E0;",
    boxShadow: "24px",
    borderRadius: "8px",
    maxHeight: "95vh",
    overflow: "auto",
    padding: "20px 35px",
  },

  statusContainer: {
    boxSizing: "border-box",
    display: "inline-block",
    minHeight: "25px",
    margin: "3px 3px",
    padding: "3px 8px",
    gap: "4px",
    borderRadius: "4px",
  },

  statusFont: {
    fontFamily: "'Inter-Regular', sans-serif",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "13px",
  },

  tableCellBody: {
    backgroundColor: "#FFFFFF",
    color: "#1A1919",
    fontFamily: "'Inter-Regular', sans-serif",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "24px",
  },

  tableCellHead: {
    backgroundColor: "transparent",
    color: "#808080",
    fontFamily: "'Inter-Regular', sans-serif",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "15px",
    lineHeight: "24px",
  },

  tableContainer: {
    width: "100%",
    marginBottom: "50px",
  },

  tableRow: {
    border: "1px solid #EDEDED",
    "&:hover": {
      cursor: "pointer",
    },
  },
};
