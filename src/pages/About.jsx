import BannerAbout from '../components/BannerAbout'
import aboutData from '../datas/aboutData.json'
import Collapse from '../components/Collapse'

function About() {
  return (
    <div>
      <BannerAbout />
      {aboutData.map((list) => (
        <Collapse
          key={list.id}
          aboutTitle={list.aboutTitle}
          aboutText={list.aboutText}
        />
      ))}
    </div>
  )
}

export default About
