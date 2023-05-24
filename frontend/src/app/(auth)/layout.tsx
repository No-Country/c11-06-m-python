interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return <section className="mt-11 col-span-4 col-start-5">{children}</section>;
}
