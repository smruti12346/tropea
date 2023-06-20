import '@/styles/globals.css'
// import "https://fonts.googleapis.com/css?family=Archivo|Assistant:700|Barlow:500|Titillium+Web|Work+Sans&amp;display=swap"
// import "https://fonts.googleapis.com/css?family=Montserrat&amp;display=swap"
import "@/styles/plugins/editor/cms/components/pagelayouteditor/assets/css/ple-core-supplementf2e6.css?v.1.178"
import "@/styles/themes/website/assets/css/custom-color.min23a8.css?v.1685629128"
import "@/styles/themes/website/assets/aliases/sedona/assets/css/sedona23a8.css?v.1685629128"
import "@/styles/themes/website/assets/client/css/custom23a8.css?v.1685629128"
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
import Footer from '@/component/Footer'
import Header from '@/component/header'
export default function App({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  ) 
}
