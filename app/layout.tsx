import { JetBrains_Mono} from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import StairTransition from "../components/StairEffect"
import Headers from "../components/Header"
const jetBrainsmono= JetBrains_Mono({ subsets: ["latin"] , weight:["100","200","300","400","500","600","700","800"],
  variable:"--font-jetbrainsMono)"
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Krish Ramni's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetBrainsmono.variable}>
        <Headers />
        <StairTransition />
        <PageTransition >   
          {children}
        </PageTransition>
</body>
    </html>
  );
}
