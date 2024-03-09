import axios from 'axios'

const baseURL = 'https://felizabackend.de/api/order/'


const addOrder = async(order) => {

    try {
        console.log(order);
        const token = localStorage.getItem('token');
        console.log(token);
        const res = await axios.post(baseURL + 'addOrder', order, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
        });
        if(res.status == 200) {
            return {success: true, data: res.data}
        }else {
            return {success: false}
        }
    } catch (error) {
        return {success: false}
    }
}

export {addOrder}