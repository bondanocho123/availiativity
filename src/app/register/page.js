"use client"
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
import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormSchemaRegister } from "./formRegisterSchema"
import Footer from "@/components/Footer"
import Link from "next/link"
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux"
import { register } from "@/store/slices/authSlice"
import { toast } from "sonner";

export default function RegisterPage() {
    const { loading } = useSelector((state) => state.auth);

    const form = useForm({
        resolver : zodResolver(FormSchemaRegister),
        defaultValues : {
            first_name : "",
            last_name : "",
            username : "",
            email : "",
            password : "",
            password2 : ""
        }
    })

    const setFieldErrorsFromBackend = (fieldErrors) => {
        Object.entries(fieldErrors).forEach(([field, messages]) => {
        const message = Array.isArray(messages) ? messages[0] : String(messages);
        form.setError(field, { type: "server", message });
        });
    };

    const dispatch = useDispatch();
    const onSubmit = async (data) => {
        try {
            const result = await dispatch(register(data)).unwrap();

            if (result.success === false) {
                toast.error(result.message);
                return;
            }

            if (result.statusCode && result.statusCode > 200){
                toast.error(result.message);

                if (result.statusCode === 400 && result.data){
                    setFieldErrorsFromBackend(result.data);
                }

                return;
            }
            
            toast.success("Berhasil registrasi!");
        } catch (error) {
            toast.error("Gagal registrasi.");

            if (error?.errors) {
                setFieldErrorsFromBackend(error.errors);
            }
        }
        
    }

    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                <div className="w-full max-w-md">
                    <Card className="border-2 border-teal-500 shadow-lg bg-white">
                        <CardHeader>
                            <CardTitle className="text-3xl font-bold text-center text-teal-500">Registrasi</CardTitle>
                            <CardDescription className="text-center text-gray-500">Daftar untuk mendapatkan layanan Kami</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className={`space-y-6 ${loading ? "opacity-50 pointer-events-none" : ""}`}>
                                    <FormField
                                        control={form.control}
                                        name="first_name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Nama Depan</FormLabel>
                                                <FormControl>
                                                    <Input type="text" placeholder="Masukkan nama depan Anda" className="border-2 border-teal-500" {...field} />
                                                </FormControl>
                                                <FormMessage className="text-red-500 text-sm mt-1" />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="last_name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Nama Belakang</FormLabel>
                                                <FormControl>
                                                    <Input type="text" placeholder="Masukkan nama belakang Anda" className="border-2 border-teal-500" {...field} />
                                                </FormControl>
                                                <FormMessage className="text-red-500 text-sm mt-1" />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="username"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Username</FormLabel>
                                                <FormControl>
                                                    <Input type="text" placeholder="Masukkan username Anda" className="border-2 border-teal-500" {...field} />
                                                </FormControl>
                                                <FormMessage className="text-red-500 text-sm mt-1" />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input type="email" placeholder="Masukkan email Anda" className="border-2 border-teal-500" {...field} />
                                                </FormControl>
                                                <FormMessage className="text-red-500 text-sm mt-1" />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Password</FormLabel>
                                                <FormControl>
                                                    <Input type="password" placeholder="Masukkan password Anda" className="border-2 border-teal-500" {...field} />
                                                </FormControl>
                                                <FormMessage className="text-red-500 text-sm mt-1" />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="password2"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Konfirmasi Password</FormLabel>
                                                <FormControl>
                                                    <Input type="password" placeholder="Masukkan konfirmasi password Anda" className="border-2 border-teal-500" {...field} />
                                                </FormControl>
                                                <FormMessage className="text-red-500 text-sm mt-1" />
                                            </FormItem>
                                        )}
                                    />
                                    <Button type="submit" disabled={loading} className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold">
                                        {
                                            loading ? (<Loader2 className="w-4 h-4 animate-spin" />) : ("Masuk")
                                        }
                                    </Button>
                                </form>
                            </Form>
                            <Link href="/login"><Label>Sudah memiliki akun ? <span className="text-blue-500">Masuk disini</span></Label></Link>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <Footer />
        </>
    );
}