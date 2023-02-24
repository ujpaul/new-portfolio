import React from 'react'
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'
const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <BsLinkedin
          style={{ cursor: "pointer" }}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/uwimana-jean-paul/",
              "_blank"
            )
          }
        />
      </div>
      <div>
        <BsGithub
          style={{ cursor: "pointer" }}
          onClick={() => window.open("https://github.com/ujpaul ", "_blank")}
        />
      </div>
      <div>
        <BsTwitter
          style={{ cursor: "pointer" }}
          onClick={() =>
            window.open("https://twitter.com/paul_3084 ", "_blank")
          }
        />
      </div>
    </div>
  );
}

export default SocialMedia