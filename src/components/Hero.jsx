const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-hero.jpg')" }}
    >
        <div className="container flex flex-row grid lg:grid-cols-2">
            <div>

            </div>
            <div className="mx-auto flex flex-col px-6 py-12 text-center md:py-24 md:px-10 lg:px-32">
                <h1 className="text-4xl font-bold text-teal-500 md:text-5xl lg:text-6xl">
                Bikin Rebahanmu Lebih Produktif
                </h1>
                <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 md:text-xl font-bold">
                Gunakan fitur broadcast kami untuk menjangkau lebih banyak pelanggan
                dengan mudah dan efisien dan buat rak produk afiliasimu sendiri!!
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                    href="#layanan"
                    className="rounded-base bg-teal-500 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-600 md:text-base"
                >
                    Jelajahi Layanan Kami
                </a>
                <a
                    href="#kontak"
                    className="rounded-base border-2 border-teal-500 px-6 py-3 text-sm font-semibold text-teal-500 hover:bg-teal-50 md:text-base"
                >
                    Hubungi Kami
                </a>
                </div>
            </div>
        </div>
      
    </section>
  );
};

export default Hero;
