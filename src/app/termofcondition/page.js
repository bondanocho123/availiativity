import { Label } from "@/components/ui/label";
import Footer from "@/components/Footer";

export default function TermofCondition() {
    return (
        <>
            <section className="py-12 bg-teal-500">
                <div className="container mx-auto px-4 flex flex-col gap-y-10 sm:gap-y-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-12">Syarat & Ketentuan</h1>
                    </div>
                    <div className="space-y-8 text-gray-">
                        <div className="border-4 border-black p-6 bg-white shadow-[4px_4px_0_0_#000] rounded-md transition-all duration-300 hover:scale-105">
                            <Label className="font-bold text-xl text-teal-500">1. Pendahuluan</Label>
                            <p className="mt-3">Selamat datang di <strong>Availiativity</strong>. Dengan mengakses atau menggunakan layanan kami, Anda setuju untuk terikat oleh Syarat dan Ketentuan berikut. Harap membaca dengan saksama sebelum menggunakan layanan ini.</p>
                        </div>
                    </div>
                    <div className="border-4 border-black p-6 bg-white shadow-[4px_4px_0_0_#000] rounded-md transition-all duration-300 hover:scale-105">
                        <Label className="font-bold text-xl text-teal-500">2. Penerimaan Syarat</Label>
                        <p className="mt-3">Dengan menggunakan layanan kami, Anda dianggap telah membaca, memahami, dan menyetujui seluruh isi Syarat & Ketentuan ini. Jika Anda tidak setuju, silakan berhenti menggunakan layanan kami.</p>
                    </div>
                    <div className="border-4 border-black p-6 bg-white shadow-[4px_4px_0_0_#000] rounded-md transition-all duration-300 hover:scale-105">
                        <Label className="font-bold text-xl text-teal-500">3. Definisi</Label>
                        <ul className="mt-3 list-disc pl-5 space-y-2">
                            <li>"Kami", "Layanan": merujuk kepada penyedia layanan ini.</li>
                            <li>"Pengguna", "Anda": setiap individu atau entitas yang mengakses atau menggunakan layanan.</li>
                            <li>"Konten": seluruh informasi, data, teks, grafik, atau materi lain yang tersedia dalam layanan.</li>
                        </ul>
                    </div>


                    <div className="border-4 border-black p-6 bg-white shadow-[4px_4px_0_0_#000] rounded-md transition-all duration-300 hover:scale-105">
                        <Label className="font-bold text-xl text-teal-500">4. Penggunaan Layanan</Label>
                        <ul className="mt-3 list-disc pl-5 space-y-2">
                            <li>Pengguna wajib menggunakan layanan sesuai dengan aturan hukum yang berlaku.</li>
                            <li>Dilarang menggunakan layanan untuk aktivitas ilegal, penipuan, pelanggaran hak cipta, atau tindakan yang merugikan pihak lain.</li>
                            <li>Kami berhak membatasi atau menghentikan akses jika ditemukan pelanggaran.</li>
                        </ul>
                    </div>


                    <div className="border-4 border-black p-6 bg-white shadow-[4px_4px_0_0_#000] rounded-md transition-all duration-300 hover:scale-105">
                        <Label className="font-bold text-xl text-teal-500">5. Akun Pengguna</Label>
                        <ul className="mt-3 list-disc pl-5 space-y-2">
                            <li>Untuk menggunakan fitur tertentu, Anda mungkin perlu membuat akun.</li>
                            <li>Anda bertanggung jawab menjaga keamanan kredensial akun Anda.</li>
                            <li>Aktivitas yang terjadi melalui akun Anda menjadi tanggung jawab Anda sepenuhnya.</li>
                        </ul>
                    </div>

                    <div className="border-4 border-black p-6 bg-white shadow-[4px_4px_0_0_#000] rounded-md transition-all duration-300 hover:scale-105">
                        <Label className="font-bold text-xl text-teal-500">6. Privasi</Label>
                        <p className="mt-3">
                            Kami menghargai privasi Anda. Penggunaan data pribadi diatur dalam Kebijakan Privasi kami. Dengan menggunakan layanan ini, Anda menyetujui pengumpulan dan pemrosesan data sesuai kebijakan tersebut.
                        </p>
                    </div>


                    <div className="border-4 border-black p-6 bg-white shadow-[4px_4px_0_0_#000] rounded-md transition-all duration-300 hover:scale-105">
                        <Label className="font-bold text-xl text-teal-500">7. Konten Pengguna</Label>
                        <ul className="mt-3 list-disc pl-5 space-y-2">
                            <li>Pengguna mungkin dapat mengunggah, mengirimkan, atau membagikan konten.</li>
                            <li>Anda menjamin bahwa konten tersebut tidak melanggar hukum atau hak pihak lain.</li>
                            <li>Kami memiliki hak untuk menghapus konten yang melanggar ketentuan.</li>
                        </ul>
                    </div>


                    <div className="border-4 border-black p-6 bg-white shadow-[4px_4px_0_0_#000] rounded-md transition-all duration-300 hover:scale-105">
                        <Label className="font-bold text-xl text-teal-500">8. Hak Kekayaan Intelektual</Label>
                        <ul className="mt-3 list-disc pl-5 space-y-2">
                            <li>Semua material termasuk logo, desain, teks, dan fitur layanan adalah milik Z-Dev.</li>
                            <li>Dilarang menyalin, mendistribusikan, atau memodifikasi tanpa izin tertulis.</li>
                        </ul>
                    </div>

                    {/* <div className="border-4 border-black p-6 bg-white shadow-[4px_4px_0_0_#000] rounded-md transition-all duration-300 hover:scale-105">
                        <Label className="font-bold text-xl text-teal-500">9. Pembayaran dan Langganan</Label>
                        <p className="mt-3">Kami dapat memperbarui kebijakan ini sewaktu-waktu.</p>
                    </div> */}

                    <div className="border-4 border-black p-6 bg-white shadow-[4px_4px_0_0_#000] rounded-md transition-all duration-300 hover:scale-105">
                        <Label className="font-bold text-xl text-teal-500">10. Batasan Tanggung Jawab</Label>
                        <ul className="mt-3 list-disc pl-5 space-y-2">
                            <li>Menghentikan akun atau akses Anda kapan saja jika terjadi pelanggaran;</li>
                            <li>Mengubah atau menghentikan layanan tanpa pemberitahuan jika diperlukan.</li>
                        </ul>
                    </div>

                    <div className="border-4 border-black p-6 bg-white shadow-[4px_4px_0_0_#000] rounded-md transition-all duration-300 hover:scale-105">
                        <Label className="font-bold text-xl text-teal-500">12. Perubahan Syarat & Ketentuan</Label>
                        <p className="mt-3">
                            Syarat & Ketentuan dapat diperbarui sewaktu-waktu. Perubahan akan diberitahukan melalui situs atau email. Dengan terus menggunakan layanan, Anda menyetujui versi terbaru.
                        </p>
                    </div>

                    <div className="border-4 border-black p-6 bg-white shadow-[4px_4px_0_0_#000] rounded-md transition-all duration-300 hover:scale-105">
                        <Label className="font-bold text-xl text-teal-500">13. Hukum yang Berlaku</Label>
                        <p className="mt-3">
                            Syarat & Ketentuan ini diatur oleh hukum Republik Indonesia.
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}