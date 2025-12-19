import AuthInitializer from "@/app/auth-initializer";

export default function AdminLayout({ children }) {
  return <AuthInitializer>{children}</AuthInitializer>;
}
