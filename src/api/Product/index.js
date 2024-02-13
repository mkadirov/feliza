import axios from 'axios'

const baseURL = 'https://felizabackend.de/api/product'


const getAllProduct = async() => {
    try {
        const res = await axios.get(baseURL)
        if(res.status == 200) {
            return {success: true, data: res.data}
        } else {
            return {success: false}
        }
    } catch (error) {
        return {success: false}
    }
}

const getProductListByCategoryID = async(id) => {
    try {
        const res = await axios.get(baseURL + '/getProductByCategoryId/' + id);
        if(res.status == 200) {
            return {success: true, data: res.data}
        } else {
            return {success: false}
        }
    } catch (error) {
        return {success: false}
    }
}

const getProductByID = async(id) => {
    try {
        const res = await axios.get(baseURL + '/' + id);
        if(res.status == 200) {
            return {success: true, data: res.data}
            console.log('Success');
        } else {
            return {success: false}
        }
    } catch (error) {
        return {success: false}
    }
}

const getProductsByRefNumber = async(refNumber) => {
    try {
        const res = await axios.get(baseURL + '/getProductsByReferenceNumber/' + refNumber);
        if(res.status == 200) {
            return {success: true, data: res.data}
            console.log('Success');
        } else {
            return {success: false}
        }
    } catch (error) {
        return {success: false}
    }
}

export {getAllProduct, getProductListByCategoryID, getProductByID, getProductsByRefNumber}