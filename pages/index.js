import Head from 'next/head';
import HomeCompo from '#compo/Home';
export default function Home() {
  return (
    <div className="w-screen overflow-hidden ">
      <div className="min-h-screen  overflow-hidden">
        <Head>
          <title>WhatsApp | | 2.0</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <HomeCompo fromIndex={true} />
      </div>
    </div>
  );
}
