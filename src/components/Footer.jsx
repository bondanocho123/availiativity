export default function Footer() {
  return (
    <footer className="bg-teal-500 text-white py-6 mt-12">
      <div className="container mx-auto text-center pt-4 space-y-4">
        <div className="flex items-center justify-center w-full">
            <div className="w-20 h-20 rounded-lg gradient-primary flex items-center justify-center">
                <img src="/Dev..png"></img>
            </div>
            <h1 className="text-4xl">Availiativity</h1>
        </div>
        <p className="text-md">Bagikan link produk ke berbagai sosial media dengan satu kali klik, dan kembali rebahan.</p>
        <div className="flex items-center justify-center space-x-8 text-sm">
            <div>Privacy Policy</div>
            <div>Term of Condition</div>
        </div>
      </div>
    </footer>
  );
}