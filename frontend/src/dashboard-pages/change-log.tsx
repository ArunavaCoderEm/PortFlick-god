import React from "react";
import {
  GitCommit,
  Star,
  Zap,
  Bug,
  Package,
  ArrowUpCircle,
} from "lucide-react";
import { changelogData } from "@/data/data";

const getChangeIcon = (type: string) => {
  switch (type) {
    case "feature":
      return <Star className="w-5 h-5 text-emerald-400" />;
    case "improvement":
      return <Zap className="w-5 h-5 text-blue-400" />;
    case "bugfix":
      return <Bug className="w-5 h-5 text-amber-400" />;
    case "dependency":
      return <Package className="w-5 h-5 text-purple-400" />;
    case "breaking":
      return <ArrowUpCircle className="w-5 h-5 text-rose-400" />;
    default:
      return <GitCommit className="w-5 h-5 text-gray-400" />;
  }
};

const getChangeBadgeColor = (type: string) => {
  switch (type) {
    case "feature":
      return "bg-emerald-900/50 text-emerald-400 border-emerald-700";
    case "improvement":
      return "bg-blue-900/50 text-blue-400 border-blue-700";
    case "bugfix":
      return "bg-amber-900/50 text-amber-400 border-amber-700";
    case "dependency":
      return "bg-purple-900/50 text-purple-400 border-purple-700";
    case "breaking":
      return "bg-rose-900/50 text-rose-400 border-rose-700";
    default:
      return "bg-gray-800 text-gray-400 border-gray-700";
  }
};

export default function Changelog(): React.ReactNode {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-gray-300 to-gray-500">
          Changelog
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Track the evolution of our product with detailed release notes. We
          document all significant changes, improvements, and fixes.
        </p>
      </header>

      <div className="space-y-12">
        {changelogData.map((release, index) => (
          <div key={release.version} className="relative">
            {index !== changelogData.length && (
              <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gray-700" />
            )}

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1 bg-gray-800 rounded-full p-2 border border-gray-700 z-10">
                <GitCommit className="w-6 h-6 text-blue-400" />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-baseline gap-2 mb-2">
                  <h2 className="text-2xl font-bold text-white">
                    v{release.version}
                  </h2>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-800 text-gray-400 border border-gray-700">
                    {release.date}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-2 text-gray-200">
                  {release.title}
                </h3>
                <p className="text-gray-400 mb-6">{release.description}</p>

                <div className="space-y-4">
                  {release.changes.map((change, changeIndex) => (
                    <div
                      key={changeIndex}
                      className="flex items-start gap-3 p-4 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:bg-gray-800 transition-colors"
                    >
                      <div className="flex-shrink-0 mt-0.5">
                        {getChangeIcon(change.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className={`px-2 py-0.5 text-xs font-medium rounded-full border ${getChangeBadgeColor(
                              change.type
                            )}`}
                          >
                            {change.type}
                          </span>
                        </div>
                        <p className="text-gray-300">{change.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
