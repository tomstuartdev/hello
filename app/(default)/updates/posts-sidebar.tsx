"use client";

import { CalendarFilled, InfoCircleFilled, UsergroupAddOutlined, CopyrightCircleFilled, ArrowUpOutlined, NotificationTwoTone, NotificationFilled } from "@ant-design/icons";
import { SparklesIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export default function PostsSidebar({
  categories,
  selectedCategory,
  onCategoryChange,
}: {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}) {
  const handleCategoryChange = (category: string) => {
    onCategoryChange(category);
  };

  const getIcon = (category: string) => {
    switch (category) {
      case "Events":
        return (
          <CalendarFilled />
        );
      
      case "General":
        return (
          <NotificationFilled />
        );
      case "Partnerships":
        return (
          <UsergroupAddOutlined/>
        );
      case "Legal":
        return (
          <CopyrightCircleFilled/>
        );
      default:
        return null;
    }
  };

  return (
    <aside className="mb-12 md:mb-0 md:w-[276px] md:mr-8 md:shrink-0 md:p-4">
      <div className="font-semibold text-xs text-neutral-700/80 uppercase tracking-normal mb-3">
        Select category
      </div>
      <ul className="space-y-0.5">
        {categories.map((category, index) => {
          return (
            <li key={index}>
              <a
                className={`flex items-center font-medium text-md text-gray-800 dark:text-gray-200 px-4 h-9 space-x-4 transition-colors rounded-lg ${selectedCategory === category ? "bg-gradient-to-tr from-[#A8FF00] to-white/50 dark:bg-gradient-to-b dark:from-[#FFFFFF20] dark:to-[#FFFFFF10] shadow shadow-black/5" : "hover:bg-[#A8FF0050] dark:hover:bg-gray-700/20"}`}
                href="#0"
                onClick={(e) => {
                  e.preventDefault();
                  handleCategoryChange(category);
                }}
              >
                {getIcon(category)}
                <span>{category}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
