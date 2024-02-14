export const explodeNodes = (values) => {
  const nodes = values ? values.edges.map((edge) => edge.node) : [];
  return nodes;
};

export const formatDate = (date) => {
  const d = typeof date === "string" ? new Date(date) : date;
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = d.getFullYear();
  return `${day}.${month}.${year}`;
};
