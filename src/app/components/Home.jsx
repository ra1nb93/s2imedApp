import Image from 'next/image';

const Body = () => (
  <div className="text-center text-[#0D1B2A] w-full">
    <div className="relative w-full h-[60vh] mb-4">
      <Image
        src="/photHome.jpg"
        alt="Meditation Logo"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
    </div>
    <h2 className="text-4xl font-bold mb-4">Welcome to MeditApp</h2>
    <p className="text-lg mb-4">
      Click the button for the timer.
    </p>
  </div>
);

export default Body;