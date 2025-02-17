import { Skeleton } from "@/components/ui/skeleton";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const Dashboard: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="px-3 py-4">
        <div className="relative grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4">
          {[...Array(6)].map((_, index) => (
            <Skeleton key={index} className="w-full h-52 bg-gray-200/20" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="px-3 py-4">
      <Outlet />
    </div>
  );
};

export default Dashboard;
