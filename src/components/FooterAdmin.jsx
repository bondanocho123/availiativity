import { Button } from "@/components/ui/button";

const HeaderAdmin = () => {
  return (
    <header className="flex justify-between items-center p-4 border-b-4 border-black bg-gray-100 shadow-[4px_4px_0px_#00ffff]">
      <h1 className="text-2xl font-bold tracking-wide">Admin Panel</h1>
      <Button className="border-2 border-black bg-white hover:bg-black hover:text-white font-bold">
        Logout
      </Button>
    </header>
  );
};

export default HeaderAdmin;
