# Simple-TypeWriter-React

A simple and easy to use library for typewriter effect in react

## DEMO
<video width="100%" height="auto" controls autoplay>
    <source src="https://github.com/uzzam-web-dev/simple-typewriter-react/blob/main/resources/typewriter-demo.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>

## Install

#### npm
---
```
npm i simple-typewriter-react 
```

#### Yarn
```
yarn add simple-typewriter-react
```

#### Bun
```
bun add simple-typewriter-react
```
___

## Usage

```
import React from 'react'
import SimpleTypeWriter from 'simple-typewriter-react'

const TestComponent = () => { 

    return (
        <div>
            <SimpleTypeWriter 
                words={["Dream", "Believe", "Do", "Repeat"]} 
                loop={true} 
    
                styles={{
		            fontWeight: "700"
	            }} 
                fontSize="20px" 
                color="red" 
            />
        </ div>
    )
}

```
# simple-typewriter-react
