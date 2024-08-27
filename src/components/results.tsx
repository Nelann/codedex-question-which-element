import { useContext } from "react";

import { UserContext } from "@/contexts/user-context";

import type { ArtWork } from "@/types/artwork";

type ResultsProps = {
  element: string;
  isLoading: boolean;
  error: string | null;
  artwork: ArtWork | null;
};

export default function Results({
  element,
  isLoading,
  error,
  artwork,
}: ResultsProps) {
  const { name } = useContext(UserContext);

  return (
    <div>
      <p>
        <strong>{name ?? "Anonymous"}</strong>, your element is: {element}
      </p>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {artwork && (
        <div className="artwork">
          <h3>{artwork.title}</h3>
          <img
            src={artwork.primaryImage}
            alt={artwork.title}
            loading="lazy"
            decoding="async"
          />
          <p>{artwork.artistDisplayName}</p>
          <p>{artwork.objectDate}</p>
        </div>
      )}
    </div>
  );
}
