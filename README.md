# Simple-TypeWriter-React

A simple and easy to use library for typewriter effect in react

[Watch a demo](./resources/typewriter-demo.mp4)

## Install
---
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
