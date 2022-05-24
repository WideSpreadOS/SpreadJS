# SpreadJS Fragments

## What Are Fragments?

Fragments are just HTML elements that can be placed in your #spreadApp or #spreadAppBackstage containers. Fragments may also be referred to as "Frags". A frag can be one of the following:

- Function
- Class
- Object

Each frag needs a unique name which __must__ start with an uppercase letter followed a file type of .sjs (e.g. UserCard.sjs, VideoComment.sjs, or MyCustomFrag.sjs).

Once you have created a new frag, the first step is to import any backend data (if any) *To Do: Add instruction for passing in data to the frag*. Next you can start creating your frag. First, you need to export your frag with ```export default``` followed by the frag type (function, class, object), followed by the name of your frag. Below is an example of each frag that only shows static data.

## Function Frag

```
import currentTheme from '../'

export default function MyCustomFrag() {
    return (
        // Your frag begins here.

        <div spreadClass=` ${currentTheme} custom-frag spread_card_sm`>
        
        </div>
    )
}


```



## Class Frag

```

```



## Object Frag

```

```



