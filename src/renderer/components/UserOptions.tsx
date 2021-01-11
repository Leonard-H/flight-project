import React from "react";
import Table from "react-bootstrap/esm/Table";

type Props = {};
const UserOptions: React.FC<Props> = () => {
  return (
    <Table bordered>
      <thead>
        <tr>
          <th>Departure</th>
          <th>Destination</th>
          <th>Aircraft</th>
          <th>First Class Seats</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default UserOptions;
