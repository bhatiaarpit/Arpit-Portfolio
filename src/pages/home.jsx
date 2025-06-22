import Hero from '../components/heroSection';
import SkillsSection from '../components/skillsSection';
import Aboutme from '../components/aboutMeSection';
// import GithubStreaksSection from '../components/githubSection';

const Home = () => {
  return (
    <div className="font-mono h-full">
      <Hero />
      <Aboutme />
      <SkillsSection/>
      {/* <GithubStreaksSection/> */}
    </div>
  );
};

export default Home;
