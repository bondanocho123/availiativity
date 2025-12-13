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
import { FormSchemaLogin } from "./formLoginSchema"
import Footer from "@/components/Footer"
import Link from "next/link";
import { Loader2 } from "lucide-react";

export default function LoginPage() {
    const [loading, setLoading] = React.useState(false);

    const form = useForm({
        resolver : zodResolver(FormSchemaLogin),
        defaultValues : {
            email : "",
            password : ""
        }
    })

    const setFieldErrorsFromBackend = (fieldErrors) => {
        Object.entries(fieldErrors).forEach(([field, messages]) => {
        const message = Array.isArray(messages) ? messages[0] : String(messages);
        form.setError(field, { type: "server", message });
        });
    };

    const onSubmit = async (data) => {
        try {
            console.log("Form data submitted:", data);
            // Simulate successful login
        } catch (error) {
            // Simulate backend validation errors
            const backendErrors = {
                email: ["Email tidak ditemukan."],
                password: ["Password salah."]
            };
            setFieldErrorsFromBackend(backendErrors);
        }
    }

    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                <div className="w-full max-w-md">
                    <Card className="border-2 border-teal-500 shadow-lg bg-white">
                        <CardHeader>
                            <CardTitle className="text-3xl font-bold text-center text-teal-500">Login</CardTitle>
                            <CardDescription className="text-center text-gray-500">Masuk ke akun Anda untuk melanjutkan</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                                    
                                    <Button type="submit" disabled={loading} className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold">
                                        {
                                            loading ? (<Loader2 className="w-4 h-4 animate-spin" />) : ("Masuk")
                                        }
                                    </Button>
                                </form>
                            </Form>
                            <Link href="/register"><Label>Belum memiliki akun ? <span className="text-blue-500">Daftar disini</span></Label></Link>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <Footer />
        </>
    );
}