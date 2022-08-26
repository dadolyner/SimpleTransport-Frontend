import axios from "../api/axios";

const RefreshUsersData = async() => {
    localStorage.removeItem('simpletransport_userInfo');
    
    const accessToken = localStorage.getItem('simpletransport_accessToken');
    const userInfoResponse = await axios.get('/user/me', { headers: { Authorization: 'Bearer ' + accessToken } })
    
    localStorage.setItem('simpletransport_userInfo', JSON.stringify(userInfoResponse.data))
    window.location.reload();
}
export default RefreshUsersData;