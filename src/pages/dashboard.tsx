import { PieChartComponent } from "@/components/my-component/pie-chart-stats";
import { StatsBar } from "@/components/my-component/stats-bar";
import { Skeleton } from "@/components/ui/skeleton";
import React, { useEffect, useState } from "react";

export default function Dashboard(): React.ReactNode {
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
        <div className="relative grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-2">
          <Skeleton className="w-full h-44 bg-gray-200/20" />
          <Skeleton className="w-full h-44 bg-gray-200/20" />
          <Skeleton className="w-full h-44 bg-gray-200/20" />
          <Skeleton className="w-full h-44 bg-gray-200/20" />
          <Skeleton className="w-full h-44 bg-gray-200/20" />
          <Skeleton className="w-full h-44 bg-gray-200/20" />
        </div>
      </div>
    );
  }

  return (
    <div className="px-3 py-4 grid md:grid-cols-2 grid-cols-1 gap-2 relative">
      <PieChartComponent />
      <StatsBar />
    </div>
  );
}
