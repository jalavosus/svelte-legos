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
import { counterStore } from "@sveltelegos-blue/svelte-legos";

const { counter, inc, dec, set, reset } = counterStore();
</script>

<button on:click={() => inc()}>Increment</button>

{counter}

<button on:click={() => dec()}>Decrement</button>
```

```svelte
<script lang="ts">
import { clickOutsideAction } from "@sveltelegos-blue/svelte-legos";

let hidden = false;

function handleClickOutside() {
	hidden = !hidden;
}
</script>

<div class="modal" use:clickOutsideAction on:clickoutside={handleClickOutside} />
```

Refer to [functions list](https://svelte-legos.surge.sh/guides) or [documentations](https://svelte-legos.surge.sh) for more details.

## 📦 Install

```bash
npm i @sveltelegos-blue/svelte-legos
```

## Local setup

```bash
npm run start:dev
```

## Current Todos/Projects

- [ ] Actual dark mode design, not just haphazard application of colours where they look good.
- [ ] Styles consolidation (ie. actual themes)
- [ ] Dark mode on demo components in /guides.

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
