import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

function PaymentSuccessPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Card className="p-10">
        <CardHeader className="p-0">
          <CardTitle className="text-4xl">Payment is successfull!</CardTitle>
        </CardHeader>
        <Button className="mt-5 w-full" onClick={() => navigate("/shop/account")}>
          View Orders
        </Button>
      </Card>
    </div>
  );
}

export default PaymentSuccessPage;
