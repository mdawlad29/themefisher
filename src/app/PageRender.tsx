"use client";

import { Loader } from "@/components/shared/Loader";
import { unstableSetRender } from "antd";
import { AppProgressBar } from "next-nprogress-bar";
import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

const PageRender = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setLoading] = useState(true);

  unstableSetRender((node, container) => {
    (container as any)._reactRoot ||= createRoot(container);
    const root = (container as any)._reactRoot;
    root.render(node);
    return async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
      root.unmount();
    };
  });

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div>
      {!isLoading ? <Loader /> : <>{children}</>}

      <AppProgressBar
        height="2px"
        color="#09a4ff"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </div>
  );
};

export default PageRender;
