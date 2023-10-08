"use client";
import React from "react";
import { createCache, StyleProvider, extractStyle } from "@ant-design/cssinjs";
import Entity from "@ant-design/cssinjs/lib/Cache";
import { useServerInsertedHTML } from "next/navigation";

const StyledComponentsRegistry = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const cache = React.useMemo<Entity>(() => createCache(), []);
  useServerInsertedHTML(() => {
    return (
      <style
        id="antd"
        dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
      />
    );
  });

  return <StyleProvider cache={cache}>{children}</StyleProvider>;
};

export default StyledComponentsRegistry;
