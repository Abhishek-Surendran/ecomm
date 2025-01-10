import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { capturePayment } from "@/store/shop/order-slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

function PaypalReturnPage() {
  const dispatch = useDispatch();
  const location = useLocation();
  

  useEffect(() => {
    const orderId = JSON.parse(sessionStorage.getItem("currentOrderId"));

      dispatch(capturePayment({orderId })).then((data) => {
        console.log(data.payload, "session data");
        if (data?.payload?.success) {
          sessionStorage.removeItem("currentOrderId");
          window.location.href = "/shop/payment-success";
        }
      });
  }, [dispatch]);

  return (
    <div className="flex items-center justify-center h-screen">
      <Card>
      <CardHeader>
        <CardTitle>Confirming Payment...Please wait!</CardTitle>
      </CardHeader>
    </Card>
    </div>
  );
}

export default PaypalReturnPage;
