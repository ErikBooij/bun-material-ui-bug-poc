# Compilation bug demo

I have included the compiled version of main.tsx (on Bun 1.0.35).

Loading the page with this script leads to a blank page with the following error in the console.

```
Uncaught TypeError: createStyled4.default is not a function
```

Command I used to build the script:

```shell
bun build --target browser main.tsx --outdir .
```

Output:
```
  ./main.js  1404.30 KB

[97ms] bundle 1086 modules
```

It appears to have something to do with the combination of Bun and `@mui/material >=5.15.11`, because version `5.15.10` still compiles fine. However, the reason I'm filing it as a Bun bug and not a MUI bug, is that the latest versions compile fine using Parcel (and I haven't seen other complaints on the MUI issue tracker).  

It's a little [hard to tell](https://github.com/mui/material-ui/compare/v5.15.10...v5.15.11) what change exactly could've caused this, because there are quite a few...
