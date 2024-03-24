import React, {useEffect, Box} from 'react'
import { useParams } from 'react-router-dom'
import { getAllCollectionByID } from '../../api/LookCollections';

function Look() {
    const {id} = useParams();
    const [lookProduct, setLookProduct] = useState('')

    useEffect(() => {
       const fetchData = async () => {
        const res = await getAllCollectionByID(id);
            if(res?.success) {
                setLookProduct(res.data);
            }
       }

       fetchData();
    }, [id])
    
  return (
    <Box>

    </Box>
  )
}

export default Look