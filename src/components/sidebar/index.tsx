import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { APP_NAME } from "@/config/app-settings";
import BottomBar from "../bottom-bar";

export default function Sidebar() {
  return (
    <>
    <aside className="w-64 p-4 fixed top-0 z-50 bg-white bottom-0 hidden md:block">
      <Link
				to={'/'}
				className='text-2xl font-bold hover:text-primary transition-colors'
			>
				{APP_NAME}
			</Link>
      <div className="space-y-8">
        <Navigation />
      </div>
    </aside>
    <BottomBar />
    </>
  );
}