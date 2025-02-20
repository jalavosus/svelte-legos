# sveltelegos-blue

A fork of [ankurrsinghal/svelte-legos](https://github.com/ankurrsinghal/svelte-legos), hopefully with more consistent releases and maintenance.

Collection of essential Svelte Composition Utilities
<br>
<br>

## 🚀 Features

- 🎪 [**Interactive docs & demos**](https://sveltelegos-blue.vercel.app)
- ⚡ **Fully tree shakeable**: Only take what you want, [bundle size]
- 🦾 **Type Strong**: Written in [TypeScript](https://www.typescriptlang.org/), with [TS Docs](https://github.com/microsoft/tsdoc)
- 🔋 **SSR Friendly**
- 🌎 **No bundler required**: Usable via CDN
- 🔩 **Flexible**: Configurable event filters and targets

## 🦄 Usage

```svelte
<script lang="ts">
    import { loadingAction } from "@sveltelegos-blue/svelte-legos";

    let loading = $state(false);

    handleClick = () => {
        setTimeout(() => {loading = false}, 5000);
        loading = true;
    }
</script>

<button use:loadingAction={loading} onclick={handleClick}>Click me and I'll start loading!</button>
```

```svelte
<script lang="ts">
    import { clickOutsideAction } from "@sveltelegos-blue/svelte-legos";
    
    let hidden = false;
    
    function handleClickOutside() {
        hidden = !hidden;
    }
</script>

<div class="modal" use:clickOutsideAction onclickoutside={handleClickOutside} />
```

Refer to [functions list](https://svelte-legos.surge.sh/guides) or [documentations](https://svelte-legos.surge.sh) for more details.

## UPCOMING DEPRECATION NOTICE!

Since Svelte 5 and its runes have made stores more and more obsolete, it's time to start removing them 
from this library. For many things, there's no point in specifically using a store
when a `$state()` or `$derived()` would work better. 

As such, **starting soon, I will be phasing out various legos in `stores`**, getting rid of 
or rewriting as many as possible.

Yes, this is a breaking change.

## 📦 Install

```bash
npm i @sveltelegos-blue/svelte-legos
```

## A note about version numbers

Semantic Versioning is a bit silly. 

I very likely will not be bumping this to a major version for _**quite**_ a while. 
Given that, assume that minor versions (0.**x**.y) **can** include entirely breaking changes.
They very likely won't, but, don't get comfortable. 

Patch versions (0.x.**y**) will never break things. In fact, they'll usually fix things. 

## Local setup

```bash
npm run dev
```

## Current Todos/Projects

- [ ] Actual dark mode design, not just haphazard application of colours where they look good.
- [ ] Styles consolidation (ie. actual themes)

Contributions to these lofty goals are welcome.

## 🌸 Thanks

This project is heavily inspired by the following awesome projects.

- [vueuse/vueuse](https://github.com/vueuse/vueuse)
- [streamich/react-use](https://github.com/streamich/react-use)
- [u3u/vue-hooks](https://github.com/u3u/vue-hooks)
- [logaretm/vue-use-web](https://github.com/logaretm/vue-use-web)
- [kripod/react-hooks](https://github.com/kripod/react-hooks)

## License

[MIT](LICENSE.md)
