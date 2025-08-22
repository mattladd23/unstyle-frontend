import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

export default function Home() {
  return (
    <div className="grid grid-cols-12 bg-gray-50 dark:bg-gray-950">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}
