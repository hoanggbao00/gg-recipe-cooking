import Header from "@/components/header";
import NotFound from "@/components/common/not-found";
import { Outlet, useParams } from "react-router-dom";

export default function RecipeLayout() {
  const params = useParams();

  if(!params.id) return <NotFound />

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-amber-100 py-4">
      <Header />
      <div className="mt-14">
      <Outlet />
      </div>
    </div>
  );
}