import React, { useMemo } from "react";

function UseCallbackHeader() {
  console.log("Header Rendered");

  return (
    <div>
      <p>Header</p>
    </div>
  );
}

export default React.memo(UseCallbackHeader);
