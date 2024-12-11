import { Header } from "@/components/shared"
import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"

const nunito = Nunito({
	subsets: ["cyrillic"],
	variable: "--font-nunito",
	weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
	title: "Razvalnuy App",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${nunito.className} antialiased`}>
				<main className="min-h-screen">
					<Header />
					{children}
				</main>
			</body>
		</html>
	)
}
