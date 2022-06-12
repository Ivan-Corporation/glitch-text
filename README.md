[![NPM](https://img.shields.io/npm/v/glitch-text.svg)](https://www.npmjs.com/package/glitch-text)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![NPM](https://img.shields.io/npm/l/glitch-text)
![npm](https://img.shields.io/npm/dm/glitch-text)
![GitHub stars](https://img.shields.io/github/stars/Ivan-Corporation/glitch-text?style=social)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/glitch-text)


# Glitch text for ```react```

## This nice and simple ``(1kB)`` react component can help you ``add text glitch animation`` and have some really cool themes, ```like orange glitch or blue glitch```
## The glitch is really smooth, I tried to make more distortion but it's looked awful

----
## Install:
```bash
npm i glitch-text
---
yarn add glitch-text
```

## Usage:
```jsx
// don't forget change props
import { GlitchText } from 'glitch-text';

 // orange theme by default 
const App = () => {
  return (
    <div style={{ fontSize: '70px' }}>
     
      <GlitchText theme='orange' text={'There are your text'} />

    </div>
  );
};
```

## Themes (more coming soon):

<ul>
<li>orange - (by default)
<li>blue
<li>green
<li>red
<li>white
<li>purple
</ul>


## Examples (hover on text):
---

<img src='./2.png'>

## Check here - https://react-next-js-api-auth.vercel.app/
<img src='./1.png'>

## Check here - https://komaroad.netlify.app/ 




---
## Props:

| props  | required | default  | description |
| ------------- | ------------- | ------------- | ------------- |
| text(string)| yes | - | text where you want use glitch animation |
| theme(string) | yes | orange | glitch color |

