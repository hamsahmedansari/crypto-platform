export interface AssetDetailModalProps {
  selectedCoin: CryptoAsset | null;
  handleCloseModal: () => void;
}
export interface AssetTableBodyProps {
  asset: CryptoAsset;
  handleRowClick: (asset: CryptoAsset) => void;
}

export interface SideBarProps {
  drawerWidth: number;
  handleDrawerClose: () => void;
  handleDrawerTransitionEnd: () => void;
  mobileOpen: boolean;
}

export interface SidebarItem {
  text: string;
  icon: React.ReactNode;
  path: string;
}

export interface sidebarListProps {
  index: number;
  handleDrawerClose: () => void;
  isSelected: boolean;
  item: SidebarItem;
}

export interface CryptoAsset {
  last_updated: string | number | Date;
  ath: number;
  total_supply: string;
  market_cap: string;
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
}
