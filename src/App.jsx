import { useGetAllAttractionQuery } from "./services/attraction";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "name",
    width: 150,
    editable: true,
  },
  {
    field: "detail",
    headerName: "Detail",
    width: 1400,
    editable: true,
  },
];

function App() {
  const { data, error, isLoading } = useGetAllAttractionQuery();
  console.log(data);
  return (
    <div className="p-10">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <div className="">
          <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={data}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick
              experimentalFeatures={{ newEditingApi: true }}
            />
          </Box>
        </div>
      ) : null}
    </div>
  );
}

export default App;
