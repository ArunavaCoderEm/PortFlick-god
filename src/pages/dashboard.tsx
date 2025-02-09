import { Skeleton } from "@/components/ui/skeleton";
import { LoaderCircle } from "lucide-react";
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
      <div className="flex items-center justify-center min-h-80">
        <LoaderCircle className="w-12 opacity-100 h-12 text-white animate-spin" />
      </div>
    );
  }

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
