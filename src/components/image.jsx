import Image from 'next/image';
   import profilePic from '../public/profile.jpg';

   const Home = () => (
     <div className={styles.container}>
       <Image src={profilePic} alt="Profile Picture" width={150} height={150} />
       <h1>Welcome to My Portfolio</h1>
       {/* Additional content */}
     </div>
   );

   export default Home;
