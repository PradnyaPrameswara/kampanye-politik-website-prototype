import fs from 'node:fs';
import path from 'node:path';

const webflowDir = path.resolve('public/images/webflow');
const mappings = [
  { from: '66dc04d9b379c2ee6266eb0d_Nav Logo.svg', to: ['public/images/nav-logo.svg', 'src/assets/images/nav-logo.svg', 'public/icons/nav-logo.svg'] },
  { from: '66dc04db2d24625a2063205f_Hero Bg Image.webp', to: ['public/images/shared/hero-bg-image.webp', 'src/assets/images/shared/hero-bg-image.webp'] },
  { from: '66dc04dba159a09a511fdeab_Hero Image 1.webp', to: ['public/images/shared/hero-image-1.webp', 'src/assets/images/shared/hero-image-1.webp'] },
  { from: '66de9a7731732567868e3ee0_independence-day-4th-july-american-flag-fireworks-usa-celebration-patriotic-stars-stripes.jpg', to: ['public/images/shared/hero-video-thumb.jpg', 'src/assets/images/shared/hero-video-thumb.jpg'] },
  { from: '66eac1edf906c804da623799_7.svg', to: ['public/icons/play-button.svg', 'src/assets/images/icons/play-button.svg'] },
  { from: '66dc04db3c0dbe656ece1cdd_About Image.webp', to: ['public/images/shared/about-image.webp', 'src/assets/images/shared/about-image.webp'] },
  { from: '66dc04d8dc1c17a7a5ce4650_About Logo 4.svg', to: ['public/icons/about-logo-4.svg', 'src/assets/images/icons/about-logo-4.svg'] },
  { from: '66dc04d72d24625a20631e57_About Logo 3.svg', to: ['public/icons/about-logo-3.svg', 'src/assets/images/icons/about-logo-3.svg'] },
  { from: '66dc04d8a0bd34b5410f47e4_About Logo 2.svg', to: ['public/icons/about-logo-2.svg', 'src/assets/images/icons/about-logo-2.svg'] },
  { from: '66dc1336a0bd34b5411c0bb8_Team Bg Image.jpg', to: ['public/images/team/team-bg.jpg', 'src/assets/images/team/team-bg.jpg'] },
  { from: '66dc04d922177f0428b4cc55_Team Arrow.svg', to: ['public/icons/team-arrow.svg', 'src/assets/images/icons/team-arrow.svg'] },
  { from: '66de885235a491ec7c9579d4_Team Image 6.webp', to: ['public/images/team/john-smith.webp', 'src/assets/images/team/john-smith.webp'] },
  { from: '66de8849ae04b9432a83ed16_Team Image 5.webp', to: ['public/images/team/sarah-johnson.webp', 'src/assets/images/team/sarah-johnson.webp'] },
  { from: '66de8840477d16d8930afdba_Team Image 4.webp', to: ['public/images/team/michael-brown.webp', 'src/assets/images/team/michael-brown.webp'] },
  { from: '66ead80b851d571cc8c25ed8_Event Image 1.jpg', to: ['public/images/events/event-image-1.jpg', 'src/assets/images/events/event-image-1.jpg'] },
  { from: '66ead80bd0b2f867500887cb_Event Image 2.avif', to: ['public/images/events/event-image-2.avif', 'src/assets/images/events/event-image-2.avif'] },
  { from: '66ead80b5be6571f08a1a5d7_Event Image 3.jpg', to: ['public/images/events/event-image-3.jpg', 'src/assets/images/events/event-image-3.jpg'] },
  { from: '66ead5b74b00c6857ddf134d_11.png', to: ['public/icons/event-location.png', 'src/assets/images/icons/event-location.png'] },
  { from: '66ead5b74b00c6857ddf131d_12.png', to: ['public/icons/event-date.png', 'src/assets/images/icons/event-date.png'] },
  { from: '66ead5b74b00c6857ddf12d9_13.png', to: ['public/icons/event-time.png', 'src/assets/images/icons/event-time.png'] },
  { from: '66de86499b602e1b2f5cfbc1_Objectives Image 6.jpg', to: ['public/images/objectives/advancing-social-equity-and-justice.jpg', 'src/assets/images/objectives/advancing-social-equity-and-justice.jpg'] },
  { from: '66de8604cdbecf88f8bdcd34_Objectives Image 5.jpg', to: ['public/images/objectives/protecting-human-rights-and-freedoms.jpg', 'src/assets/images/objectives/protecting-human-rights-and-freedoms.jpg'] },
  { from: '66de85ebcdae96c41a0e5b3f_Objectives Image 4.jpg', to: ['public/images/objectives/improving-healthcare-access-and-quality.jpg', 'src/assets/images/objectives/improving-healthcare-access-and-quality.jpg'] },
  { from: '66de82a68945e61eaf28d812_Blog Image 1.jpg', to: ['public/images/blog/building-strong-advocacy-coalitions.jpg', 'src/assets/images/blog/building-strong-advocacy-coalitions.jpg'] },
  { from: '66de83db9b602e1b2f5a8425_Blog Image 2.jpg', to: ['public/images/blog/community-initiatives-making-a-difference.jpg', 'src/assets/images/blog/community-initiatives-making-a-difference.jpg'] },
  { from: '66de840153d3899d0b7e7164_Blog Image 3.jpg', to: ['public/images/blog/effective-advocacy-strategies-for-success.jpg', 'src/assets/images/blog/effective-advocacy-strategies-for-success.jpg'] },
  { from: '66de84243555ab75c62dcfa4_Blog Image 4.jpg', to: ['public/images/blog/impact-of-policy-on-local-communities.jpg', 'src/assets/images/blog/impact-of-policy-on-local-communities.jpg'] },
  { from: '66de844253d3899d0b7ea2ae_Blog Image 5.jpg', to: ['public/images/blog/stories-of-community-impact-and-change.jpg', 'src/assets/images/blog/stories-of-community-impact-and-change.jpg'] },
  { from: '66de845af00d0586abb5ff9f_Blog Image 6.jpg', to: ['public/images/blog/understanding-recent-policy-changes.jpg', 'src/assets/images/blog/understanding-recent-policy-changes.jpg'] },
  { from: '66dc04da185f32d46eb9e04a_Donation Image.webp', to: ['public/images/donations/donation-image.webp', 'src/assets/images/donations/donation-image.webp'] },
  { from: '66dc04dc3c0dbe656ece1d9c_Contact Image.webp', to: ['public/images/shared/contact-image.webp', 'src/assets/images/shared/contact-image.webp'] },
  { from: '66dc04da6ea52df0b922ccc8_Contact Bg Image.webp', to: ['public/images/shared/contact-bg.webp', 'src/assets/images/shared/contact-bg.webp'] },
  { from: '66dc04d833d0f035179dae54_About Hero Image.webp', to: ['public/images/shared/banner-about.webp', 'src/assets/images/shared/banner-about.webp'] },
  { from: '66dc04d841e23610d102b9e4_Blog Bg Image.webp', to: ['public/images/shared/banner-blog.webp', 'src/assets/images/shared/banner-blog.webp'] },
  { from: '66e8134fe7001bd54fa13ef5_Facebook.svg', to: ['public/icons/social-facebook.svg', 'src/assets/images/icons/social-facebook.svg'] },
  { from: '66e8134fe7001bd54fa13efc_Instagram.svg', to: ['public/icons/social-instagram.svg', 'src/assets/images/icons/social-instagram.svg'] },
  { from: '66e8134fe7001bd54fa13f0c_Twitter.svg', to: ['public/icons/social-twitter.svg', 'src/assets/images/icons/social-twitter.svg'] },
  { from: '66f141614aaa6d68e39bfe8e_32.png', to: ['public/favicon.png'] },
  { from: '66f141623f4195436fde8b04_Frame 2.png', to: ['public/apple-touch-icon.png'] },
];

for (const m of mappings) {
  const src = path.join(webflowDir, m.from);
  if (fs.existsSync(src)) {
    for (const target of m.to) {
      const dest = path.resolve(target);
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.copyFileSync(src, dest);
    }
    console.log(`Copied ${m.from} -> ${m.to.join(', ')}`);
  } else {
    console.warn(`Source not found: ${m.from}`);
  }
}
