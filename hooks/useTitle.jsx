import React from "react";

export default function useTitle(title = "Vans | #VANLIFE") {
  const prevTitle = React.useRef(document.title);

  React.useEffect(() => {
    if (!document?.title) return;
    document.title = title;

    return () => {
      document.title = prevTitle.current;
    };
  }, [title]);
}
