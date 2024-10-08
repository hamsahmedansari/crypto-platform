"use client";
import { getCryptoData } from "@/src/redux/features/cryptoSlice";
import { AppDispatch, RootState } from "@/src/redux/store";
import {
  Box,
  CircularProgress,
  createTheme,
  CssBaseline,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AssetDetailModal from "../components/AssetDetailModal";
import AssetTableBody from "../components/AssetTableBody";
import { screenFlexAlign } from "../styles";
import {
  assetTableContainer,
  assetTableMainDiv,
  assetTableSearch,
} from "../styles/assetTable";
import { CryptoAsset } from "../types/types";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#1d1d1d",
    },
    text: {
      primary: "#fff",
    },
  },
});

export default function AssetTable() {
  const dispatch = useDispatch<AppDispatch>();
  const { data: cryptoData, status } = useSelector(
    (state: RootState) => state.crypto
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCoin, setSelectedCoin] = useState<CryptoAsset | null>(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    dispatch(getCryptoData());
  }, [dispatch]);

  if (status === "loading")
    return (
      <Box sx={screenFlexAlign}>
        <CircularProgress />
      </Box>
    );
  if (status === "failed")
    return (
      <Box sx={screenFlexAlign}>
        <p>Failed to load data.</p>;
      </Box>
    );

  const filteredCryptoData = cryptoData.filter(
    (asset: CryptoAsset) =>
      asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRowClick = (coin: CryptoAsset) => {
    setSelectedCoin(coin);
  };

  const handleCloseModal = () => {
    setSelectedCoin(null);
  };

  const paginatedCryptoData = filteredCryptoData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={assetTableMainDiv}>
        <Box sx={assetTableSearch}>
          <TextField
            variant="outlined"
            placeholder="Search..."
            fullWidth
            margin="normal"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={assetTableSearch.textField}
          />
        </Box>
        <Box sx={{ display: "flex" }}>
          <TableContainer component={Paper} sx={assetTableContainer}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Coin</TableCell>
                  <TableCell align="right">Coin Price (USD)</TableCell>
                  <TableCell align="right">24h Change (%)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedCryptoData.map((asset: CryptoAsset, ind) => (
                  <AssetTableBody
                    key={ind}
                    asset={asset}
                    handleRowClick={handleRowClick}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component="div"
          count={filteredCryptoData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(event, newPage) => setPage(newPage)}
          onRowsPerPageChange={(event) => {
            setRowsPerPage(parseInt(event.target.value, 10));
            setPage(0);
          }}
        />
        <AssetDetailModal
          selectedCoin={selectedCoin}
          handleCloseModal={handleCloseModal}
        />
      </Box>
    </ThemeProvider>
  );
}
