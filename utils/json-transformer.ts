export const csvToJSON: (csv: string) => object[] = (csv: string) => {
  let jsonData: object[] = [];
  let headers = [];
  let rows = csv.split("\r\n");
  for (let i = 0; i < rows.length; i++) {
    let cells = rows[i].split(",");
    let rowData: any = {}; // Actually an object
    for (let j = 0; j < cells.length; j++) {
      if (i === 0) {
        let headerName = cells[j].trim();
        headers.push(headerName);
      } else {
        let key = headers[j];
        if (key) {
          rowData[key] = cells[j].trim();
        }
      }
    }
    // Skip the first row (header) data
    if (i !== 0) {
      jsonData.push(rowData);
    }
  }
  return jsonData;
};

export const tsvToJSON: (tsv: string) => object[] = (tsv: string) => {
  let jsonData: object[] = [];
  let headers = [];
  let rows = tsv.split("\r\n");
  for (let i = 0; i < rows.length; i++) {
    let cells = rows[i].split("\t");
    let rowData: any = {}; // Actually an object
    for (let j = 0; j < cells.length; j++) {
      if (i === 0) {
        let headerName = cells[j].trim();
        headers.push(headerName);
      } else {
        let key = headers[j];
        if (key) {
          rowData[key] = cells[j].trim();
        }
      }
    }
    // Skip the first row (header) data
    if (i !== 0) {
      jsonData.push(rowData);
    }
  }
  return jsonData;
};
