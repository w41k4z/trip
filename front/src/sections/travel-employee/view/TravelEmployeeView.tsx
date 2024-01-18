import GenericTable from "../../../components/datatable/GenericTable";
import { tableAction } from "../table-action";
import { tableColumns } from "../table-column";
import useTravelEmployee from "../useTravelEmployee";

const TravelEmployeeView = () => {
  const { travels, employees, setCurrentTravelId, travelEmployees, loading } =
    useTravelEmployee();

  const travelOptions: [string, string][] = [["-1", "Choose"]];
  travels.map((travel) =>
    travelOptions.push([travel.id.toString(), travel.name])
  );
  const employeeOptions: [string, string][] = [["-1", "Choose"]];
  employees.map((employee) =>
    employeeOptions.push([
      employee.id.toString(),
      employee.positionGrade + " - " + employee.name + " " + employee.firstName,
    ])
  );

  const currentTravelEmployees = travelEmployees ? travelEmployees : [];

  return (
    <div>
      <header className="d-flex align-items-center mb-5">
        <p className="p-0 m-0 mx-2">Voyage: </p>
        <select
          className="form-select-sm"
          onChange={(e) => setCurrentTravelId(e.target.value)}
        >
          {travelOptions.map((option) => (
            <option value={option.at(0)}>{option.at(1)}</option>
          ))}
        </select>
      </header>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <GenericTable
          hasAction={tableAction(travelOptions, employeeOptions)}
          indexedRow
          title="Les employés du voyage"
          columns={tableColumns}
          data={currentTravelEmployees}
        />
      )}
    </div>
  );
};

export default TravelEmployeeView;
