export const IndividualTable = () => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>
              <input></input>
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td>
              <input type="email"></input>
            </td>
          </tr>
          <tr>
            <td>Phone number</td>
            <td>
              <input></input>
            </td>
          </tr>
          <tr>
            <td>Hourly rate</td>
            <td>
              <input type="number"></input>
            </td>
          </tr>
          <tr>
            <td>Hours</td>
            <td>
              <input type="number"></input>
            </td>
          </tr>
        </tbody>
      </table>
      <button className="tertiary-colour p-2 rounded-xl">
        Generate invoice
      </button>
    </div>
  );
};
