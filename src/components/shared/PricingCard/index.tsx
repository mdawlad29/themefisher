import { Button } from "antd";

export const PricingCard = ({
  title,
  amount,
}: {
  title?: string;
  amount?: number;
}) => {
  return (
    <div className="py-12 bg-[#000]">
      {/* Header with tag */}
      <div className="relative">
        <div className="absolute top-4 left-0">
          <span className="bg-[#4A3716] text-white font-bold text-[16px] px-6 py-3 rounded-r-full capitalize">
            {title}
          </span>
        </div>

        <div className="px-6 mb-8 pt-16">
          {/* Price */}
          <div className="pb-[30px]">
            <div className="flex items-baseline">
              <span className="text-white text-[48px] font-bold">
                ${amount}
              </span>
              <span className="ml-1">/ month</span>
            </div>
          </div>

          {/* Features */}
          <div className="bg-[#121414] px-4 py-6">
            <ul className="space-y-2">
              <li className="text-[#c0bfbf] text-[16px]">Interface Design</li>
              <li className="text-[#c0bfbf] text-[16px]">Front-end Code</li>
              <li className="text-[#c0bfbf] text-[16px]">
                Back-end Development
              </li>
              <li className="text-[#c0bfbf] text-[16px]">
                Search Engine Optimization
              </li>
              <li className="text-gray-500 text-[16px] line-through">
                Awesome Support
              </li>
              <li className="text-[#c0bfbf] text-[16px]">Responsive site</li>
              <li className="text-[#c0bfbf] text-[16px]">Easy-in-use</li>
              <li className="text-[#c0bfbf] text-[16px]">Useful site</li>
              <li className="text-gray-500 text-[16px] line-through">
                Speedy web
              </li>
            </ul>
          </div>
        </div>

        {/* Button */}
        <div className="bg-black p-6">
          <Button className="px-6 py-3 !bg-transparent hover:!bg-[#F89222] border !border-[#F89222] hover:!border-[#F89222] text-[#F89222] font-bold rounded-[10px] !text-[#F89222] hover:!text-white">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};
