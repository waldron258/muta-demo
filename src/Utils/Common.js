const months = {
  "01": "Ene",
  "02": "Feb",
  "03": "Mar",
  "04": "Abr",
  "05": "May",
  "06": "Jun",
  "07": "Jul",
  "08": "Ago",
  "09": "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dic",
};

export const formatDate = (unformattedDate) => {
  const date = unformattedDate.split("T")[0].split("-");
  const fortmattedDate = date[2] + " " + months[date[1]] + " " + date[0];
  return fortmattedDate;
};

export const currencyFormat = (num) => {
  return "$" + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};
