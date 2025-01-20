import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
  const { van } = useOutletContext();
  return (
    <div className="van-detail-price-container van-detail-price-tab-container">
      <span className="van-detail-price-amount">${van.price}</span>
      <span className="van-detail-price-per-day">/day</span>
    </div>
  );
}
