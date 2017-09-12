# Webtask Compilers

A collection of useful [webtask compilers](https://webtask.io/docs/webtask-compilers) for use with [Auth0 Webtasks](https://webtask.io).

## Yaml compiler

This compiler allows you to write `YAML` as webtask code. When a request comes the compiler will compile the `YAML` into `JSON`.

```
wt create data.yaml \
  --meta wt-compiler=https://raw.githubusercontent.com/jcenturion/webtask-compilers/master/yaml_compiler.js
```

Or you can use the web [Editor](https://webtask.io/make)

<img width="1302" alt="Webtask Editor" src="https://user-images.githubusercontent.com/302314/30350479-2b576112-97ed-11e7-8cf7-308ebbe69231.png">
