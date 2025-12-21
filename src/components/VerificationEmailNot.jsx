"use client"

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MailCheck, SendIcon } from "lucide-react";
import Link from "next/link";
export function VerificationEmailNot({first_name, last_name}) {
  return (
    <div className="flex flex-1 flex-col p-4 pt-0">
        <Card className="w-full shadow-lg">
            <CardContent className="space-y-2">
                <div className="flex flex-row space-y-2 items-center gap-4">
                    <MailCheck className="h-10 w-10 text-blue-500" />
                    <CardTitle className="text-2xl font-bold">
                        Verifikasi Email Diperlukan
                    </CardTitle>
                </div>
                <p className="text-gray-700">
                    Terima kasih telah mendaftar <span className="font-bold">{first_name} {last_name}</span>! Satu langkah lagi untuk mengaktifkan akun Anda. Silakan klik tombol verifikasi di bawah Anda dan periksa email Anda .
                </p>
                <Link href="https://mail.google.com" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full space-x-2">
                        <SendIcon className="ml-2 h-4 w-4" /> Verifikasi Sekarang 
                    </Button>
                </Link>
            </CardContent>
        </Card>
    </div>
  );
}