import { useOutletContext } from "react-router-dom";

export default function HostVanDescription() {
  const { van } = useOutletContext();

  return (
    van?.description && (
      <div className="van-detail-description">
        <p>
          <strong>Name: </strong> {van.name}
        </p>
        <p>
          <strong>Category: </strong>
          {van.type[0].toUpperCase() + van.type.slice(1)}
        </p>
        <p>
          <strong>Description: </strong>
          {van.description}
        </p>
        <p>
          <strong>Visibility: </strong>
          Public
        </p>
      </div>
    )
  );
}
