import axios from "axios";

const AuthService = {
    signup: async (user) => {
            try {
              // create formdata object using user object
              const userEdit = new FormData();
              userEdit.append("email", user.email);
              userEdit.append("first_name", user.first_name);
              userEdit.append("last_name", user.last_name);
              userEdit.append("password", user.password);
              userEdit.append("confirm_password", user.confirm_password);
              userEdit.append("mobile_number", `0${user.local_number}`);
              userEdit.append("dob", `1994-01-16`);
              userEdit.append("gender", "male");
        
              const response = await axios.post(
                `https://mditest.elifeamerica.com/api/v1/register`,
                userEdit,
                {
                  headers: {
                    "Content-Type": "multipart/form-data",
                  },
                }
              );
              return response.data;
              
            
              
            } catch (error) {
              throw new Error("Login failed. Please check your credentials.");
            }
    },



   login: async (user) => {
    try {
        // Create a new FormData object
        const formData = new FormData();
        formData.append("username", user.username);
        formData.append("password", user.password);
        formData.append("client_id", 4);
        formData.append("client_secret", 'sfQfhp6tDeGvEp7ZhVwk0MjbpaP55tJ1oJAKuZAE');
        formData.append("scope", "");
        formData.append("grant_type", "password");
  
        const response = await axios.post(`https://mditest.elifeamerica.com/oauth/token`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
  
        return response.data;
      } catch (error) {
        throw new Error("Login failed. Please check your credentials.");
      }
}

}

export default AuthService;