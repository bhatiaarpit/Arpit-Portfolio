import Hero from '../components/heroSection';
import SkillsSection from '../components/skillsSection';
import Aboutme from '../components/aboutMeSection';
// import GithubStreaksSection from '../components/githubSection';

const Home = () => {
  return (
    <div className="font-mono h-full">
      <Hero />
      <SkillsSection/>
      <Aboutme />
      {/* <GithubStreaksSection/> */}
    </div>
  );
};

export default Home;
