/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

const useLocalStorage = () => {
    const getLocalStorage = () =>
      localStorage.getItem("user") &&
      JSON.parse(localStorage.getItem("user") as string);
    const setLocalStorage = ({ key, value }: any) =>
      key
        ? localStorage.setItem(
            "user",
            JSON.stringify({ ...getLocalStorage(), [key]: value })
          )
        : localStorage.setItem("user", JSON.stringify(value));
    const clearStorage = () => localStorage.clear();
    const removeItem = (key: string) => {
      const { [key]: value, ...rest } = getLocalStorage();
      localStorage.setItem("user", JSON.stringify(rest));
    };
  
    return { setLocalStorage, clearStorage, getLocalStorage, removeItem };
  };
  
  export default useLocalStorage;
  