export const downloadSampleCSV = () => {
  const rows = [
    ["name", "email", "rate", "hours", "startDate", "endDate"],
    ["Firstname Lastname", "email", "40", "3000", "2024-07-01", "2024-08-31"],
    ["Samplename", "email", "10", "4000", "2024-08-01", "2024-08-31"],
    ["Another name", "email", "40", "10000", "2024-07-01", "2024-07-31"],
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
