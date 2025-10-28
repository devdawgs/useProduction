export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-white p-4">
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center flex flex-col gap-8">{children}</div>
      </div>
    </div>
  );
}
