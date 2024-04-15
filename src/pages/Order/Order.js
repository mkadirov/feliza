import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { getOrdersById } from "../../api/Order";
import { useState } from "react";
import { useEffect } from "react";
import OrderContactInfo from "../../components/Order/OrderContactInfo";

function Order() {
  const [order, setOrder] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getOrdersById(id);
      if (res?.success) {
        console.log(res.data);
        setOrder(res.data);
      }
    };
    fetchData();
  }, []);
  return (
    <Box sx={{ marginTop: 9, paddingX: 1 }}>
      <OrderContactInfo order={order}/>

      
        <Typography fontSize={12} textAlign={"center"} fontWeight={'bold'}>
          Buyurtma qilingan mahsulotlar
        </Typography>
        <Box sx={{marginX: 1, paddingX: 1, borderLeft: '1px solid grey', paddingBottom: 2}}>
        <Box display={"flex"} justifyContent={"space-between"} sx={{borderBottom: '1px solid grey', marginTop: 4, paddingBottom: 1}}>
            <Typography fontSize={12}>
                Status
            </Typography>
            <Typography fontSize={12} sx={{color: 'brown'}}>
                {
                    order.orderStatusType == 'NEW' ? 'Buyurtma berildi' : (order.orderStatusType == 'Pack' ? 'Tayyorlandi' : 
                    (order.orderStatusType == 'SEND' ? 'Yuborildi' : 'Bekor qilindi'))
                }
            </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Order;
