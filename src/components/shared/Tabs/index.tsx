const tabItems = [
  { key: "all", label: "all" },
  {
    key: "graphic-design",
    label: "graphic design",
  },
  {
    key: "mobile-app",
    label: "mobile app",
  },
  {
    key: "photography",
    label: "photography",
  },
  {
    key: "ui/ux-design",
    label: "UI/UX design",
  },
];

export const Tabs = ({ activeTab, setActiveTab }: any) => {
  const handleActiveTab = (key: string) => {
    setActiveTab(key);
  };

  return (
    <div className="px-5 overflow-x-auto bg-black rounded-[8px] mb-6 shadow-[0px_0px_20px_0px_#ffffff38]">
      <div className="flex items-center gap-6 w-max">
        {tabItems?.map((item: any) => (
          <div
            key={item.key}
            onClick={() => handleActiveTab(item.key)}
            className={`cursor-pointer ${
              activeTab === item.key
                ? "border-b-[3px] border-[#F89222] text-[#F89222]"
                : "text-[#fff]"
            }  transition text-[16px] capitalize py-[21px]`}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};
