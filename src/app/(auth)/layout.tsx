import Image from "next/image";
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-row">
            <section className="bg-yellow-300 p-4">
                <div>
                    <Image
                        src={'/assets/icons/logo-brand.svg'}
                        alt='logo'
                        height={100}
                        width={100}
                        className="h-auto"
                    />
                </div>
                <div className="text-white space-y-5">
                    <h1 className="h1">Storely</h1>
                    <p className="body-1">Keep your files safe and secure</p>
                </div>
            </section>
            {children}

        </div>
    );
}
