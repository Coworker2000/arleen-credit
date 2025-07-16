import Image from "next/image"

export function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <div className="flex items-center space-x-2">
      <Image
        src="/images/logo.svg"
        alt="The Arleen Credit Repair Program"
        width={200}
        height={60}
        className={className}
      />
    </div>
  )
}
