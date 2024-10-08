import AssetTable from "@/src/features/AssetTable";
import { fullView } from "@/src/styles";
import { Box } from "@mui/material";

export default function HomePage() {
  return (
    <Box sx={fullView}>
      <AssetTable />
    </Box>
  );
}
