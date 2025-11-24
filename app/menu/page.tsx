import Menu from "@/components/menu/menu";
import React from "react";

export interface PageProps {
  searchParams: Promise<{ category?: string }>;
}

const Page: React.FC<PageProps> = ({ searchParams }) => {
  return <Menu searchParams={searchParams} />;
};

export default Page;
