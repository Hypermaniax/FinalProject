import React from "react";

import ChevronLeftIcon from "@svg/chevron-left.svg?react";
import ChevronRightIcon from "@svg/chevron-right.svg?react";
import TripleDotsIcon from "@svg/triple-dots.svg?react";
import { useTranslation } from "react-i18next";

export type AppTablePaginationProps = {
    currentPage: number;
    lastPage: number;
    totalItems: number;
    perPage?: number;
    setPerPage?: (perPage: number) => void;
    onNavigateToPage: (selectedPage: number) => void;
};
export const AppTablePagination: React.FC<AppTablePaginationProps> = ({
    currentPage,
    lastPage,
    totalItems,
    perPage,
    setPerPage,
    onNavigateToPage: _navigate,
}) => {
    const { t } = useTranslation(["app-table"]);

    const onNavigateToPage = (page: number) => {
        return () => {
            _navigate(page);
        };
    };

    return (
        <div className="hidden md:flex gap-[16px]  flex-col lg:flex-row items-center">
            <div className="flex flex-row gap-[16px] items-center">
                <p className="text-[14px] text-[#212529] leading-[120%] font-medium">
                    {t("{count}-items", {
                        count: totalItems,
                    })}
                </p>
                <div
                    className="border border-[#8E90983D] border-opacity-[24%] border-[1.5px] py-[12px] px-[12px] rounded-[5px] cursor-pointer"
                    onClick={() => {
                        if (currentPage <= 1) {
                            return;
                        }

                        onNavigateToPage(currentPage - 1)();
                    }}
                >
                    <ChevronLeftIcon width={18} height={18} />
                </div>
                <div className="border border-[#8E90983D] border-opacity-[24%] border-[1.5px] rounded-[5px] flex flex-row items-center cursor-pointer">
                    {currentPage - 2 > 1 && (
                        <>
                            <div
                                className="text-[16px] leading-[120%] py-[12px] px-[12px]"
                                onClick={onNavigateToPage(1)}
                            >
                                1
                            </div>
                            <TripleDotsIcon
                                width={18}
                                height={18}
                                className="text-[#566478]"
                            />
                        </>
                    )}
                    {currentPage - 2 >= 1 && (
                        <div
                            className="text-[16px] leading-[120%] py-[12px] px-[12px]"
                            onClick={onNavigateToPage(currentPage - 2)}
                        >
                            {currentPage - 2}
                        </div>
                    )}
                    {currentPage - 1 >= 1 && (
                        <div
                            className="text-[16px] leading-[120%] py-[12px] px-[12px]"
                            onClick={onNavigateToPage(currentPage - 1)}
                        >
                            {currentPage - 1}
                        </div>
                    )}
                    <div
                        className="text-[16px] leading-[120%] py-[12px] px-[12px] text-[#0071E7] bg-[#AECEFD40] bg-opacity-[24%]"
                        onClick={onNavigateToPage(currentPage)}
                    >
                        {currentPage}
                    </div>
                    {currentPage + 1 <= lastPage && (
                        <div
                            className="text-[16px] leading-[120%] py-[12px] px-[12px]"
                            onClick={onNavigateToPage(currentPage + 1)}
                        >
                            {currentPage + 1}
                        </div>
                    )}
                    {currentPage + 2 <= lastPage && (
                        <div
                            className="text-[16px] leading-[120%] py-[12px] px-[12px]"
                            onClick={onNavigateToPage(currentPage + 2)}
                        >
                            {currentPage + 2}
                        </div>
                    )}
                    {currentPage + 2 < lastPage && (
                        <>
                            <TripleDotsIcon
                                width={18}
                                height={18}
                                className="text-[#566478]"
                            />
                            <div
                                className="text-[16px] leading-[120%] py-[12px] px-[12px]"
                                onClick={onNavigateToPage(lastPage)}
                            >
                                {lastPage}
                            </div>
                        </>
                    )}
                </div>
                <div
                    className="border border-[#8E90983D] border-opacity-[24%] border-[1.5px] py-[12px] px-[12px] rounded-[5px] cursor-pointer"
                    onClick={() => {
                        if (currentPage >= lastPage) {
                            return;
                        }

                        onNavigateToPage(currentPage + 1)();
                    }}
                >
                    <ChevronRightIcon width={18} height={18} />
                </div>
            </div>
            {perPage && setPerPage && (
                <div className="flex flex-row gap-[16px] items-center">
                    <p className="text-[#212529] text-[14px] leading-[120%]">
                        {t("rows-per-page")}
                    </p>
                    <select
                        value={perPage}
                        onChange={(e) => setPerPage?.(parseInt(e.target.value))}
                        className="border border-[#8E90983D] border-opacity-[24%] border-[1.5px] py-[12px] px-[12px] rounded-[5px] text-[#212529] text-[14px] leading-[120%]"
                    >
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </select>
                </div>
            )}
        </div>
    );
};
