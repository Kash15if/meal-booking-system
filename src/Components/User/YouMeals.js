//your meals last month/ this month or particular month
// Calener
//table -> Date , No of Meals , Charge/Meal , Menu
import FilterableTable from "./../../CustomComponents/Table/FilterableTable";

const YearMeals = () => {
  return (
    <div>
      {" "}
      <FilterableTable
        tabData={[
          {
            id: 1,
            name: "Kashif",
            ph: "90909001",
          },
          {
            id: 2,
            name: "Faraz",
            ph: "90909002",
          },
          {
            id: 3,
            name: "Rayan",
            ph: "90909001",
          },
        ]}
        header={["id", "name", "ph"]}
        filterableColumn={["name", "ph"]}
      />
    </div>
  );
};

export default YearMeals;
