export const getProfileData = async(userName:string): Promise<any> => {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    if (response.ok) {
      const result = await response.json();
      return result;
    }
  };