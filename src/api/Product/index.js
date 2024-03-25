import axios from 'axios'

const baseURL = 'https://felizabackend.de/api/product'


const getAllProduct = async() => {
    try {
        const res = await axios.get(baseURL + '/getAllProducts')
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
        const res = await axios.get(baseURL + '/getProductById/' + id);
        if(res.status == 200) {
            return {success: true, data: res.data}
            
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
            
        } else {
            return {success: false}
        }
    } catch (error) {
        return {success: false}
    }
}


const getFilteredProducts = async (filterRequest, pageable) => {
    try {
        const res = await axios.post(baseURL + '/filterAndSortProducts', filterRequest, {
            params: {
                page: 1, // Change this according to the desired page
                size: 10, // Change this according to the desired page size
            }
        });
        
        if (res.status === 200) {
            return { success: true, data: res.data, message: 'Success'};
        } else {
            return { success: false, message: 'resError' };
        }
    } catch (error) {
        return { success: false, message: 'catchError' };
    }
};


 
export {getAllProduct, getProductListByCategoryID, getProductByID, getProductsByRefNumber, getFilteredProducts}