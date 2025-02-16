import "../../styles/globals.css";

export const metadata = {
  title: "dashboard",
  description: "crypto dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="fixed overflow-hidden">
        <main className={`w-screen grid grid-cols-5 fixed lg:static top-0`}>
          <aside className={`col-span-1 h-screen row-start-1`}>menu</aside>
          <main className="col-span-4 row-start-1">
            <header className="w-full col-span-1 px-2 py-2 h-12 sticky top-0">
              header
            </header>
            <section className="w-full mt-3 h-screen col-span-1 rounded-t-xl pb-40 overflow-x-hidden overflow-y-auto sticky top-16">
              <section className="w-full rounded-t-xl pt-5 px-10 overflow-y-auto">
                {children}
              </section>
            </section>
          </main>
        </main>
      </body>
    </html>
  );
}
