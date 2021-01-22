import axios from 'axios';

const USERS_API_BASE_URL = "http://localhost:8080/api/v1/users";

class UserService {

    createUser(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getUserById(userId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
    
}

export default new UserService();