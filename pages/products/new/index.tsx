import { withAuth } from "../../../src/components/commons/hoc/withAuth";
import { useAuth } from "../../../src/components/commons/hooks/customs/useAuth";
import CreateProduct from "../../../src/components/units/products/write/ProductWrite.index";

export default function CreateProductPage() {
  useAuth();
  return <CreateProduct isEdit={false} />;
}
// export default withAuth(CreateProductPage);
