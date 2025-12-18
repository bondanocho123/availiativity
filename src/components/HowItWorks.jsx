import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function HowItWorks() {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4 flex flex-col gap-y-10 sm:gap-y-32 flex justify-center items-center">
                <h2 className="text-6xl font-bold text-center text-gray-600 w-1/2">Bagaimana <span className="text-teal-500">Availiativity</span> Bekerja ?</h2>
                <div className="grid lg:grid-cols-2 sm:grid-cols-1 items-center justify-center gap-y-12">
                    <div className="order-2 sm:order-2 lg:order-1">
                        <Card className="sm:w-full md:w-3/4 lg:w-3/4 mx-auto border-2 border-teal-500">
                            <CardHeader>
                                <CardTitle className="text-3xl font-bold flex flex-wrap items-center space-x-4 space-y-4">
                                    <div><div className="w-16 h-16 mx-auto rounded-full bg-teal-500 text-white flex items-center justify-center text-2xl font-bold">1</div></div>
                                    <div className="sm:mt-4">Tambahkan Link Produk Anda</div>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                Tambahkan informasi produk afiliasi yang ingin Anda bagikan ke rak produk pribadi Anda.
                            </CardContent>
                        </Card>
                    </div>

                    <div className="flex justify-center order-1 sm:order-1 lg:order-2">
                        <div className="relative w-full max-w-sm mx-auto">

                            <div className="absolute inset-0 z-0 opacity-80 animate-bounce">
                                <div className="mx-auto w-full h-full max-w-sm rounded-md p-4">
                                    <div className="flex animate-pulse space-x-4">
                                        <div className="flex-1 space-y-6 py-1">
                                            <div className="h-2 rounded bg-gray-200"></div>
                                            <div className="space-y-3">
                                                <div className="grid grid-cols-3 gap-4">
                                                <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                                                <div className="col-span-1 h-2 rounded bg-gray-200"></div>
                                                </div>
                                                <div className="h-2 rounded bg-gray-200"></div>
                                            </div>
                                        </div>
                                        <div className="size-10 rounded-full bg-gray-200"></div>
                                    </div>
                                </div>
                            </div>

                            <img
                                src="/shop.svg"
                                className="relative z-10 w-full"
                            />

                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 sm:grid-cols-1 sm:space-y-12 justify-center items-center gap-y-12">
                    <div className="flex justify-center">
                        <img src="/buffer-sosmed.svg" alt="" className="w-[50%] h-[50%]"/>
                    </div>
                    <div>
                        <Card className="sm:w-full md:w-3/4 lg:w-3/4 mx-auto border-2 border-teal-500">
                            <CardHeader>
                                <CardTitle className="text-3xl font-bold flex items-center space-x-4">
                                    <div><div className="w-16 h-16 mx-auto rounded-full bg-teal-500 text-white flex items-center justify-center text-2xl font-bold">2</div></div>
                                    <div className="flex-wrap justify-end">Hubungkan ke Sosial Media Anda</div>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                Hubungkan akun <span className="font-bold">Availiativity</span> Anda ke berbagai platform sosial media untuk memudahkan berbagi link produk.
                            </CardContent>
                        </Card>
                    </div>
                    
                </div>
                <div className="grid lg:grid-cols-2 sm:grid-cols-1 items-center justify-center gap-y-12">
                    <div className="order-2 sm:order-2 lg:order-1">
                        <Card className="sm:w-full md:w-3/4 lg:w-3/4 mx-auto border-2 border-teal-500">
                            <CardHeader>
                                <CardTitle className="text-3xl font-bold flex flex-wrap items-center space-x-4 space-y-4">
                                    <div><div className="w-16 h-16 mx-auto rounded-full bg-teal-500 text-white flex items-center justify-center text-2xl font-bold">3</div></div>
                                    <div className="">Post dan Publish Link Produk Anda</div>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                Unggah dan publikasikan link produk Anda ke rak pribadi, lalu bagikan ke berbagai platform sosial media dengan mudah.
                            </CardContent>
                        </Card>
                    </div>

                    <div className="flex justify-center order-1 sm:order-1 lg:order-2">
                        <img src="/post.svg" alt="" className="w-[50%] h-[50%]"/>
                    </div>
                </div>
            </div>
        </section>
    );
}