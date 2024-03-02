# detect-if-mobile NPM Package
A small utility to check if a user is on a mobile device in a comprehensive way.

## Installation
This npm package works as long as you're running it in the browser. It seamlessly integrates with front-end environments and frameworks, including Vanilla, Vue, React, and more.

```
$ npm i detect-if-mobile
```

## Examples
These are a few common use cases. The package is flexible and not restricted to these examples. <br />
**Returns a boolean:** *true for mobile, false not mobile*.

### React
```
import { useEffect } from "react";
import { isMobile } from "detect-if-mobile";
import { useGlobalContext } from "@contexts/GlobalContext";

const isMobileExample = () => {
  const { isMobileRef } = useGlobalContext(); // You don't need to use a context, you can just store it in a variable, ref or state.
  
  useEffect(() => {
    isMobileRef.current = isMobile(); // Now you can use this throughout your app!
  }, [])
}

export default isMobileExample;
```
### Vue
```
import { ref, onMounted, onBeforeUnmount } from "vue";
import { isMobile } from "detect-if-mobile";

export default {
  setup() {
    const isMobileRef = ref(false);

    const detectIfMobile = () => {
      isMobileRef.value = isMobile();
    };

    onMounted(() => {
      detectIfMobile();
      window.addEventListener("resize", detectIfMobile); // You can also use a resize listener, although it is not very necessary.
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", detectIfMobile);
    });

    return {
      isMobile: isMobileRef
    };
  }
};
```

### Other
```
const { isMobile } = require("detect-if-mobile");

if (isMobile()) {
    console.log("This is a mobile device.");
} else {
    console.log("This is not a mobile device.");
}
```

## Contributing
Contributions are welcome! Although I'd like to keep this package as small as possible sense it is meant to be a small utility.

### To Get Started
- Fork this repository.
- Create a new branch.
- install the dependencies with `npm install`.
- Do a `npm run test` to see if you're all set.
- For the dev environment, `npm run dev` and there you go!

```
$ npm install
$ npm run test
$ npm run dev
```

## License
This project is licensed under the [MIT](https://github.com/dBish6/detect-if-mobile/blob/master/LICENSE) License.


## Support Me
If you find this package helpful consider buying me a coffee, your support helps me stay motivated!

<a href="https://www.buymeacoffee.com/dBish" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>
