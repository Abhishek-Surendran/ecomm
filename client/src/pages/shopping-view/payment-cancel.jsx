import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

function PaymentCancelPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Card className="p-10">
        <CardHeader className="p-0">
          <CardTitle className="text-4xl">Payment is cancelled!</CardTitle>
        </CardHeader>
        <Button className="mt-5" onClick={() => navigate("/shop/home")}>
          Go Home
        </Button>
      </Card>
    </div>
  );
}

export default PaymentCancelPage;