export const downloadSampleCSV = () => {
  const rows = [
    ["name", "email", "rate", "hours"],
    ["Firstname Lastname", "email", "40", "3000"],
    ["Samplename", "email", "10", "4000"],
    ["Another name", "email", "40", "10000"],
  ];
  let csvContent = "data:text/csv;charset=utf-8,";
  rows.forEach((rowLine) => {
    let row = rowLine.join(",");
    csvContent += row + "\r\n";
  });
  let encodedUri = encodeURI(csvContent);
  let link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "sample.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
