export function useStorage() {
  const PREFIX: string = "_slack_clone_avion_";
  
  const setItem = (key: string, value: string): void =>
    localStorage.setItem(PREFIX+key, value);

  const getItem = (key: string): string | null => 
    localStorage.getItem(PREFIX+key) as string | null;

  const removeItem = (key: string): void =>
    localStorage.removeItem(PREFIX+key);

  return {
    setItem, 
    getItem,
    removeItem,
  };
}
