import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
    return (
        <header className="container mx-auto">
            <nav className="flex items-center justify-between px-4 py-6">
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="reflct"
                        width={200}
                        height={60}
                        className="h-10 w-auto object-contain"
                    />
                </Link>
                <div className="flex items-center gap-4">
                    {/* TODO: add login btn and other cta */}
                </div>
            </nav>
        </header>
    );
};
