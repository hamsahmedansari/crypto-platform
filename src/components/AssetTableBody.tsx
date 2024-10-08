import { Box, TableCell, TableRow } from "@mui/material";
import Image from "next/image";
import React from "react";
import { AssetTableBodyProps } from "../types/types";
import { assetTableBody, assetTableBodyCellOne } from "../styles/assetTable";

const AssetTableBody: React.FC<AssetTableBodyProps> = ({
  asset,
  handleRowClick,
}) => (
  <TableRow
    key={asset.id}
    onClick={() => handleRowClick(asset)}
    sx={assetTableBody}
  >
    <TableCell>
      <Box sx={assetTableBodyCellOne}>
        <Image src={asset.image} alt={asset.name} width={30} height={30} />
        <Box sx={assetTableBodyCellOne.textArea}>
          <Box sx={assetTableBodyCellOne.textArea.symoblText}>
            {asset.symbol}
          </Box>
          <Box sx={assetTableBodyCellOne.textArea.nameText}>{asset.name}</Box>
        </Box>
      </Box>
    </TableCell>
    <TableCell align="right">${asset.current_price.toFixed(2)}</TableCell>
    <TableCell
      align="right"
      sx={{
        color: asset.price_change_percentage_24h < 0 ? "red" : "green",
      }}
    >
      {asset.price_change_percentage_24h.toFixed(2)}%
    </TableCell>
  </TableRow>
);

export default AssetTableBody;
