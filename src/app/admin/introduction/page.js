"use client"
import React from "react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { AppSidebar } from "@/components/SidebarAdmin"
import { Button } from "@/components/ui/button"
import { useDispatch, useSelector } from "react-redux"
import { VerificationEmailNot } from "@/components/VerificationEmailNot";

export default function Page() {
  const { loading, user } = useSelector((state) => state.auth);
    
  const first_name = user?.first_name;
  const last_name = user?.last_name;
  // const email = user?.email;
  const is_verified = user?.profile.is_verified;


  
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {/* Header / Breadcrumb */}
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Dokumentasi
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Pendahuluan</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        {
          is_verified === false && (
            <VerificationEmailNot first_name={first_name} last_name={last_name} />
          )
        }

        {/* Content */}
        <div className="flex flex-1 flex-col gap-4 p-4 pt-4">
            <Label className="text-2xl font-bold text-center md:text-left">Pendahuluan</Label>
            <Card className="bg-teal-200">
                <CardHeader>
                    <CardTitle className="text-xl">Jadilah Afiliator Sukses & Hasilkan Komisi Jutaan Rupiah Setiap Bulan! </CardTitle>
                    <CardDescription>Platform afiliasi marketplace terlengkap di Indonesia. Posting link produk mudah, buat rack etalase pribadi, dan generate konten kampanye sosmed otomatis – semua dalam satu dashboard!</CardDescription>
                </CardHeader>
            </Card>
            
        </div>
        <div className="flex flex-col md:flex-row gap-8 p-6">
            {/* Kolom Kiri: Ilustrasi/Gambar Tutorial Besar */}
            <div className="flex-1 order-1 md:order-1 space-y-4">
                <h2 className="text-2xl font-bold mb-8 text-center md:text-left">Cara Memulai dan Penggunaan</h2>
                <div className="rounded-xl bg-gradient-to-br from-green-100 to-blue-100 border-2 border-dashed border-border flex items-center justify-center">
                {/* <p className="text-2xl font-semibold text-gray-600">Ilustrasi Langkah Mudah Afiliasi</p> */}
                    <img
                        src="/intro.png"
                        alt="Ilustrasi Langkah Mudah Afiliasi"
                        className="h-full w-full rounded-lg"
                    />
                </div>
                {/* Opsional: Tambah lebih banyak gambar kecil di bawah */}
            </div>

            {/* Kolom Kanan: 4 Langkah Tutorial */}
            <div className="flex-1 order-2 md:order-2 space-y-6 ">
                <Card className="w-full bg-background/80 backdrop-blur w-full">
                    <CardHeader>
                        <CardTitle className="text-xl">1. Buat Link Produk Anda</CardTitle>
                        <CardDescription>
                            Copy link produk dari marketplace (Shopee, Tokopedia, Lazada, dll), lalu paste di form untuk generate link afiliasi unik.
                        </CardDescription>
                    </CardHeader>
                </Card>

                <Card className="bg-background/80 backdrop-blur">
                    <CardHeader>
                    <CardTitle className="text-xl">2. Buat & Publish Produk/Rack</CardTitle>
                    <CardDescription>
                        Tambahkan produk ke rack pribadi Anda, susun etalase seperti toko online, lalu publish untuk dapatkan link rack siap share.
                    </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <Button className="bg-teal-300">Tambah Produk</Button>
                    </CardFooter>
                </Card>

                <Card className="bg-background/80 backdrop-blur">
                    <CardHeader>
                    <CardTitle className="text-xl">3. Buat Template Kampanye</CardTitle>
                    <CardDescription>
                        Gunakan fitur generator otomatis untuk buat caption, hook, text overlay, dan template Reels/TikTok/Stories profesional.
                    </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <Button className="bg-teal-300">Buat Template</Button>
                    </CardFooter>
                </Card>

                <Card className="bg-background/80 backdrop-blur">
                    <CardHeader>
                    <CardTitle className="text-xl">4. Kampanyekan di Sosial Media</CardTitle>
                    <CardDescription>
                        Posting link/rack + template ke Instagram, TikTok, Facebook, atau WhatsApp. Track komisi real-time dan cairkan earning!
                    </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <Button className="bg-teal-300">Tambah Produk</Button>
                    </CardFooter>
                </Card>
            </div>
            </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
