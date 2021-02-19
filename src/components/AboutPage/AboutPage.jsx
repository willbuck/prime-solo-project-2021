import React from 'react';
import MountainAbout from '../Mountains/MountainAbout'

//any user can see the about page. it features a writeup about the app and an animation

function AboutPage() {
  return (
    <>

      <div className="about-container">
        <p>Qingyuan Weixin wrote, “Before I had studied Ch’an for thirty years,
          I saw mountains as mountains, and rivers as rivers. When I arrived at a more intimate knowledge,
          I came to the point where I saw that mountains are not mountains, and rivers are not rivers. But now
          that I have got its very substance, I am at rest. For it’s just that I see mountains once again as mountains,
          and rivers once again as rivers.”
          </p>
        <p>I think the world is a wild and wonderful place, and it’s important to find a quiet space as a respite
          from the infinite cacophony of now. I found a quiet place, and I found it in zen meditation.
          Now, I won’t prosthelytize or evangelize. Simply, the practice I engage in taking a small chunk of my day to
          focus sitting and maintaining good posture while I let my thoughts ebb and flow like the tide.
          Before COVID, I’d just begun to sit at different zen centers in the metro with others engaged in the same practice,
          I was bolstered by the invisible strength of others.
          </p>
        <p>A lot of centers adapted to the pandemic by hosting sessions on zoom. I can say confidently,
          that while I appreciate what video conferencing does to help keep us connected,
          I am dissatisfied with it as a tool in this specific application. I wanted to build something quiet,
          something that didn’t feel like a panopticon. I wanted to build a virtual space we could share while we sit,
          one that doesn’t open a window into our own lives but pulls back the curtain on the space we occupy together.
          </p>
          <p className="paragraph-container">
          The tool is the virtual zendo. An online portal where users can join a meditation.
          A series of timers will control what the user sees displayed on their screen, to let them know they’re
          waiting for a session to start or that the session is already under way or that they’ve finished and
          it's time to dust off their cushion and put it away.
          And, all the while, this application shows you how many people are sitting with you.
          To help show that in a time of isolation, even when we’re by ourselves that we are part of something bigger,
          that we are not alone.
          </p>
      </div>
    <div className="bumper"></div>
    <MountainAbout />
    </>
  );
}

export default AboutPage;
