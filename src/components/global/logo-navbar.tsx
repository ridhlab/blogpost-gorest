import { SiQuickbooks } from "react-icons/si";

export default function LogoNavbar() {
    return (
        <div className="flex items-center gap-x-1">
            <SiQuickbooks className="text-2xl text-blue-500" />
            <h1 className="font-semibold text-xl">MridGorest</h1>
        </div>
    );
}
