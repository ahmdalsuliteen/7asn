import Image from "next/image";
import Link from "next/link";

export default function Logo({ light = true }: { light?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="Company home">
      <Image
        src="/logo2.png"
        alt="Company"
        width={160}
        height={48}
        priority
        className={`h-10 w-auto md:h-12 ${light ? "" : "invert"}`}
      />
    </Link>
  );
}
