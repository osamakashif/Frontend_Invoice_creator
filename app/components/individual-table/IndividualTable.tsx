export const IndividualTable = () => {
  const inputClassNames: string = "w-[40vh] min-[801px]:w-[80vh]";
  return (
    <div className="flex flex-col items-center">
      <table className="border-separate border-spacing-2">
        <tbody>
          <tr>
            <td>Name</td>
            <td>
              <input className={inputClassNames}></input>
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td>
              <input className={inputClassNames} type="email"></input>
            </td>
          </tr>
          <tr>
            <td>Rate</td>
            <td>
              <input className={inputClassNames} type="number"></input>
            </td>
          </tr>
          <tr>
            <td>Hours</td>
            <td>
              <input className={inputClassNames} type="number"></input>
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
