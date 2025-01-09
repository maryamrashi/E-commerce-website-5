import Document, { Html, Head, Main, NextScript } from 'next/document';
import Picture from "@/components/Picture";
import Hero from "@/components/Hero";  // Correct path to Hero component
import Header from "@/components/Header";  // Correct path to Header component
import Atext from "@/components/Atext";
import Btext from "@/components/Btext";
import Ctext from "@/components/Ctext";
import Dtext from "@/components/Dtext";
import Etext from "@/components/Etext";
import Ftext from "@/components/Ftext";
import Gtext from "@/components/Gtext";
import Footer from "@/components/Footer";

export default function Homee() {
  return (
    <div>
      {/* Render the Hero component */}
      {/* <Hero /> */}

      {/* Render the Header component */}
      {/* <main>
        <Header />
      </main> */}

<Picture />
<Atext />
<Btext />
<Ctext />
<Dtext />
<Etext />
<Ftext />
{/* <Gtext /> */}
{/* <main>
        <Footer />
      </main> */}
    </div>
  );
}
