import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
  const { van } = useOutletContext();

  console.log("Photo for ", van);
  return (
    van?.imageUrl && (
      <div class="host-van-photos">
        <img src={van.imageUrl} />
      </div>
    )
  );
}
