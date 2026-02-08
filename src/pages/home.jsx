import Hero from '../components/heroSection';
import SkillsSection from '../components/skillsSection';
import Aboutme from '../components/aboutMeSection';
// import GithubStreaksSection from '../components/githubSection';
import BentoGrid from '../components/bentoGrid';

const Home = () => {
  return (
    <div className="font-mono h-full">
      <Hero />
      {/* <Aboutme /> */}
      <BentoGrid />
      {/* <SkillsSection/> */}
      {/* <GithubStreaksSection/> */}
    </div>
  );
};

export default Home;
