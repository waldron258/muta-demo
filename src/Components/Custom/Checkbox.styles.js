export const classes = {
  BpCheckedIcon: {
    backgroundColor: "#EBB36B",

    "input:hover ~ &": {
      backgroundColor: "#f1bf83",
    },
  },

  bpIcon: {
    width: 16,
    height: 16,
    border: "1px solid #DEDEDE",
    boxShadow:
      "0px 3px 1px -2px rgba(0, 0, 0, 0.06), 0px 5px 3px -2px rgba(0, 0, 0, 0.02)",
    borderRadius: "4px",

    ".Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#fff5bc",
    },
  },
};
