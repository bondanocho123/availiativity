import { Label } from "@/components/ui/label";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
    return (
        <>
            <section className="py-12 bg-teal-500">
                <div className="container mx-auto px-4 flex flex-col gap-y-10 sm:gap-y-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-12">Kebijakan Privasi</h1>
                    </div>
                    <div className="space-y-8 text-gray-">
                        <div className="border-4 border-black p-6 bg-white shadow-[4px_4px_0_0_#000] rounded-md transition-all duration-300 hover:scale-105">
                            <Label className="font-bold text-xl text-teal-500">1. Pendahuluan</Label>
                            <p className="mt-3">Selamat datang di <strong>Availiativity</strong>. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda.</p>
                        </div>
                    </div>
                    <div className="border-4 border-black p-6 bg-white shadow-[4px_4px_0_0_#000] rounded-md transition-all duration-300 hover:scale-105">
                        <Label className="font-bold text-xl text-teal-500">2. Informasi yang Kami Kumpulkan</Label>
                        <ul className="mt-3 list-disc pl-5 space-y-2">
                            <li>Nama, email, dan akun sosial media</li>
                            <li>Informasi produk atau link yang Anda tambahkan</li>
                            <li>Alamat IP, browser, perangkat, dan aktivitas penggunaan</li>
                            <li>Cookies dan teknologi pelacakan lainnya</li>
                        </ul>
                    </div>
                    <div className="border-4 border-black p-6 bg-white shadow-[4px_4px_0_0_#000] rounded-md transition-all duration-300 hover:scale-105">
                        <Label className="font-bold text-xl text-teal-500">3. Cara Kami Menggunakan Informasi</Label>
                        <p className="mt-3">Kami menggunakan data untuk menyediakan layanan, meningkatkan platform, mencegah penyalahgunaan, dan melakukan analisis penggunaan.</p>
                    </div>


                    <div className="border-4 border-black p-6 bg-white shadow-[4px_4px_0_0_#000] rounded-md transition-all duration-300 hover:scale-105">
                        <Label className="font-bold text-xl text-teal-500">4. Berbagi Informasi</Label>
                        <p className="mt-3">Kami tidak menjual data Anda. Informasi hanya dibagikan dengan penyedia layanan, otoritas hukum, atau mitra tertentu dengan izin Anda.</p>
                    </div>


                    <div className="border-4 border-black p-6 bg-white shadow-[4px_4px_0_0_#000] rounded-md transition-all duration-300 hover:scale-105">
                        <Label className="font-bold text-xl text-teal-500">5. Cookies</Label>
                        <p className="mt-3">Kami menggunakan cookies untuk sesi login, analitik, dan preferensi pengguna.</p>
                    </div>


                    <div className="border-4 border-black p-6 bg-white shadow-[4px_4px_0_0_#000] rounded-md transition-all duration-300 hover:scale-105">
                        <Label className="font-bold text-xl text-teal-500">6. Keamanan Data</Label>
                        <p className="mt-3">Kami menerapkan enkripsi, pembatasan akses, dan monitoring keamanan berkala.</p>
                    </div>


                    <div className="border-4 border-black p-6 bg-white shadow-[4px_4px_0_0_#000] rounded-md transition-all duration-300 hover:scale-105">
                        <Label className="font-bold text-xl text-teal-500">7. Hak Anda</Label>
                        <ul className="mt-3 list-disc pl-5 space-y-2">
                            <li>Akses dan koreksi data</li>
                            <li>Permintaan penghapusan data</li>
                            <li>Penarikan persetujuan</li>
                            <li>Ekspor data</li>
                        </ul>
                    </div>


                    <div className="border-4 border-black p-6 bg-white shadow-[4px_4px_0_0_#000] rounded-md transition-all duration-300 hover:scale-105">
                        <Label className="font-bold text-xl text-teal-500">8. Masa Retensi Data</Label>
                        <p className="mt-3">Data disimpan selama diperlukan untuk layanan atau kewajiban hukum.</p>
                    </div>


                    <div className="border-4 border-black p-6 bg-white shadow-[4px_4px_0_0_#000] rounded-md transition-all duration-300 hover:scale-105">
                        <Label className="font-bold text-xl text-teal-500">9. Perubahan Kebijakan Privasi</Label>
                        <p className="mt-3">Kami dapat memperbarui kebijakan ini sewaktu-waktu.</p>
                    </div>


                    <div className="border-4 border-black p-6 bg-white shadow-[4px_4px_0_0_#000] rounded-md transition-all duration-300 hover:scale-105">
                        <Label className="font-bold text-xl text-teal-500">10. Kontak</Label>
                        <p className="mt-3">Jika ada pertanyaan, silakan hubungi kami melalui email tertera.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}