import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();


  if (location.pathname === "/") {
    if (!isAuthenticated) {
      return <Navigate to="/auth/login" />;
    } else {
      if (user?.role === "admin") {
        return <Navigate to="/admin/dashboard" />;
      } else if (user?.role === "seller") {
        return <Navigate to="/seller/products" />;
      } else {
        return <Navigate to="/shop/home" />;
      }
    }
  }

  if (
    !isAuthenticated &&
    !(
      location.pathname.includes("/login") ||
      location.pathname.includes("/register")
    )
  ) {
    return <Navigate to="/auth/login" />;
  }

  if (
    isAuthenticated &&
    (location.pathname.includes("/login") ||
      location.pathname.includes("/register"))
  ) {
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" />;
    } else if (user?.role === "seller") {
      return <Navigate to="/seller/products" />;
    } else {
      return <Navigate to="/shop/home" />;
    }
  }

  if (
    isAuthenticated &&
    user?.role !== "admin" &&
    location.pathname.includes("admin")
  ) {
    return <Navigate to="/unauth-page" />;
  } else if (
    isAuthenticated &&
    user?.role !== "seller" &&
    location.pathname.includes("seller")
  ) {
    return <Navigate to="/unauth-page" />;
  } else if (
    isAuthenticated &&
    user?.role !== "user" &&
    location.pathname.includes("shop")
  ) {
    return <Navigate to="/unauth-page" />;
  }
  
  return <>{children}</>;
}

export default CheckAuth;
