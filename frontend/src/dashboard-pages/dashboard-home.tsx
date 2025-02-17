import { PieChartComponent } from "@/components/my-component/pie-chart-stats";
import { StatsBar } from "@/components/my-component/stats-bar";

import React, { useEffect, useState } from "react";
import { MoreHorizontal } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useUser } from "@clerk/clerk-react";
import { Project } from "@/types/types";
import { projects } from "@/data/data";

export default function DashboardHome(): React.ReactNode {
  const [projectData, setProjectData] = useState<Project[]>([]);
  const { user } = useUser();

  useEffect(() => {
    setProjectData(projects);
  }, []);

  return (
    <div className="px-3 py-4 ">
      <div className="text-center mt-10">
        <h1 className="text-2xl text-left md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-300 to-gray-500 mb-6">
          Your Portfolios
        </h1>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-6">
        {projectData.map((project, index) => (
          <Card
            key={index}
            className="w-full relative overflow-hidden cursor-pointer"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url("${project.thumbnail}")`,
              }}
            >
              <div className="absolute inset-0 bg-black/80" />
            </div>

            <div className="relative z-10 text-white">
              <CardHeader className="flex flex-row items-center px-6 py-4 space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg">
                  <img
                    src={user?.imageUrl}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <p className="text-gray-300 text-sm">
                    Created by {user?.fullName || "Guest User"}
                  </p>
                </div>
                <button className="absolute right-4 top-1/8 -translate-y-1/2 p-2 text-gray-300 hover:text-white">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </CardHeader>

              <CardContent className="px-6 pb-4">
                <div className="text-sm space-y-2">
                  <p>
                    <span className="text-gray-300">Created At:</span>{" "}
                    <span className="font-medium">
                      {new Date(project.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </p>
                  <p>
                    <span className="text-gray-300">Deployed Branch:</span>{" "}
                    <span className="text-blue-400 font-medium">
                      {project.branch}
                    </span>
                  </p>
                  <p className="flex items-center">
                    <span className="text-gray-300">Active Status:</span>
                    <span
                      className={`ml-2 px-2 py-1 rounded-md text-xs font-medium ${
                        project.status === "active"
                          ? "bg-green-500/20 text-green-300"
                          : project.status === "inactive"
                          ? "bg-yellow-500/20 text-yellow-300"
                          : "bg-red-500/20 text-red-300"
                      }`}
                    >
                      {project.status.charAt(0).toUpperCase() +
                        project.status.slice(1)}
                    </span>
                  </p>
                </div>

                <div className="flex justify-between items-center text-sm mt-4 border-t border-white/20 pt-3">
                  <p>
                    <span className="text-gray-300">Views:</span>{" "}
                    <strong className="font-medium">
                      {project.metrics.views.toLocaleString()}
                    </strong>
                  </p>
                  <p>
                    <span className="text-gray-300">Unique Visitors:</span>{" "}
                    <strong className="font-medium">
                      {project.metrics.uniqueVisitors.toLocaleString()}
                    </strong>
                  </p>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
      <div className="text-center mt-16">
        <h1 className="text-2xl text-left md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-300 to-gray-500 mb-6">
          Advanced Analystics
        </h1>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-6">
        <PieChartComponent />
        <StatsBar />
      </div>
    </div>
  );
}
