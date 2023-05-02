import CheckoutForm from "../../components/forms/CreateDaoForm/CheckoutForm";
import { CreateDaoLayout } from "../../components/layouts";

const Checkout = () => {
  return (
    <CreateDaoLayout>
        <div
          className="p-8 rounded-xl w-full bg-white trans shadow-card"
        >
          <CheckoutForm />
        </div>
    </CreateDaoLayout>
  );
};

export default Checkout;
