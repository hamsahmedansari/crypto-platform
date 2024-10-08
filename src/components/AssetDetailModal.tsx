import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Modal,
  Typography,
} from "@mui/material";
import React from "react";
import { AssetDetailModalProps } from "../types/types";
import {
  assetTableModalCardCloseBtn,
  assetTableModalCardContent,
  assetTableModalCardData,
  assetTableModalCardDataLastUpdated,
  assetTableModalCardMedia,
  assetTableModalCardName,
  assetTableModalDiv,
} from "../styles/assetTable";

const AssetDetailModal: React.FC<AssetDetailModalProps> = ({
  selectedCoin,
  handleCloseModal,
}) => {
  return (
    <Modal open={!!selectedCoin} onClose={handleCloseModal}>
      <Box sx={assetTableModalDiv}>
        {selectedCoin && (
          <Card sx={assetTableModalDiv}>
            <CardMedia
              component="img"
              sx={assetTableModalCardMedia}
              image={selectedCoin.image}
              alt={selectedCoin.name}
            />
            <CardContent sx={assetTableModalCardContent}>
              <Typography
                variant="h5"
                component="h2"
                sx={assetTableModalCardName}
              >
                {selectedCoin.name} Details
              </Typography>
              <Typography variant="body1" sx={assetTableModalCardData}>
                <strong>Symbol:</strong> {selectedCoin.symbol.toUpperCase()}
              </Typography>
              <Typography variant="body1" sx={assetTableModalCardData}>
                <strong>Current Price:</strong> $
                {selectedCoin.current_price.toFixed(2)}
              </Typography>
              <Typography variant="body1" sx={assetTableModalCardData}>
                <strong>24h Change:</strong>{" "}
                {selectedCoin.price_change_percentage_24h.toFixed(2)}%
              </Typography>
              <Typography variant="body1" sx={assetTableModalCardData}>
                <strong>Market Cap:</strong> $
                {selectedCoin.market_cap.toLocaleString()}
              </Typography>
              <Typography variant="body1" sx={assetTableModalCardData}>
                <strong>Total Supply:</strong>{" "}
                {selectedCoin.total_supply?.toLocaleString() || "N/A"}
              </Typography>
              <Typography variant="body1" sx={assetTableModalCardData}>
                <strong>All-Time High:</strong> $
                {selectedCoin.ath?.toFixed(2) || "N/A"}
              </Typography>
              <Typography
                variant="body1"
                sx={assetTableModalCardDataLastUpdated}
              >
                <strong>Last Updated:</strong>{" "}
                {new Date(selectedCoin.last_updated).toLocaleString()}
              </Typography>
              <Box sx={assetTableModalCardCloseBtn}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleCloseModal}
                  sx={assetTableModalCardCloseBtn.btn}
                >
                  Close
                </Button>
              </Box>
            </CardContent>
          </Card>
        )}
      </Box>
    </Modal>
  );
};

export default AssetDetailModal;
