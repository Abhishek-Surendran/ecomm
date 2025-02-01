import AdminProductTile from "@/components/admin-view/product-tile";
import { fetchAllProducts } from "@/store/admin/products-slice";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function AdminProducts() {
  const { adminProductList } = useSelector((state) => state.adminProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <Fragment>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        {adminProductList && adminProductList.length > 0
          ? adminProductList.map((productItem) => (
              <AdminProductTile product={productItem} />
            ))
          : <h1>No products found</h1>}
      </div>
    </Fragment>
  );
}

export default AdminProducts;
