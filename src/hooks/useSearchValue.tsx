import { useState } from "react";

export const useSearchValue = () => {
    const [searchValue, setSearchValue] = useState<string>('');

    const handleSearch = (value: string) => {
        setSearchValue(value)
    }

    return { handleSearch, searchValue };
};